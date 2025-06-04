import Link from 'next/link';
import React from 'react';

const BlogSidebarCategory = () => {
    return (
        <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
                <h4 className="sidebar__widget-title">Thể loại</h4>
            </div>
            <div className="sidebar__widget-content">
                <div className="sidebar__category">
                    <ul>
                        <li><Link href="/blog">Cây xanh</Link></li>
                        <li><Link href="/blog">Trồng trọt</Link></li>
                        <li><Link href="/blog">Cách chăm sóc cây</Link></li>
                        <li><Link href="/blog">Sức khoẻ & cách sống xanh</Link></li>
                        <li><Link href="/blog">Không gian xanh</Link></li>
                        <li><Link href="/blog">Nảy mầm</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebarCategory;