"use client";
import React from "react";
import Image from "next/image";
import ProfileSidebar from "./ProfileSidebar";
import DashboardCounter from "./DashboardCounter";
import DefaultDashboard from "./DefaultDashboard";
import MyProfile from "./MyProfile";
import thumb from "../../../../public/assets/img/icon/user-icon.png";
import OrderHistory from "./OrderHistory";
import UpdateProfile from "./UpdateProfile";
import WishlistProduct from "./PaymentInfo";
import useGlobalContext from "@/hooks/use-context";
import UserReviews from "./UserReviews";
import UserComments from "./UserComments";
import PaymentInfo from "./PaymentInfo";

const ProfileSection = () => {
  const { user } = useGlobalContext();
  return (
    <div className="course-details-area pt-120 pb-100">
      <div className="container">
        <div className="student-profile-author pb-30">
          <div className="student-profile-author-img">
            {user?.photo ? (
              <Image
                src={user?.photo}
                alt="user image"
                width={120}
                height={120}
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <Image
                src={thumb}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
            )}
          </div>
          <div className="student-profile-author-text">
            <span>Xin chào,</span>
            <h3 className="student-profile-author-name text-capitalize"> {user?.name} </h3>
          </div>
        </div>
        <div className="row">
          <ProfileSidebar />
          <div className="col-xl-9 col-lg-8">
            <div className="student-profile-content">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h4 className="mb-25">Số liệu</h4>
                  <div className="student-profile-content-fact">
                    <DashboardCounter />
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="mb-25">Sản Phẩm Đã Mua</h4>

                        <DefaultDashboard />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h4 className="mb-25">Hồ Sơ Của Tôi</h4>
                  <MyProfile />
                </div>

                <div
                  className="tab-pane fade"
                  id="wishlist"
                  role="tabpanel"
                  aria-labelledby="wishlist-tab"
                >
                  <h4 className="mb-25">Thông Tin Thanh Toán</h4>
                  <div className="student-profile-wishlist">
                    <div className="row">
                      <PaymentInfo/>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <h4 className="mb-25">Đánh Giá</h4>
                  <UserReviews />
                </div>

                <div
                  className="tab-pane fade"
                  id="comments"
                  role="tabpanel"
                  aria-labelledby="comments-tab"
                >
                  <h4 className="mb-25">Bình luận</h4>
                  <UserComments/>
                </div>

                <div
                  className="tab-pane fade"
                  id="history"
                  role="tabpanel"
                  aria-labelledby="history-tab"
                >
                  <h4 className="mb-25">Lịch Sử Đặt Hàng</h4>
                  <OrderHistory />
                </div>

                <div
                  className="tab-pane fade"
                  id="setting"
                  role="tabpanel"
                  aria-labelledby="setting-tab"
                >
                  <h4 className="mb-25">Cài Đặt</h4>
                  <UpdateProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
