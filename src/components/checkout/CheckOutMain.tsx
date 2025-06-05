'use client';
import React, { useState, useEffect, useRef } from 'react';
import LoginFormInCheckOutPage from './LoginFormInCheckOutPage';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useGlobalContext from '@/hooks/use-context';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import NiceSelectTwo from '@/utils/NiceSelectTwo';
import { countryes } from '@/data/nice-select-data';
import Image from 'next/image';
interface FormData {
    Country: string;
    Fname: string;
    Lname: string;
    Address: string;
    City: string;
    Postcode: string;
    EmailAddress: string;
    Phone: string;
}

const CheckOutMain = () => {
    const router = useRouter();
    const [cardError, setcardError] = useState<string | undefined>('');
    const [clientSecret, setclientSecret] = useState<string>('');
    const [transactionId, setTransactionId] = useState<string>('');
    const [processing, setProcessing] = useState<boolean>(false);
    const [country, setcountry] = useState<string>('');
    const { user, header, setPaymentSuccess } = useGlobalContext();
    const now = moment();
    const date = now.format('MM/DD/YY hh:mm a');
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);

    // State variables
    const [qrDataURL, setQrDataURL] = useState<string | null>(null);
    const [paymentCode, setPaymentCode] = useState<string>('');
    const [secondsLeft, setSecondsLeft] = useState<number>(300); // 5 minutes

    // Keep a ref for the polling interval & countdown interval
    const countdownRef = useRef<NodeJS.Timeout | null>(null);
    const pollRef = useRef<NodeJS.Timeout | null>(null);

    const totalPrice = cartProducts.reduce(
        (total, product) => total + (product.price ?? 0) * (product.totalCard ?? 0),
        0
    );
    const handleGoToShopPage = () => {
        router.push('/shop');
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    // 1) Generate a random 6-digit code
    const generateSixDigitCode = (): string => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    // 2) Countdown timer (display as MM:SS)
    const formatTimer = (secs: number) => {
        const m = Math.floor(secs / 60)
            .toString()
            .padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    // 3) Poll /payments/status?code=<paymentCode> every 5s
    const startPolling = (code: string) => {
        if (pollRef.current) clearInterval(pollRef.current);

        pollRef.current = setInterval(async () => {
            try {
                const resp = await axios.get(`${process.env.BASE_URL}payments/status?code=${code}`);
                // resp.data: { status: 'pending' } or { status: 'paid', paidAt, cassoTxnId } or { status: 'expired' }
                const { status, cassoTxnId, paidAt } = resp.data;
                if (status === 'paid') {
                    // Stop polling
                    if (pollRef.current) clearInterval(pollRef.current);

                    // 4) Create the final order
                    await finalizeOrder(code, cassoTxnId);
                }
            } catch (err) {
                console.error('Polling error:', err);
            }
        }, 5000);
    };

    // 4) When we see “paid,” send final /orders/create
    const finalizeOrder = async (code: string, cassoTxnId: number) => {
        try {
            // Build body with cartProducts from Redux (which is still in memory)
            const body = {
                buyerEmail: user?.email!,
                paymentCode: code,
                cassoTxnId,
                // We also pass any other fields you want, e.g. name/address/city/etc.
                // But since we already collected them in the form, we could pass them here.
                // For simplicity, let’s assume the form values are still in state or available.

                // In this example, we’ll pass only cartProducts and rely on orderSuccess.controller
                // to fill in other fields (you can expand as needed).
                cartProducts: cartProducts.map((item) => ({
                    _id: item._id,
                    productName: item.productName,
                    categoryName: item.categoryName,
                    price: item.price,
                    totalCard: item.totalCard,
                    orderDate: item.orderDate!,
                })),
            };

            // POST to /orders/create
            const resp = await axios.post(`${process.env.BASE_URL}orders/create`, body);
            const { orderId } = resp.data;

            // Mark paymentSuccess in context & redirect
            setPaymentSuccess(true);
            router.push(`/thank-you?orderId=${orderId}`);
        } catch (err) {
            console.error('finalizeOrder error:', err);
            toast.error('Có lỗi khi tạo đơn hàng cuối cùng.');
        }
    };

    // 5) When 5-minute countdown hits zero, regenerate code & QR
    const refreshQRCode = async () => {
        const newCode = generateSixDigitCode();
        setPaymentCode(newCode);
        setSecondsLeft(300);

        // 5a) Call /payments/preorder again with newCode & new expiry
        const expiresAt = moment().add(5, 'minutes').toISOString();
        try {
            await axios.post(`${process.env.BASE_URL}payments/preorder`, {
                paymentCode: newCode,
                buyerEmail: user?.email,
                amount: totalPrice,
                expiresAt,
            });
        } catch (err) {
            console.error('refresh preorder error:', err);
            toast.error('Không thể làm mới preorder.');
            return;
        }

        // 5b) Generate new QR from VietQR
        await fetchVietQR(newCode);

        // 5c) Restart countdown & polling
        if (countdownRef.current) clearInterval(countdownRef.current);
        if (pollRef.current) clearInterval(pollRef.current);
        startCountdown();
        startPolling(newCode);
    };

    // 6) Countdown helper
    const startCountdown = () => {
        if (countdownRef.current) clearInterval(countdownRef.current);
        countdownRef.current = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    if (countdownRef.current) clearInterval(countdownRef.current);
                    refreshQRCode();
                    return 300;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // 7) Call VietQR with a given code
    const fetchVietQR = async (code: string) => {
        try {
            setProcessing(true);

            const VIETQR_URL = 'https://api.vietqr.io/v2/generate';
            const CLIENT_ID = '36cb01ee-882d-469f-b1ea-237def4180d0';
            const API_KEY = 'd989661c-a00f-4408-bfd6-e4d508db41b0';

            const qrBody = {
                accountNo: 'V3CASSNAYMAM',
                accountName: 'CONG TY TNHH NAY MAM',
                acqId: '970418',
                amount: totalPrice.toString(), // “250000”
                addInfo: code, // “483912”
                template: 'UWBYaB6',
            };

            const resp = await axios.post(VIETQR_URL, qrBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-client-id': CLIENT_ID,
                    'x-api-key': API_KEY,
                },
            });
            if (resp.data?.data?.qrDataURL) {
                setQrDataURL(resp.data.data.qrDataURL);
            } else {
                throw new Error('No qrDataURL in response');
            }
        } catch (err) {
            console.error('fetchVietQR error:', err);
            toast.error('Không thể tạo QR Code. Vui lòng thử lại.');
        } finally {
            setProcessing(false);
        }
    };

    // 8) Handler for “Tạo mã QR để thanh toán”
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if (!user?.email) {
            toast.error('Vui lòng đăng nhập trước khi thanh toán');
            return;
        }
        if (cartProducts.length === 0) {
            toast.error('Giỏ hàng trống');
            return;
        }

        try {
            setProcessing(true);
            // 8a) Generate a 6-digit code
            const code = generateSixDigitCode();
            setPaymentCode(code);

            // 8b) Build expiresAt = now + 5 minutes
            const expiresAt = moment().add(5, 'minutes').toISOString();

            // 8c) POST /payments/preorder
            await axios.post(`${process.env.BASE_URL}payments/preorder`, {
                paymentCode: code,
                buyerEmail: user.email,
                amount: totalPrice,
                expiresAt,
            });

            // 8d) Generate QR
            await fetchVietQR(code);

            // 8e) Start countdown & polling
            setSecondsLeft(300);
            startCountdown();
            startPolling(code);
        } catch (err) {
            console.error('onSubmit error:', err);
            toast.error('Không thể tạo mã QR. Vui lòng thử lại.');
        } finally {
            setProcessing(false);
        }
    };

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (countdownRef.current) clearInterval(countdownRef.current);
            if (pollRef.current) clearInterval(pollRef.current);
        };
    }, []);

    const selectHandler = () => {};

    return (
        <>
            <section className="checkout-area pt-115 pb-100">
                <div className="container small-container">
                    <div className="coupon-accordion">
                        {user?.email ? (
                            <h3>
                                {' '}
                                Rất vui được gặp bạn {user?.name} ,
                                <span id="showlogin"> chào mừng đến với GrowSphere </span>
                            </h3>
                        ) : (
                            <h3>
                                Khách hàng cũ? <span id="showlogin">Click để đăng nhập</span>
                            </h3>
                        )}
                        <div id="checkout-login" className={`coupon-content d-block`}>
                            <div className="coupon-info">
                                <p className="coupon-text"></p>
                                {/* login form  */}

                                {!user?.email && <LoginFormInCheckOutPage />}
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {/* billing info */}
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Chi tiết hoá đơn</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Tên <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={user?.email && user.name}
                                                    placeholder="Nhập tên của bạn"
                                                    {...register('Fname', {
                                                        required: 'Vui lòng nhập tên',
                                                    })}
                                                />
                                                {errors.Fname && (
                                                    <span className="error-message">
                                                        {errors.Fname.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Địa chỉ <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Địa chỉ"
                                                    {...register('Address', {
                                                        required: 'Vui lòng nhập địa chỉ',
                                                    })}
                                                />
                                                {errors.Address && (
                                                    <span className="error-message">
                                                        {errors.Address.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Điện thoại <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={user?.email && user.phone}
                                                    placeholder="Số điện thoại"
                                                    {...register('Phone', {
                                                        required: 'Vui lòng nhập số điện thoại',
                                                    })}
                                                />
                                                {errors.Phone && (
                                                    <span className="error-message">
                                                        {errors.Phone.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>
                                                    Địa chỉ Email{' '}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    defaultValue={user?.email && user.email}
                                                    placeholder=""
                                                    {...register('EmailAddress', {
                                                        required: 'Vui lòng nhập email',
                                                    })}
                                                />
                                                {errors.EmailAddress && (
                                                    <span className="error-message">
                                                        {errors.EmailAddress.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* order info */}
                            <div className="col-lg-6">
                                <div className="your-order mb-30 ">
                                    <h3>Đơn hàng của bạn</h3>
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Sản phẩm</th>
                                                    <th className="product-total">Tổng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartProducts.map((item, index) => (
                                                    <tr className="cart_item" key={index}>
                                                        <td className="product-name">
                                                            {item.productName}{' '}
                                                            <strong className="product-quantity">
                                                                {' '}
                                                                × {item?.totalCard}
                                                            </strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">
                                                                ${item?.totalCard * item.price}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Tổng tiền giỏ hàng</th>
                                                    <td>
                                                        <span className="amount">
                                                            ${totalPrice}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Tổng hoá đơn</th>
                                                    <td>
                                                        <strong>
                                                            <span className="amount">
                                                                ${totalPrice}
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="payment-method">
                                        {/* If no QR yet, show “Tạo mã QR” button */}
                                        {!qrDataURL && (
                                            <div className="order-button-payment mt-20">
                                                {cartProducts.length > 0 ? (
                                                    <button
                                                        type="submit"
                                                        className={
                                                            user?.email
                                                                ? 'bd-fill__btn'
                                                                : 'custome_disable'
                                                        }
                                                        disabled={!user?.email || processing}
                                                    >
                                                        {processing
                                                            ? 'Đang tạo mã QR...'
                                                            : 'Tạo mã QR để thanh toán'}
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={handleGoToShopPage}
                                                        className={
                                                            user?.email
                                                                ? 'bd-fill__btn'
                                                                : 'custome_disable'
                                                        }
                                                    >
                                                        Thêm sản phẩm vào giỏ hàng
                                                    </button>
                                                )}
                                            </div>
                                        )}

                                        {/* If we have qrDataURL, display it + countdown + code */}
                                        {qrDataURL && (
                                            <div className="qr-section mt-20 text-center">
                                                <p>
                                                    Quét mã QR bên dưới để thanh toán <br />
                                                    <strong>
                                                        (Hỗ trợ NAPAS, VNPAY, Momo – bảo mật 2FA,
                                                        128-bit SSL)
                                                    </strong>
                                                </p>

                                                <div className="qr-image mb-3">
                                                    <Image
                                                        src={qrDataURL}
                                                        alt="QR Code thanh toán"
                                                        width={300}
                                                        height={388}
                                                    />
                                                </div>

                                                <div className="qr-info">
                                                    <p>
                                                        <strong>Nội dung chuyển khoản:</strong>{' '}
                                                        <span
                                                            style={{
                                                                fontSize: '1.2em',
                                                                color: '#d9534f',
                                                            }}
                                                        >
                                                            {paymentCode}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <strong>Hạn chót thanh toán:</strong>{' '}
                                                        <span
                                                            style={{
                                                                fontSize: '1.2em',
                                                                color: '#0275d8',
                                                            }}
                                                        >
                                                            {formatTimer(secondsLeft)}
                                                        </span>
                                                    </p>
                                                    <p style={{ fontSize: '0.9em', color: '#777' }}>
                                                        *Sau khi thời gian kết thúc, mã QR sẽ tự
                                                        động làm mới.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckOutMain;
