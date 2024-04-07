"use client";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation"; // Correct import
import React, { useState } from "react";
import style from "@/app/profile/post.module.css";
import { MdAdd } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import "../styles/text.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import dynamic from "next/dynamic";
import Image from "next/image";

const PostCreate = dynamic(() => import("../component/(post)/PostCreate"), {
  ssr: false,
});
const UpdateBlog = dynamic(() => import("@/app/component/UpdateBlog"), {
  ssr: false,
});

import useSWR from "swr";

const Page = () => {
  const router = useRouter();
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

  // Import useSWR dynamically to use it only on the client-side
  const { data: updatedPosts, mutate } = useSWR("/api/posts", async () => {
    const res = await axios.get("/api/posts");
    return res.data;
  });

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`/api/posts?id=${id}`);
      if (response.status === 200) {
        toast.success("Post deleted successfully");
        mutate();
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
          {updatedPosts &&
            updatedPosts.map((post) => (
              <div key={post._id}>
                <div className="cardBlog" key={post._id}>
                  <Image
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
                        onClick={() => deleteData(post._id)}
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
