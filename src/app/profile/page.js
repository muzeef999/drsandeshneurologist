"use client";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "@/app/profile/post.module.css";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useSession } from "next-auth/react";
import Form from "react-bootstrap/Form";
import "../styles/text.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PostCreate from "../component/(post)/PostCreate";
import UpdateBlog from "../component/UpdateBlog";
import useSWR from "swr";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [postId, setPostId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (postId) => {
    setPostId(postId);
    setShow(true);
  };

  const handleCloseBlog = () => setShowBlog(false);
  const handleShowBlog = () => setShowBlog(true);

  const { data: posts, error } = useSWR(
    "http://localhost:3000/api/posts",
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  );

  const deletedata = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/posts?id=${id}`
      );
      if (response.status === 200) {
        toast.success("Post deleted successfully");
        // Add any additional logic here after successful deletion
        window.location.reload();
      } else {
        toast.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("An error occurred while deleting post");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className={style.blogheading}>
          <div className="service_head">Profile</div>
          <div>
            <button className={style.blogbutton} onClick={handleShowBlog}>
              <MdAdd /> &nbsp; Add New Blog{" "}
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div id="gridc">
          {posts &&
            posts.map((post) => (
              <div key={post._id}>
                <div className="cardBlog" key={post._id}>
                  <img
                    className="imgblog"
                    src={post.img}
                    alt="doctor"
                    width={100}
                    height={100}
                  />
                  <div className={style.content}>
                    <div style={{ textAlign: "justify", fontSize: "15px" }}>
                      {post.content && (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post.content,
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="editoption d-flex">
                      <div onClick={() => handleShow(post._id)}>
                        <CiEdit style={{ color: "#00b300" }} />
                      </div>
                      <div
                        className="d-flex"
                        onClick={() => deletedata(post._id)}
                      >
                        <MdDelete style={{ color: "#F00E0E" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <Modal size="lg" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Update Blog Content</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <UpdateBlog postId={postId} />
                  </Modal.Body>
                </Modal>
              </div>
            ))}
        </div>
      </div>
      <Modal size="lg" show={showBlog} onHide={handleCloseBlog}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostCreate />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page;
