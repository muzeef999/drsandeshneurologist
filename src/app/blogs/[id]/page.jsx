"use client"
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

const Page = ({ params }) => {

    const blogId = params.id;
    const [blog, setBlogDetails] = useState(null);
    
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/posts/${blogId}`
        );
        const data = await response.json();
        setBlogDetails(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [blogId]);

  if (!blog) {
    return <div>Loading.....................</div>; // Render a loading indicator while product is null
  }
  return (
    <div className='container'>
      <Row>
        <Col md={8}>
        <img src={blog.img} alt="blog image"  width={"100%"}/>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />

        </Col>
        <Col md={4}></Col>
      </Row>
     
    </div>
  )
}

export default Page
