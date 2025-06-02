import Link from "next/link";
import React from "react";
import thumb1 from "../../../public/assets/img/about/about-big-shape.png";
import thumb2 from "../../../public/assets/img/about/about-icon.png";
import thumb3 from "../../../public/assets/img/about/about-img-1.png";
import thumb4 from "../../../public/assets/img/about/about-img-2.png";
import thumb5 from "../../../public/assets/img/about/about-shape-1.png";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="bd-about__area grey-bg p-relative z-index-1 pt-130 pb-70">
      <div className="container">
        <div className="bd-about__bg-wrapper p-relative">
          <Image
            style={{ width: "100%", height: "auto" }}
            className="bd-about__bg-shape "
            src={thumb1}
            alt="about-big-shape"
          />
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="bd-about__content-wrapper mb-60">
              <div className="bd-section__title-wrapper mb-35">
                <span className="bd-sub__title">Về Chúng Tôi</span>
                <h2 className="bd-section__title mb-35">
                  Chúng tôi sẽ mang đến không gian xanh cho các bạn.
                </h2>
                <p>
                  Chúng tôi đang chạm tới một tầm cao mới trong hành trình xanh – nơi cuộc sống trở nên trong lành và tự nhiên hơn bao giờ hết. Không còn là những góc nhà tẻ nhạt, mà là không gian tràn ngập sức sống nhờ những bộ kit trồng cây tiện lợi và thuần tự nhiên. Cũng giống như ảo ảnh kéo gần đường chân trời, bộ kit của chúng tôi giúp bạn kéo thiên nhiên lại gần hơn trong chính căn nhà của mình.
                </p>
              </div>
              <div className="bd-about__content">
                <div className="bd-about__features">
                  <div className="bd-adbout__icon">
                    <Image style={{ width: "100%", height: "100%" }} src={thumb2} alt="about-icon" />
                  </div>
                  <div className="bd-about__text">
                    <h4>100% Chất lượng vì sức khỏe</h4>
                    <p>
                      Những lo toan dần lắng xuống. Cũng giống như ảo ảnh khiến đường chân trời gần lại, bộ kit trồng cây của chúng tôi mang thiên nhiên đến gần bạn hơn bao giờ hết – nhẹ nhàng, tĩnh lặng và đầy sức sống.
                    </p>
                  </div>
                </div>
                <div className="bd-about__action">
                  <Link className="bd-bn__btn-1" href="/about">
                    Về Chúng Tôi
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="bd-about__thumb-wrapper p-relative mb-60 ">
              <div className="bd-about__thumb-1 w-img">
                <Image
                  src={thumb3}
                  alt="about-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="bd-about__thumb-2">
                <Image
                  src={thumb4}
                  alt="about-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="bd-about__quite-box">
                <div className="quite-content">
                  <p>{`"Cây xanh tươi tốt mang lại không gian sống trong lành và tràn đầy sức sống cho bạn!"`}</p>
                </div>
                <div className="quite-icon">
                  <i className="flaticon-quote"></i>
                </div>
                <div className="bd-about__quite-name">
                  <span>Ngọc Ánh</span>
                </div>
              </div>
              <div className="bd-about__shape-1">
                <Image
                  src={thumb5}
                  alt="about-shape"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="bd-about__shape-2"></div>
              <div className="bd-about__shape-3"></div>
              <div className="bd-about__shape-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
