"use client"
import { idType } from '@/interFace/interFace';
import React,{useEffect} from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import axios from 'axios';
import BlogDetailsArea from './BlogDetailsArea';
import useGlobalContext from '@/hooks/use-context';
const BlogDetailsMain = ({id}:idType) => {
    const {setBlog} = useGlobalContext()
    useEffect(() => {
         if(id){
            axios
          .get(`${process.env.BASE_URL}blog/single-blog/${id}`)
          .then((res) => {
         
            setBlog(res.data.data);
          })
          .catch((e) => console.log(e));
         }
      }, [id,setBlog]);
    return (
        <>
            <Breadcrumb breadHome={'Trang chủ'} breadMenu={'Chi tiết thông tin bài viết'} />
            <BlogDetailsArea/>
        </>
    );
};

export default BlogDetailsMain;