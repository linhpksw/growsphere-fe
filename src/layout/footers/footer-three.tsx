import Link from 'next/link';
import React from 'react';
import footerlogo from '../../../public/assets/img/logo/horizontal-dark.svg';
import Image from 'next/image';
const FooterThree = () => {
    return (
        <footer>
            <div className="bd-footer__area grey-bg pt-100 pb-60">
                <div className="bd-footer__style-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="bd-footer__widget text-center mb-40">
                                    <div className="bd-footer__logo">
                                        <Link href="/">
                                            <Image src={footerlogo} alt="footer-logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="bd-footer__widget text-center mb-40">
                                    <div className="bd-footer__link">
                                        <ul>
                                            <li>
                                                <Link href="/about">Về Website Của Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link href="/shop">Các Sản Phẩm Mới Nhất</Link>
                                            </li>
                                            <li>
                                                <Link href="/checkout">Các Loại Thanh Toán</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">Các Giải Thưởng</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">Các Đối Tác</Link>
                                            </li>
                                            <li>
                                                <Link href="/shop">Khuyến Mãi</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bd-footer__widget text-center mb-40">
                                    <div className="bd-footer__social">
                                        <Link href="https://www.facebook.com/" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>

                                        <Link href="https://twitter.com/?lang=en" title="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </Link>

                                        <Link
                                            href="https://www.linkedin.com/"
                                            title="Linkedin"
                                            target="_blank"
                                        >
                                            <i className="fab fa-linkedin"></i>
                                        </Link>

                                        <Link
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            title="Instagram"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bd-sub__fotter">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="bd-footer__copyright text-center">
                                <ul>
                                    <li>Bản quyền thuộc về chúng tôi</li>
                                    <li>
                                        GrowSphere{' '}
                                        <span>
                                            <Link href="https://themeforest.net/user/bdevs/portfolio">
                                            </Link>
                                        </span>
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

export default FooterThree;
