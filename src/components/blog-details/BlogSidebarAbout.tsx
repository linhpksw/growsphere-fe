import React from 'react';
import thumb from '../../../public/assets/img/news/comment/comment-2.png';
import Image from 'next/image';
const BlogSidebarAbout = () => {
    return (
        <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
                <h4 className="sidebar__widget-title">Về Tôi</h4>
            </div>
            <div className="bd-sidebar__author-box text-center">
                <div className="bd-sidebar__author-img">
                    <Image
                        width={100}
                        height={100}
                        style={{ width: 'auto', height: 'auto' }}
                        src={thumb}
                        alt="img"
                    />
                </div>
                <div className="bd-sidebar__blog-text">
                    <h4>Alonso D. Dowson</h4>
                    <p>
                        Trồng cây xanh là niềm vui và nghệ thuật. Bộ kit trồng cây của chúng tôi
                        giúp bạn dễ dàng bắt đầu hành trình xanh hóa không gian sống, từ việc chọn
                        giống, chăm sóc đến thu hoạch.
                    </p>
                </div>
                <div className="bd-sidebar__social">
                    <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-behance"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebarAbout;
