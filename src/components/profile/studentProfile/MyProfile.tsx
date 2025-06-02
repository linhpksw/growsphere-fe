'use client';
import useGlobalContext from '@/hooks/use-context';
import React from 'react';

const MyProfile = () => {
    const { user } = useGlobalContext();
    return (
        <>
            <ul className="student-profile-info">
                <li>
                    <h5>Ngày Đăng Ký :</h5>
                    <span>{user?.date}</span>
                </li>
                <li>
                    <h5>Tên :</h5>
                    <span className="text-capitalize">{user?.name}</span>
                </li>

                <li>
                    <h5>Email :</h5>
                    <span> {user?.email} </span>
                </li>
                <li>
                    <h5>Điện Thoại :</h5>
                    <span> {user?.phone ? user?.phone : 'Chưa Có Liên Hệ'} </span>
                </li>
                <li>
                    <h5>Giới Tính :</h5>
                    <span>{user?.gender ? user?.gender : 'Chưa Có Giới Tính'}</span>
                </li>
                <li>
                    <h5>Tiểu sử :</h5>
                    <span>
                        Alison Johnson đang hoàn thành năm học đầu tiên tại Đại học DePaul, nơi cô
                        quan tâm đến lĩnh vực kinh doanh. Mặc dù vẫn chưa chọn chuyên ngành, cô đang
                        cân nhắc giữa tài chính hoặc marketing. Sau nhiều năm chứng kiến bố mẹ điều
                        hành một nhà hàng, Alison đã sớm nhận ra rằng mình cũng muốn theo đuổi con
                        đường kinh doanh ngay từ khi còn nhỏ.
                    </span>
                </li>
            </ul>
        </>
    );
};

export default MyProfile;
