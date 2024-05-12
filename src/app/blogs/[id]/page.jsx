"use client"
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios'; // Import Axios
import useSWR from 'swr';
import Image from "next/image"
import Link from "next/link"



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



    // Fetch posts using SWR post
    const { data: postsr, error1 } = useSWR("/api/posts", async (url) => {
      const response = await axios.get(url);
      return response.data;
    });

  // Fetch data using useSWR pistid
  const { data: blog, error } = useSWR(
    postId ? `/api/posts/${postId}` : null,
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

        <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%' }}>
      <Image
        src={blog.img}
        alt="Description of your image"
        layout="fill"
        objectFit="cover" // Adjust this property as per your requirement
      />
    </div>
          <br />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Col>
        <Col md={4}>
          <div>
          <h2>Recent Blogs</h2>
          <div>
          {postsr &&
            postsr.map((item) => (
              <div className="cardBlog" key={item._id}>
                <Link
                  href={`/blogs/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    className="imgblog"
                    src={item.img}
                    alt="doctor"
                    width={100}
                    height={100}
                  />{" "}
                </Link>
                <div style={{ textAlign: "justify", fontSize: "15px" }}>
                  {/* Render the first heading separately */}
                  {item.content && (
                    <>
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
