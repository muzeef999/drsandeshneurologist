import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "../styles/text.css"
import '../styles/InstagramVideo.css'; // Import CSS file

const InstagramVideo = () => {

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
    // Load Instagram embed script dynamically
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script); 
  
    // Remove the header from the Instagram iframe
    const removeHeaderFromInstagramIframe = () => {
      const iframes = document.querySelectorAll('iframe[src^="https://www.instagram.com"]');
      if (iframes.length > 0) {
        iframes.forEach(iframe => {
          // Check if the iframe has a parent node
          if (iframe.parentNode) {
            const parent = iframe.parentNode;
            // Check if the parent has a class "Embed"
            if (parent.classList.contains('Embed')) {
              // Find the header element within the iframe and hide it
              const headerElement = iframe.contentWindow.document.querySelector('.Header');
              if (headerElement) {
                headerElement.style.display = 'none';
              }
            }
          }
        });
      }
    };
  
    // Call the function to remove the header from the Instagram iframe
    removeHeaderFromInstagramIframe();
  
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
            data-instgrm-permalink="https://www.instagram.com/reel/C2USkm7JhX8/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          />
          <blockquote 
            className="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/reel/C2USkm7JhX8/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          />
        </Slider>
      </div>
    </div>
  );
};

export default InstagramVideo;
