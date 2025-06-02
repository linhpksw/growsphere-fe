import React from 'react';
import thumbOne from '../../../public/assets/img/banner/about-img-3.png';
import thumbTwo from '../../../public/assets/img/about/about-img-4.png';
import thumbThree from '../../../public/assets/img/about/about-img-5.png';
import authorImg from '../../../public/assets/img/about/author.png';
import authorSigneture from '../../../public/assets/img/about/author-signature.png';
import Image from 'next/image';
const AboutSectionTwo = () => {
    return (
        <section className="bd-about__area pt-130 pb-65">
            <div className="container">
                <div className="row g-0">
                    <div className="col-xxl-5 col-xl-5 col-lg-6">
                        <div className="bd-about__wrapper mb-60">
                            <div className="bd-about__image-1 m-img mb-60">
                                <Image src={thumbOne} alt="about-image" />
                            </div>
                            <div className="bd-about__image-2 m-img">
                                <Image src={thumbTwo} alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-6">
                        <div className="bd-about__content-box mb-60">
                            <div className="bd-section__title-wrapper mb-50">
                                <span className="bd-sub__title">Về Chúng Tôi</span>
                                <h2 className="bd-section__title mb-30">
                                    Chúng tôi sẽ mang đến không gian xanh cho các bạn.
                                </h2>
                            </div>
                            <div className="bd-about__inner">
                                <div className="bd-about__image-3">
                                    <Image src={thumbThree} alt="about-image" />
                                </div>
                                <div className="bd-about__info">
                                    <p>
                                        Chúng tôi đã vươn tới tầm cao mới trong hành trình chăm sóc
                                        cây xanh, khi không gian xung quanh trở nên trong lành và
                                        tĩnh lặng như bầu trời đêm không còn ánh sao lấp lánh. Cũng
                                        giống như ảo ảnh kéo gần đường chân trời của biển, bộ kit
                                        trồng cây của chúng tôi mang thiên nhiên đến gần hơn trong
                                        ngôi nhà bạn. Luôn mang đến cho bạn những sản phẩm cây xanh
                                        phù hợp nhất, chính sự tận tâm và khát khao không ngừng hoàn
                                        thiện đã giúp chúng tôi khác biệt trên thị trường.
                                    </p>
                                    <div className="bd-about__author">
                                        <div className="bd-about__author-thumb">
                                            <Image
                                                src={authorImg}
                                                style={{ width: '130px', height: '130px' }}
                                                alt="about-image"
                                            />
                                        </div>
                                        <div className="bd-about__author-info">
                                            <h4>Noyaviram</h4>
                                            <span>Nhà Sáng Lập Cute Của &quote;Nảy Mầm&quote;</span>
                                            <div className="ba-author__signature">
                                                <Image src={authorSigneture} alt="about-image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionTwo;
