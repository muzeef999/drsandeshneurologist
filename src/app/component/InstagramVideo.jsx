'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "../styles/text.css"
import '../styles/InstagramVideo.css'; // Import CSS file

const InstagramVideo = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    // Load Instagram embed script dynamically
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script); 

    // Wait for the Instagram embed script to load
    script.onload = () => {
        // Wait for a short delay to ensure the Instagram elements are fully loaded
        setTimeout(() => {
            // Find and resize the iframes to hide the header
            const iframes = document.querySelectorAll('iframe[src^="https://www.instagram.com"]');
            if (iframes.length > 0) {
                iframes.forEach(iframe => {
                    iframe.style.height = 'calc(100% - 50px)'; // Adjust the height to hide the header
                });
            }
        }, 1000); // Adjust the delay as needed
    };

    return () => {
        // Clean up the script when component unmounts
        document.body.removeChild(script);
    };
}, []);




  return (
    <div className="instagram_media container">
      <h1 className='service-head'>video</h1>
      <div className="instagram-embed-container">
        <Slider {...settings}>
          {/* Instagram embed code */}
          <blockquote 
            className="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/reel/C2USkm7JhX8/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          />
          <blockquote 
            className="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/reel/C2Up99HqzPW/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          />
          <blockquote 
            className="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/reel/C2HhxZ8OJs7/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          />
          <blockquote 
            className="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/reel/C2UP89AtbMz/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          />
        </Slider>
      </div>
    </div>
  );
};

export default InstagramVideo;
