import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import footerLogo from '../../../public/assets/img/logo/horizontal-dark.svg';
import support from '../../../public/assets/img/icon/support.png';
import discover from '../../../public/assets/img/icon/momo.png';
import masterCard from '../../../public/assets/img/icon/napas.png';
import paypal from '../../../public/assets/img/icon/vnpay.png';
import visa from '../../../public/assets/img/icon/visa.png';
import axios from 'axios';
import { CategoryType } from '@/interFace/api-interFace';
const FooterOne = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        axios
            .get(`${process.env.BASE_URL}setting/category`)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <footer>
            <section className="bd-footer__area grey-bg pt-100 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-1 mb-60">
                                <div className="bd-footer__info">
                                    <div className="bd-footer__logo">
                                        <Link href="/">
                                            <Image src={footerLogo} alt="footer-logo" width={270} />
                                        </Link>
                                    </div>
                                    <p>
                                        Chúng tôi cam kết mang đến cho bạn những bộ kit trồng cây chất lượng, giúp bạn dễ dàng phát triển không gian xanh tại nhà.
                                    </p>
                                    <div className="bd-footer__contact">
                                        <span>
                                            <Link href="mailto:Info@example.com">
                                                <i className="fa-regular fa-envelope"></i>
                                                mnanh0126@gmail.com{' '}
                                            </Link>{' '}
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-location-dot"></i>Hà Nội, Hoà Lạc
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-2 mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Các Liên Kết</h4>
                                </div>
                                <div className="bd-footer__link">
                                    <ul>
                                        <li>
                                            <Link href="/about">Về Website Của Chúng Tôi</Link>
                                        </li>
                                        <li>
                                            <Link href="/wishlist">Danh Sách Yêu Thích</Link>
                                        </li>
                                        <li>
                                            <Link href="/cart">Giỏ Hàng</Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">Khuyến Mãi</Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">Điều khoản & Điều kiện</Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">Chính Sách Bảo Mật</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-3 mb-60">
                                <div className="bd-footer__widget-title">
                                </div>
                                <div className="bd-footer__link">
                                    <ul>
                                        {categories?.length ? (
                                            <>
                                                {categories?.map((item) => (
                                                    <li key={item?._id}>
                                                        <Link
                                                            className="text-capitalize"
                                                            href="/shop"
                                                        >
                                                            {item?.categoryName}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Bản Tin</h4>
                                </div>
                                <div className="bd-footer__subcribe p-relative mb-40">
                                    <form action="#">
                                        <input type="text" placeholder="Nhập Email Của Bạn" />
                                        <button className="bd-footer__s-btn">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="bd-footer__support-wrapper">
                                    <div className="bd-fotter__support-icon">
                                        <Image src={support} alt="support-img" />
                                    </div>
                                    <div className="bd-footer__support-inner">
                                        <span>8:30 Sáng - 9:30 Tối</span>
                                        <h4>
                                            <Link href="tel:+58569502352">0964 721 763 </Link>{' '}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bd-sub__fotter">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-footer__copyright">
                                <ul>
                                    <li>Bản quyền thuộc về chúng tôi</li>
                                    <li>
                                        GrowSphere{' '}
                                        <span>
                                            <Link href="https://themeforest.net/user/bdevs/portfolio">
                                            </Link>{' '}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-footer__payment">
                                <ul>
                                    <li>
                                        <span>Chúng tôi hỗ trợ</span>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image src={discover} style={{  width: '35px', height: '35px', }} alt="discover" />{' '}
                                        </Link>{' '}
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image src={masterCard} style={{  width: '40px', height: '40px', }} alt="mastercard" />{' '}
                                        </Link>{' '}
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image src={paypal} style={{  width: '40px', height: '40px', }} alt="paypal" />{' '}
                                        </Link>{' '}
                                    </li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;
