import Link from 'next/link';
import React from 'react';

const HeaderMiddleThree = () => {
    return (
        <div className="bd-topbar-area__middle d-none d-lg-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-md-8 mt-2">
                        <div className="bd-topbar__contact">
                            <ul>
                                <li><Link href="tel:+(02)587-898-250"><i className="fa-regular fa-phone-flip"></i> 0964 721 763</Link></li>
                                <li><Link href=""><i className="fa-solid fa-location-dot"></i>Hà Nội, Hoà Lạc</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddleThree;