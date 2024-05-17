"use client";

import React, { useState } from "react";
import Blogs from "../component/Blogs";
import Qulification from "../component/Qulification";
import Service from "../component/Service";
import Contact from "../contactus/page";
import "../styles/text.css";
import axios from "axios";
import style from "@/app/profile/post.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";
import dynamic from "next/dynamic";
import Timeline from "../component/Timeline";
import Image from "next/image";

const PostCreate = dynamic(() => import("../component/(post)/PostCreate"), {
  ssr: false,
});

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch posts using SWR
  const { data: posts, error } = useSWR("/api/posts", async (url) => {
    const response = await axios.get(url);
    return response.data;
  });

  const createtologin = () => {
    router.push("/profile");
  };

  const {
    data: meta,
    error: metaError,
    isValidating,
  } = useSWR("/api/home/blogs", async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  });

  console.log(meta && meta.title);

  if (metaError) return <div>Error: {metaError.message}</div>;
  if (!meta || isValidating) return <div>Loading...</div>; // Render loading message if data is not available or if SWR is validating

  return (
    <>
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link
          rel="canonical"
          href="https://www.drsandeshneurologist.com/contactus"
        />
      </head>

      <div className="container">
        <br />
        <div className={style.blogheading}>
          <div className="service_head">Blogs</div>
        </div>
        <div id="gridc">
          {posts &&
            posts.map((item) => (
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
                  />
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
        <br />
      </div>
      <Blogs />
      <br />
      <Timeline />
      <br />
      <Qulification />
      <br />
      <Service />
      <br />
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostCreate />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Page;
