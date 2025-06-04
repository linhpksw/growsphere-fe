import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogGridSection from './BlogGridSection';

const BlogGridMain = () => {
    return (
        <>
           <Breadcrumb breadHome={'Trang chủ'} breadMenu={'Bài Viết'} /> 
           <BlogGridSection/>
        </>
    );
};

export default BlogGridMain;