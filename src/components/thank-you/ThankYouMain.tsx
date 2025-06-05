'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { clear_cart } from '@/redux/slices/cartSlice';
import Link from 'next/link';

const ThankYouMain: React.FC = () => {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId'); // e.g. "/thank-you?orderId=ABC123"
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        // 1) Calculate total
        const total = cartProducts.reduce(
            (acc, item) => acc + (item.price ?? 0) * (item.totalCard ?? 0),
            0
        );
        setTotalPrice(total);
    }, [cartProducts, dispatch]);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            {/* 1) Big green checkmark icon */}
                            <div className="mb-3">
                                <i className="fas fa-check-circle fa-4x text-success"></i>
                            </div>

                            {/* 2) Thank-you heading */}
                            <h2 className="fw-bold text-dark mb-2">Cảm ơn bạn đã mua hàng!</h2>
                            <p className="text-secondary mb-1">
                                Chúng tôi đã nhận đơn hàng của bạn.
                            </p>
                            <p className="text-secondary mb-4">
                                Đơn hàng của bạn sẽ được giao trong vòng 1-2 ngày làm việc.
                            </p>

                            {/* 3) Display the orderId, if present */}
                            {orderId && (
                                <p className="fw-medium text-dark mb-4">
                                    Mã đơn hàng của bạn là:{' '}
                                    <span className="text-primary">#{orderId}</span>
                                </p>
                            )}

                            {/* 4) Order summary table (if any products) */}
                            {cartProducts.length > 0 ? (
                                <div className="table-responsive mb-4">
                                    <table className="table table-bordered mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th className="py-2">Sản phẩm</th>
                                                <th className="py-2">Tổng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartProducts.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="py-2">
                                                        {item.productName} × {item.totalCard}
                                                    </td>
                                                    <td className="py-2">
                                                        {new Intl.NumberFormat('vi-VN').format(
                                                            (item.price ?? 0) *
                                                                (item.totalCard ?? 0)
                                                        )}{' '}
                                                        ₫
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot className="table-light">
                                            <tr>
                                                <th className="py-2">Tổng cộng</th>
                                                <th className="py-2">
                                                    {new Intl.NumberFormat('vi-VN').format(
                                                        totalPrice
                                                    )}{' '}
                                                    ₫
                                                </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            ) : (
                                <div className="mb-4">
                                    <p className="text-muted">Không có sản phẩm để hiển thị.</p>
                                </div>
                            )}

                            {/* 5) Back to Home button */}
                            <Link href="/shop" className="btn btn-primary px-4 py-2">
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouMain;
