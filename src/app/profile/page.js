"use client";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation"; // Correct import
import React, { useEffect, useState } from "react";
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
import { FaMeta } from "react-icons/fa6";

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

  const [showseo, setShowseo] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const handleCloseseo = () => setShowseo(false);

  const handleShowseo = (title) => {
    setModalTitle(title);
    setShowseo(true);
  };

  const fetcher = (url) => axios.get(url).then((res) => res);

  const {
    data: post,
    isLoading,
    error,
  } = useSWR(showseo ? `/api/home/${modalTitle}` : null, fetcher); // Only execute API request when showseo is true

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

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { title, description, keywords } = Object.fromEntries(
      formData.entries()
    );
    await fetch(`/api/home/${modalTitle}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, keywords }),
      headers: { "Content-Type": "application/json" },
    });
    mutate();
    window.location.reload(); // Add this line to reload the window
  };

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div>
          <button
            onClick={() => handleShowseo("home")}
            className={style.blogbuttonseo}
          >
            <FaMeta />
            &nbsp;Home seo
          </button>
          <button
            onClick={() => handleShowseo("service")}
            className={style.blogbuttonseo}
          >
            <FaMeta />
            &nbsp;service seo
          </button>
          <button
            onClick={() => handleShowseo("blogs")}
            className={style.blogbuttonseo}
          >
            <FaMeta />
            &nbsp;blogs seo
          </button>
          <button
            onClick={() => handleShowseo("contact")}
            className={style.blogbuttonseo}
          >
            <FaMeta />
            &nbsp;contact seo
          </button>
        </div>
        <div className={style.blogheading}>
          <div className="service_head"></div>
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

      <Modal show={showseo} onHide={handleCloseseo} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaMeta /> &nbsp;{modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <form onSubmit={handleUpdate}>
              <label>Title</label>
              <textarea
                type="text"
                name="title"
                defaultValue={post && post.data.title}
              />
              <label>Description</label>
              <textarea
                name="description"
                defaultValue={post && post.data.description}
              ></textarea>
              <label>keywords</label>
              <textarea
                type="text"
                name="keywords"
                defaultValue={post && post.data.keywords}
              />
              <br />
              <button type="submit" className="form-button">
                Update Meta Tag
              </button>
            </form>
          )}
          <br />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Page;
