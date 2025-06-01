import React from 'react';
import bgImage from "../../../public/assets/img/banner/banner-1-i.jpg"
const AboutPagetitle = () => {
    return (
        <section className="bd-page__banner-area include-bg page-overlay" style={{ backgroundImage: `url(${bgImage.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="bd-page__banner-content text-center">
                            <h2>Về GrowSphere</h2>
                            <span>Không gian cây xanh thuần khiết và hoàn hảo cho cuộc sống của bạn</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPagetitle;