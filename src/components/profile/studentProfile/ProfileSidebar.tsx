"use client";
import useGlobalContext from "@/hooks/use-context";
import React from "react";
import { useRouter } from "next/navigation";
const ProfileSidebar = () => {
  const { logout, user } = useGlobalContext();
  const router = useRouter();
  const handleAdminPannel = () => {
    router.push(`${process.env.ADMIN_URL}`);
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <div className="student-profile-sidebar mb-30">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i className="fas fa-tachometer-alt-fast"></i>
              Số liệu
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <i className="fas fa-user"></i> Hồ Sơ Của Tôi
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="history-tab"
              data-bs-toggle="tab"
              data-bs-target="#history"
              type="button"
              role="tab"
              aria-controls="history"
              aria-selected="false"
            >
              <i className="fas fa-cart-plus"></i> Sản Phẩm Đặt Hàng
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="wishlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#wishlist"
              type="button"
              role="tab"
              aria-controls="wishlist"
              aria-selected="false"
            >
              <i className="fa-solid fa-money-check"></i> Lịch Sử Thanh Toán
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              <i className="fas fa-star"></i> Đánh Giá
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="comments-tab"
              data-bs-toggle="tab"
              data-bs-target="#comments"
              type="button"
              role="tab"
              aria-controls="comments"
              aria-selected="false"
            >
              <i className="fa-solid fa-comment"></i> Bình Luận
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="setting-tab"
              data-bs-toggle="tab"
              data-bs-target="#setting"
              type="button"
              role="tab"
              aria-controls="setting"
              aria-selected="false"
            >
              <i className="fas fa-cog"></i> Cài Đặt
            </button>
          </li>
          {user?.role === "admin" && (
            <li className="nav-item" role="presentation">
              <button
                onClick={handleAdminPannel}
                className="nav-link"
                
              >
                <i className="fa-solid fa-lock"></i> Bảng Điều Khiển Quản Trị
              </button>
            </li>
          )}
         
          <li className="nav-item" role="presentation">
            <button
              onClick={logout}
              className="nav-link"
              id="logout-tab"
              data-bs-toggle="tab"
              data-bs-target="#logout"
              type="button"
              role="tab"
              aria-controls="logout"
              aria-selected="false"
            >
              <i className="fas fa-sign-out-alt"></i> Đăng xuất
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
