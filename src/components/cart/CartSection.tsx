'use client';
import useGlobalContext from '@/hooks/use-context';
import { CartProductType } from '@/interFace/interFace';
import {
    cart_product,
    clear_cart,
    decrease_quantity,
    remove_cart_product,
} from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const CartSection = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const totalPrice = cartProducts.reduce(
        (total, product) => total + (product.price ?? 0) * (product.totalCard ?? 0),
        0
    );
    const removeAllProduct = () => {
        dispatch(clear_cart());
    };

    const handleAddToCart = (product: CartProductType) => {
        dispatch(cart_product(product));
    };

    const handDecressCart = (product: CartProductType) => {
        dispatch(decrease_quantity(product));
    };

    const handleDelteProduct = (product: CartProductType) => {
        dispatch(remove_cart_product(product));
    };

    const handleChange = (e: any) => {};
    return (
        <>
            {cartProducts.length === 0 && (
                <div className="container">
                    <div className="empty-text pt-100 pb-100 text-center">
                        <h3>Giỏ hàng trống</h3>
                    </div>
                </div>
            )}
            {cartProducts.length >= 1 && (
                <section className="cart-area pt-115 pb-130">
                    <div className="container small-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Hình ảnh</th>
                                                <th className="cart-product-name">Sản phẩm</th>
                                                <th className="product-price">Đơn giá</th>
                                                <th className="product-quantity">Số lượng</th>
                                                <th className="product-subtotal">Tổng</th>
                                                <th className="product-remove">Xoá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartProducts.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="product-thumbnail">
                                                        <Link href={`/shop-details/${item._id}`}>
                                                            <Image
                                                                src={item.img}
                                                                width={50}
                                                                height={50}
                                                                style={{
                                                                    width: 'auto',
                                                                    height: 'auto',
                                                                }}
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link href={`/shop-details/${item._id}`}>
                                                            {item.productName}
                                                        </Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="amount">
                                                            {new Intl.NumberFormat('vi-VN', {
                                                                style: 'currency',
                                                                currency: 'VND',
                                                            }).format(item.price)}
                                                        </span>
                                                    </td>
                                                    <td className="product-quantity text-center">
                                                        <div className="product-quantity mt-10 mb-10">
                                                            <div className="product-quantity-form">
                                                                <form
                                                                    onSubmit={(e) =>
                                                                        e.preventDefault()
                                                                    }
                                                                >
                                                                    <button
                                                                        type="button"
                                                                        className="cart-minus"
                                                                        onClick={() =>
                                                                            handDecressCart(item)
                                                                        }
                                                                    >
                                                                        <i className="far fa-minus"></i>
                                                                    </button>
                                                                    <input
                                                                        className="cart-input"
                                                                        type="text"
                                                                        onChange={handleChange}
                                                                        value={item.totalCard}
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="cart-plus"
                                                                        onClick={() =>
                                                                            handleAddToCart(item)
                                                                        }
                                                                    >
                                                                        <i className="far fa-plus"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="amount">
                                                            {new Intl.NumberFormat('vi-VN', {
                                                                style: 'currency',
                                                                currency: 'VND',
                                                            }).format(item.totalCard * item.price)}
                                                        </span>
                                                    </td>
                                                    <td
                                                        className="product-remove"
                                                        onClick={() => handleDelteProduct(item)}
                                                    >
                                                        <i className="fa fa-times"></i>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon2">
                                                <button
                                                    className="bd-border__btn"
                                                    name="update_cart"
                                                    type="submit"
                                                    onClick={removeAllProduct}
                                                >
                                                    Xóa giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Tổng giá trị giỏ hàng</h2>
                                            <ul className="mb-20">
                                                <li>
                                                    Tổng tiền tạm tính{' '}
                                                    <span>
                                                        {new Intl.NumberFormat('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(totalPrice)}
                                                    </span>
                                                </li>
                                                <li>
                                                    Tổng{' '}
                                                    <span>
                                                        {new Intl.NumberFormat('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(totalPrice)}
                                                    </span>
                                                </li>
                                            </ul>

                                            <Link className="bd-border__btn" href="/checkout">
                                                Tiến hành thanh toán
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default CartSection;
