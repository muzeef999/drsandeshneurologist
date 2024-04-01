"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter for routing
import "react-toastify/dist/ReactToastify.css";
import "@/app/styles/text.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const PostCreate = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter(); // Initialize useRouter
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [post, setPost] = useState({
    content: "",
    img: " ",
    username: session?.user?.email // Access user email safely
  });

  const getFile = (event) => {
    const uploadedFile = event.target.files[0];
  
    // Check if a file was uploaded
    if (uploadedFile) {
      // Check file size (3 MB limit)
      if (uploadedFile.size > 1 * 1024 * 1024) { // 1 MB in bytes
        alert("File size exceeds the limit of 3 MB.");
        return; // Exit function if file size exceeds limit
      }
  
      // Check file format (only accept WebP format)
      if (!uploadedFile.type.includes("webp")) {
        alert("Only WebP format is allowed.");
        return; // Exit function if file format is not WebP
      }
  
      // File size and format are valid, proceed with reading the file
      var reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onload = () => {
        setFile(reader.result);
        setPost(prevPost => ({
          ...prevPost,
          img: reader.result // Set the img property of post state
        }));
      };
      reader.onerror = error => {
        console.log("Error:", error);
      };
    }
  }
  
  const postSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      const response = await axios.post("/api/posts", post, {
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        }
      });

      toast.success('🦄 block created');
      router.push("/blogs");
      
    } catch (error) {
      console.error("Post failed", error);
      toast.error("An error occurred while posting");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <div>
      <div>
        <br/>
        <input type='file' className='fileUpload' accept='image/*' onChange={getFile} required></input>
        <br/>
        <br/>
        <img src={file} className='imageupload'  />
        <br/>
        <br/>
        <ReactQuill theme='snow' className='blogcontent' value={post.content} onChange={(content) => setPost({ ...post, content })}/>

        <br/>
        {loading && <span value={progress}>{progress}%</span>}
        <button onClick={postSubmit} className='form-button'>{loading ? `Processing : ${progress}%` : "submit"}</button>
      </div>
    </div>
  );
}

export default PostCreate;
