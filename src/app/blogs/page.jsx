"use client"
import React, { useEffect, useState } from 'react'
import Blogs from '../component/Blogs'
import Experience from '../component/Experience'
import Qulification from '../component/Qulification'
import Service from '../component/Service'
import Contact from '../contactus/page'
import "../styles/text.css"
import axios from 'axios'
import { MdAdd } from "react-icons/md";
import style from "@/app/profile/post.module.css";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Modal } from 'react-bootstrap'
import PostCreate from '../component/(post)/PostCreate'
import Link from 'next/link'


const Page = () => {
  const [state, setState] = useState(initialState);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);


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

  const createtologin = () => {
    router.push("/profile");
  }



  return (
    <div>
     
      <div className='container'>

      <br/>
      <div className={style.blogheading}>
       <div className='service_head'>Blogs</div>  
      
                </div>
       <div id="gridc">
       {posts.map((item) => (
          <div className="cardBlog" key={item._id}>
         <Link href={`/blogs/${item._id}`} style={{textDecoration:'none'}}>
          <img
            className="imgblog"
            src={item.img}
            alt="doctor"
            width={100}
            height={100}
          />{" "}


          </Link>

          
      
          <div style={{ textAlign: 'justify', fontSize:'15px'}}>
  {/* Render the first heading separately */}
  {item.content && (
    <>
      <>
           {/* Display only the first four sentences of the content */}
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
    </>
    </>
  )}
</div>
        </div>

        ))}
        </div>
       <br/>
        

      </div>


     <Blogs />
     <br/>
     
     <br/>
      <Experience />
      <br/>
      <Qulification />
      <br/>
      <Service />

      <br/>
      <Contact />


      
      <Modal       
        size="lg"
       show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PostCreate/>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Page
