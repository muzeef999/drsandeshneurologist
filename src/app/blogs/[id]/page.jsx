"use client"
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios'; // Import Axios
import useSWR from 'swr';



  // Function to fetch data
  const fetchBlog = async (url) => {
    try {
      const response = await axios.get(url); // Use Axios for fetching
      return response.data; // Return response data
    }catch (error) {
      console.error("Error fetching data:", error);
    throw error;
    }
  };


const Page = ({ params }) => {
  // Extract postId from params
  const { id: postId } = params;


  // Fetch data using useSWR
  const { data: blog, error } = useSWR(
    postId ? `http://localhost:3000/api/posts/${postId}` : null,
    fetchBlog,
    {
      revalidateOnFocus: false // Disable revalidation on focus for now
    }
  );

  if (error) {
    return <div>Error fetching data...</div>;
  }

  if (!blog) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }

  return (
    <div className='container'>
      <Row>
        <Col md={8}>
          <img src={blog.img} alt="blog image" width={"100%"} />
          <br />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default Page;
