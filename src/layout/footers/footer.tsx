
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import support from "../../../public/assets/img/icon/support.png";

// import axios from "axios";
// import { CategoryType } from "@/interFace/api-interFace";
// const FooterOne = () => {
//   const [categories, setCategories] = useState<CategoryType[]>([]);

//   useEffect(() => {
//     axios
//       .get(`${process.env.BASE_URL}setting/category`)
//       .then((res) => {
//         setCategories(res.data);
//       })
//       .catch((e) => console.log(e));
//   }, []);
//   return (
//     <footer>
//       <section className="bd-footer__area grey-bg pt-100 pb-40">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
//               <div className="bd-footer__widget footer-col-1 mb-60">
//                 <div className="bd-footer__info">
//                   <div className="bd-footer__logo">
//                     <h4>
//                       Thông tin về chúng tôi
//                     </h4>
//                   </div>
                 
//                   <div className="bd-footer__contact">
//                     <span>
//                       <Link href="mailto:Info@example.com">
//                         <i className="fa-regular fa-envelope"></i>
//                         mnanh0126@gmail.com{" "}
//                       </Link>{" "}
//                     </span>
//                     <span>
//                       <i className="fa-solid fa-location-dot"></i>
//                       Trường Đại Học FPT, Hà Nội
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
//               <div className="bd-footer__widget footer-col-2 mb-60">
//                 <div className="bd-footer__widget-title">
//                   <h4>Liên kết nhanh</h4>
//                 </div>
//                 <div className="bd-footer__link">
//                   <ul>
//                     <li>
//                       <Link href="/about">Về công ty chúng tôi</Link>
//                     </li>
//                     <li>
//                       <Link href="/wishlist">Danh sách yêu thích</Link>
//                     </li>
//                     <li>
//                       <Link href="/cart">Giỏ hàng</Link>
//                     </li>
                    
//                     <li>
//                       <Link href="/privacy-policy">Điều khoản & Điều kiện</Link>
//                     </li>
//                     <li>
//                       <Link href="/privacy-policy">Chính sách bảo mật</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
           
//             <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
//               <div className="bd-footer__widget mb-60">
                
//                 <div className="bd-footer__support-wrapper">
//                   <div className="bd-fotter__support-icon">
//                     <Image src={support} alt="support-img" />
//                   </div>
//                   <div className="bd-footer__support-inner">
//                     <span>8:30 AM - 9:30 PM</span>
//                     <h4>
//                       <Link href="tel:+58569502352">+84 964 721 763 </Link>{" "}
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="bd-sub__fotter">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-xl-12 col-lg-12">
//               <div className="bd-footer__copyright">
//                 <ul>
//                   <li>All Rights Reserved</li>
//                   <li>
//                     Copyrighted by ©2025{" "}
                 
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterOne;

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import support from "../../../public/assets/img/icon/support.png";

import axios from "axios";
import { CategoryType } from "@/interFace/api-interFace";
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
            {/* Cột 1 - Thông tin liên hệ */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="bd-footer__widget footer-col-1 mb-60">
                <div className="bd-footer__info">
                  <div className="bd-footer__logo">
                    <h4>Thông tin về chúng tôi</h4>
                  </div>
                 
                  <div className="bd-footer__contact">
                    <span>
                      <Link href="mailto:Info@example.com">
                        <i className="fa-regular fa-envelope"></i>
                        mnanh0126@gmail.com{" "}
                      </Link>{" "}
                    </span>
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                      Trường Đại Học FPT, Hà Nội
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột 2 - Liên kết nhanh */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="bd-footer__widget footer-col-2 mb-60">
                <div className="bd-footer__widget-title">
                  <h4>Liên kết nhanh</h4>
                </div>
                <div className="bd-footer__link">
                  <ul>
                    <li>
                      <Link href="/about">Về công ty chúng tôi</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">Danh sách yêu thích</Link>
                    </li>
                    <li>
                      <Link href="/cart">Giỏ hàng</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Điều khoản & Điều kiện</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Chính sách bảo mật</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
            {/* Cột 3 - Hỗ trợ */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="bd-footer__widget mb-60">
                <div className="bd-footer__widget-title">
                  <h4>Hỗ trợ khách hàng</h4>
                </div>
                <div className="bd-footer__support-wrapper">
                  <div className="bd-fotter__support-icon">
                    <Image src={support} alt="support-img" />
                  </div>
                  <div className="bd-footer__support-inner">
                    <span>8:30 AM - 9:30 PM</span>
                    <h4>
                      <Link href="tel:+58569502352">+84 964 721 763</Link>
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
            <div className="col-xl-12 col-lg-12">
              <div className="bd-footer__copyright text-center">
                <ul>
                  <li>Bản quyền thuộc về ©2025</li>
                  <li>Đã đăng ký bản quyền</li>
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