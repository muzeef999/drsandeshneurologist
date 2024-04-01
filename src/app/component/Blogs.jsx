// Add this line at the top of your file
'use client';

import React from "react";
import axios from "axios";
import Slider from "react-slick";
import useSWR from "swr";
import Loading from "./Loading";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Blogs = () => {
  const { data: posts, error } = useSWR("/api/posts", fetcher);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  function truncateContent(content) {
    // Remove <br> tags from content
    const contentWithoutBr = content.replace(/<br\s*\/?>/gi, '');
    // Split content into sentences
    const sentences = contentWithoutBr.split(/(?<=[.?!])\s+/);
    // Return the first four sentences joined together
    return sentences.slice(0, 4).join('.....');
  }

  if (error) return <div>Error loading posts!</div>;
  if (!posts) return <div>Loading.....</div>;

  return (
    <div className="container">
      <br />
      <br />
      <div className="service-head">Recent Blogs</div>
      <br />
      {posts && posts.length > 0 ? (
        <Slider {...settings}>
          {posts.map((item) => (
            <div className="cardBlog" key={item._id}>
              <img
                className="imgblog"
                src={item.img}
                alt="doctor"
                width={100}
                height={100}
              />
              <div style={{ fontSize: "15px" }}>
                {item.content && (
                  <>
                    <div 
                      dangerouslySetInnerHTML={{ __html: truncateContent(item.content) }}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div>No posts found.</div>
      )}
    </div>
  );
};

export default Blogs;