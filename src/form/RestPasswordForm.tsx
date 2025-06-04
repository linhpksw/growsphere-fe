"use client";
import useGlobalContext from "@/hooks/use-context";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  password: string;
  newPassword: string;
}

const RestPasswordForm = () => {
  const { user, setLoading, setLoggedIn, setUser, header } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [registerError, setregisterError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const currentPassword = data.password;
    const newPassword = data.newPassword;

    const updatePassword = {
      email: user?.email,
      currentPassword,
      newPassword,
    };

    if (user?.email) {
      axios
        .put(
          `${process.env.BASE_URL}user/change-password?email=${user?.email}`,
          updatePassword,
          header
        )
        .then((res) => {
          switch (res.data.message) {
            case "Password changed successfully":
              localStorage.removeItem("accessToken");
              setLoading(false);
              setLoggedIn(false);
              setUser(undefined);
              break;
            case "Current password is incorrect":
              setregisterError("Mật khẩu hiện tại không đúng");
              break;
            case "User not found":
              setregisterError("Không tìm thấy người dùng");
              break;
            case "Internal Server Error":
              setregisterError("Lỗi Server");
              break;
            default:
              // Handle any other response messages if needed.
              break;
          }
        })
        .catch((error) => {
          if (error.response.status === 403) {
            console.error("Không có quyền truy cập");
          } else {
            console.error("Không có quyền truy cập");
          }
        });
    }
  };

  return (
    <>
      <div className="bd-login__area">
        <div className="container small-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="Login-form-wrapper">
                <div className="bd-postbox__contact">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="bd-password-box d-flex justify-content-between">
                          <input
                            type={showPassword ? "Nội dung" : "Mật khẩu"}
                            placeholder="Mật khẩu hiện tại"
                            {...register("password", {
                              required: "Mật khẩu bắt buộc",
                              minLength: 6,
                            })}
                          />
                          <span className="input-icon">
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="password-toggle-btn"
                            >
                              <i
                                className={
                                  showPassword
                                    ? "fa-solid fa-eye"
                                    : "fa-regular fa-eye-slash"
                                }
                              ></i>
                            </button>
                          </span>
                          {errors.password && (
                            <span>{errors.password.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="bd-password-box d-flex justify-content-between">
                          <input
                            type={showPasswordTwo ? "Nội dung" : "Mật khẩu"}
                            placeholder=" Mật khẩu mới"
                            {...register("newPassword", {
                              required: "Mật khẩu mới là bắt buộc",
                              minLength: 6,
                            })}
                          />
                          <span className="input-icon">
                            <button
                              type="button"
                              onClick={() =>
                                setShowPasswordTwo(!showPasswordTwo)
                              }
                              className="password-toggle-btn"
                            >
                              <i
                                className={
                                  showPasswordTwo
                                    ? "fa-solid fa-eye"
                                    : "fa-regular fa-eye-slash"
                                }
                              ></i>
                            </button>
                          </span>
                          {errors.password && (
                            <span>{errors.password.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="bd-sigin__action-button mb-20">
                        <button className="bd-fill__btn w-100" type="submit">
                          Thay đổi mật khẩu
                        </button>
                      </div>
                    </div>
                  </form>
                  <span>{registerError && registerError}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestPasswordForm;
