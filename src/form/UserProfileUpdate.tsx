"use client";
import useGlobalContext from "@/hooks/use-context";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import NiceSelectTwo from "@/utils/NiceSelectTwo";
import { GenderData } from "@/data/nice-select-data";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
}

const UserProfileUpdate = () => {
  const { user, header, setUpdate } = useGlobalContext();
  const [Gender, setGender] = useState<string>("");
  const router = useRouter();
  const parts = user?.name.split(" ");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // update profile info

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setUpdate(false)
    const name = `${data.firstName} ${data.lastName}`;
    const phone = data.phone;
    const gender = Gender;
    const userUpdateInfo = {
      id: user?._id,
      name,
      phone,
      gender,
      photo: user?.photo,
    };
    axios
      .put(
        `${process.env.BASE_URL}user/update-user?email=${user?.email}`,
        userUpdateInfo,
        header
      )
      .then((res) => {
        if (res.data.message === "Thành Công") {
          setUpdate(true)
          router.push("/profile");
          toast.success(`Hồ sơ đã được cập nhật`);
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          console.error("Không có quyền truy cập");
        } else {
          console.error("Không có quyền truy cập");
        }
      });
  };

  const selectHandler = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-from-input mb-20">
              <label htmlFor="FirstName">Họ</label>
              <input
                id="FirstName"
                type="text"
                placeholder="Tên"
                {...register("firstName")}
                defaultValue={parts?.length ? parts[0] : ""}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-from-input mb-20">
              <label htmlFor="LastName">Tên</label>
              <input
                id="LastName"
                type="text"
                placeholder="Tên"
                {...register("lastName")}
                defaultValue={parts?.length ? parts[1] : ""}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="contact-from-input mb-20">
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                type="email"
                placeholder="Email"
                readOnly
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-from-input mb-20">
              <label htmlFor="Phone">Điện thoại </label>
              <input
                id="Phone"
                type="text"
                placeholder="Điện thoại"
                {...register("phone")}
                defaultValue={user?.phone}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-from-input mb-20">
              <label htmlFor="Occupation"> Giới tính </label>
    
              <NiceSelectTwo
                options={GenderData}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                setapiEndPoint={setGender}
                className="Lựa chọn giới tính"
              />
            </div>
          </div>

          <div className="col-sm-12">
            <div className="cont-btn mb-20  mt-10">
              <button type="submit" className="bd-bn__btn-1">
                Cập Nhật Hồ Sơ
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserProfileUpdate;
