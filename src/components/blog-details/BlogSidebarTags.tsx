import Link from 'next/link';
import React from 'react';

const BlogSidebarTags = () => {
    return (
        <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
                <h4 className="sidebar__widget-title">Chủ đề</h4>
            </div>
            <div className="sidebar__widget-content">
                <div className="sidebar__tag">
                    <Link href="/blog">Vườn</Link>
                    <Link href="/blog">Làm vườn</Link>
                    <Link href="/blog">Trồng cây</Link>
                    <Link href="/blog">Cắt tỉa cỏ</Link>
                    <Link href="/blog">Chăm sóc vườn</Link>
                    <Link href="/blog">Cây Xanh</Link>
                    <Link href="/blog">Trồng cây lớn / Trồng cây xanh</Link>
                    <Link href="/blog">Mẹo vặt</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebarTags;