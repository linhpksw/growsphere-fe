import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CartSection from './CartSection';

const CartMain = () => {
    return (
        <>
            <Breadcrumb breadHome='Trang chủ' breadMenu='Sản phẩm trong giỏ hàng'/>
            <CartSection/>
        </>
    );
};

export default CartMain;