"use client";
import React, { useState } from "react";
import Blogs from "../component/Blogs";
import Qulification from "../component/Qulification";
import Service from "../component/Service";
import Contact from "../contactus/page";
import "../styles/text.css";
import axios from "axios";
import { MdAdd } from "react-icons/md";
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

const metadata = {
  title: "Dr. Sandesh Nanisetty | Best Neurologist in Kondapur",

  keywords:
    "Best Neuro Doctor in Hyderabad,Best Neurology Surgeon in Kondapur,Brain Specialist Hospital in Hyderabad,Brain Specialist in kondapur,Neurologist in kondapur Hyderabad,Best Neurologist in kondapur,Brain Stroke Specialist in Kondapur,Top Neurologist in Kondapur,top Neurologist in Gandipet ,Stroke Specialist Doctor in Gandipet,Best Neurology Hospitals in Kokapet,Best Neurologists In Kokapet",

  description:
    "Dr. Sandesh Nanisetty Best Neurologist in Kondapur, Hyderabad. Book an appointment with best Neurologist in Kondapur, the best hospitals in Hyderabad",
};

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

  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
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
      <Contact />

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
