import { blogDataType } from '@/interFace/api-interFace';
import Link from 'next/link';
import React from 'react';
import thumb from '../../../public/assets/img/news/news-02.png';
import Image from 'next/image';
import BlogComments from './BlogComments';
import BlogCommentForm from './BlogCommentForm';
import BlogSidebarSearch from './BlogSidebarSearch';
import BlogSidebarAbout from './BlogSidebarAbout';
import BlogSidebarBlogs from './BlogSidebarBlogs';
import BlogSidebarCategory from './BlogSidebarCategory';
import BlogSidebarTags from './BlogSidebarTags';
import useGlobalContext from '@/hooks/use-context';
const BlogDetailsArea = () => {
    const { blog } = useGlobalContext();
    const item: blogDataType = blog[0];
    return (
        <>
            <div className="blog-area pt-115 pb-100">
                <div className="container small-container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="blog-main-wrapper mb-30">
                                <div className="row">
                                    <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                                        <div className="blog-thumb ">
                                            <Image
                                                src={item?.img}
                                                width={500}
                                                height={500}
                                                style={{ width: '100%', height: 'auto' }}
                                                alt="blog-img"
                                            />
                                        </div>
                                        <div className="blog-content-wrapper">
                                            <div className="blog-meta">
                                                <div className="blog-date">
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    <span>{item?.date}</span>
                                                </div>
                                                <div className="blog-user">
                                                    <i className="fa-regular fa-user"></i>
                                                    <span>{item?.author}</span>
                                                </div>
                                                <div className="blog-comrent">
                                                    <i className="fal fa-comments"></i>
                                                    <span>
                                                        {item?.comment > 1
                                                            ? `${item?.comment} comments`
                                                            : `${item?.comment} comment`}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h3>{item?.title}</h3>
                                                <p> {item?.blogDetails} </p>
                                                <blockquote>
                                                    <p>
                                                        Dù bạn mới bắt đầu hay đã là ‘chuyên gia cây
                                                        cảnh’, cứ thoải mái tận hưởng niềm vui gieo
                                                        trồng, chăm sóc và ngắm nhìn thành quả. Đừng
                                                        để những chuyện nhỏ nhặt làm phiền, vì ở
                                                        đây, cây xanh là niềm vui, là thư giãn, là
                                                        đam mê!
                                                    </p>
                                                    <p className="mb-0">
                                                        <cite>GrowSphere</cite>
                                                    </p>
                                                </blockquote>
                                                <p>
                                                    Chỉ cần một bộ kit trồng cây nhỏ xinh, bạn đã có
                                                    thể bắt đầu hành trình trồng cây đầy thú vị rồi!
                                                    Đừng lo lắng hay bận tâm, vì với kit của chúng
                                                    tôi, việc chăm sóc cây không còn là chuyện khó
                                                    nhằn nữa. Từ lúc gieo hạt đến khi cây lớn tươi
                                                    tốt, bạn cứ thoải mái tận hưởng niềm vui và để
                                                    kit lo phần còn lại. Đảm bảo bạn sẽ ‘phê’ mê mẩn
                                                    đấy!
                                                </p>
                                                <div className="blog-thumb mb-25">
                                                    <Image
                                                        style={{ width: '100%', height: 'auto' }}
                                                        src={thumb}
                                                        alt="blog-img"
                                                    />
                                                </div>
                                                <h3>
                                                    Tham gia trồng cây xanh, tận hưởng niềm vui chăm
                                                    sóc và phát triển khu vườn của bạn mỗi ngày.
                                                </h3>
                                                <p>
                                                    Người tham gia sẽ có cái nhìn tổng quan về cách
                                                    quản lý và chăm sóc cây xanh trong hệ thống kinh
                                                    doanh kit trồng cây. Mỗi người đều phải nỗ lực,
                                                    nhưng đối với nhiều người, công việc không chỉ
                                                    đơn thuần là nguồn thu nhập, mà còn là cơ hội để
                                                    thể hiện bản thân và tạo ra điều gì đó tốt đẹp
                                                    hơn. Những người khởi nghiệp và đam mê làm vườn
                                                    thường cảm thấy như mình đang gánh vác cả khu
                                                    vườn xanh mướt trên vai, và vì vậy, luôn cần một
                                                    chút động lực thêm để tiếp tục phát triển.
                                                </p>
                                                <p>
                                                    Khi nói đến việc chăm sóc cây xanh tại nhà,
                                                    chúng tôi có vài mẹo giúp bạn tối ưu trải nghiệm
                                                    sử dụng kit trồng cây, đồng thời đảm bảo cây
                                                    phát triển khỏe mạnh nhất. Nhiều người mới bắt
                                                    đầu chưa thực sự hiểu cách chăm sóc đúng cách,
                                                    vì vậy việc cung cấp các hướng dẫn chi tiết sẽ
                                                    giúp bạn dễ dàng hơn trong việc tạo nên một khu
                                                    vườn xanh mướt ngay tại nhà.
                                                </p>
                                                <div className="blog__details__tag tagcloud">
                                                    <span>Chủ đề : </span>
                                                    <Link href="/blog">Vườn</Link>
                                                    <Link href="/blog">Cây Xanh</Link>
                                                    <Link href="/blog">Trồng Cây</Link>
                                                    <Link href="/blog">Chăm sóc vườn</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <BlogComments id={item?._id} />
                                <BlogCommentForm item={item && item} />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-8">
                            <div className="sidebar-widget-wrapper mb-30">
                                <BlogSidebarSearch />
                                <BlogSidebarAbout />
                                <BlogSidebarBlogs />
                                <BlogSidebarCategory />
                                <BlogSidebarTags />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsArea;
