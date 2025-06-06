"use client";

import GetRatting from "@/hooks/GetRatting";
import ShopSidebarPreloader from "@/preloaders/ShopSidebarPreloader";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface ProductReview {
  retting: number;
  totalRatting: number;
}

const ShopSidebarRetting = () => {
  const [rattings, setRattings] = useState<ProductReview[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}product/rattings`)
      .then((res) => {
        setRattings(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="bd-filter__widget child-content-hidden">
        <h4 className="bd-filter__widget-title drop-btn">Đánh Giá</h4>
        <div className="bd-filter__content">
          {rattings?.length ?
            rattings.map((item, index) => (
              <div key={index} className="bd-singel__rating">
                <input
                  className="radio-box"
                  type="radio"
                  id={index.toString()}
                  name="rating"
                />
                <label className="radio-star" htmlFor={index.toString()}>
                  <div className="bd-product__icon custome-cursor">
                    <GetRatting averageRating={item.retting} />
                    <span className="radio-item">({item.totalRatting})</span>
                  </div>
                </label>
              </div>
            )):
            <>
            <ShopSidebarPreloader end={5}/>
            </>}
        </div>
      </div>
    </>
  );
};

export default ShopSidebarRetting;
