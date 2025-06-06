"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import useGlobalContext from "@/hooks/use-context";
import Pagination from "../elements/product/Pagination";
import TeamPreloader from "@/preloaders/TeamPreloader";

const BlogGridSection = () => {
  const { blog, setBlog } = useGlobalContext();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [totalPages, setotalPages] = useState<number>(0);
  const [currentPage, setcurrentPage] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}blog/all-blog?page=${page}&limit=${limit}`)
      .then((res) => {
        setBlog(res.data.blogs);
        setotalPages(res.data.totalPages);
        setcurrentPage(res.data.currentPage);
      })
      .catch((e) => console.log(e));
  }, [page, limit, setBlog]);
  return (
    <section className="bd-news__grid-area pt-115 pb-65">
      <div className="container small-container">
        <div className="row">
          {blog.length ? (
            blog.map((item, num) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={num}>
                <div className="bd-news__item mb-60">
                  <div className="bd-news__thumb w-img">
                    <Link href={`/blog-details/${item._id}`}>
                      <Image
                        src={item.img}
                        alt="news-Img"
                        width={500}
                        height={400}
                        style={{ 
                          objectFit: "cover", 
                          width: "100%",      
                          height: "250px",    
                          borderRadius: "8px" 
                        }}
                      />
                    </Link>
                  </div>
                  <div className="bd-news__content">
                    <div className="bd-news__meta-list">
                      <div className="bd-news__meta-item">
                        <span>
                          <Link href="/blog">
                            <i className="fa-regular fa-user"></i>
                            {item.author}
                          </Link>
                        </span>
                      </div>
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-regular fa-clock"></i>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="bd-news__title">
                      <h3>
                        <Link href={`/blog-details/${item._id}`}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <Link
                      className="bd-news__btn"
                      href={`/blog-details/${item._id}`}
                    >
                      ĐỌC THÊM
                      <span>
                        <i className="fa-solid fa-arrow-left"></i>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <TeamPreloader />
            </>
          )}
        </div>

        {blog?.length ? (
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setPage={setPage}
                Pagination_space="d-flex justify-content-center mt-40  mb-45"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default BlogGridSection;
