"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

const Blogs = () => {

  const [posts, setPosts] = useState([]);
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

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchBlog();
  }, []);


  function truncateContent(content) {
    // Remove <br> tags from content
    const contentWithoutBr = content.replace(/<br\s*\/?>/gi, '');
    // Split content into sentences
    const sentences = contentWithoutBr.split(/(?<=[.?!])\s+/);
    // Return the first four sentences joined together
    return sentences.slice(0, 4).join('.....');
}

  return (
    <div className="container">
      <br />
      <br />
      <div className="service-head">Recent Blogs</div>
      <br />
      <Slider {...settings}> 
  {posts.map((item) => {
  
    return (
      <div className="cardBlog" key={item.id}>
        <img
          className="imgblog"
          src={item.img}
          alt="doctor"
          width={100}
          height={100}
        />{" "}
      
      <div style={{ fontSize:'15px',   }}>
  {/* Render the first heading separately */}
  {item.content && (
    <>
      <>
           {/* Display only the first four sentences of the content */}
      <div dangerouslySetInnerHTML={{ __html: truncateContent(item.content) }} />
    </>
    </>
  )}
</div>
      </div>
    );
  })}
</Slider>

    </div>
  );
};

export default Blogs;
