import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import WishlistSection from './WishlistSection';

const WistListMain = () => {
    return (
        <><Breadcrumb breadHome="Trang chủ" breadMenu="Danh sách yêu thích"/>
            <WishlistSection/>
        </>
    );
};

export default WistListMain;