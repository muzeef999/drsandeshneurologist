"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "@/app/styles/text.css"

const UpdateBlog = ({ postId }) => {

  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();

  const [post, setPost] = React.useState({
    file: "",
    newContent: " ",
    username: session.user.email
  });

  const getFile = (event) => {
    const uploadedFile = event.target.files[0];

    // Check if a file was uploaded
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };


  
  const handleUpdate = async () => {
    setLoading(true);

    try {    
      const response = await axios.put(`http://localhost:3000/api/posts/${postId}`, post);

      if (response.status === 200) {
        console.log('Post updated successfully');
        console.log(response)
        // Handle success, e.g., show a success message or redirect to another page
      } else {
        console.error('Failed to update post');
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error updating post:', error);
      // Handle error, e.g., show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{postId}</h2>
      <input type='file' className='fileUpload' accept='image/*' onChange={getFile} required></input>
      <br/>
      <br/>
      <img className='imageupload' src={file ? URL.createObjectURL(file) : ''}  alt="Selected Image" />
      <br/>
      <br/>
      <ReactQuill theme='snow' className='blogcontent' value={post.newContent} onChange={(newContent) => setPost({ ...post, newContent })} />

      <br/>
      <button className='form-button' onClick={handleUpdate} disabled={loading}>
        {loading ? 'Updating...' : 'Update Post'}
      </button>
    </div>
  );
};

export default UpdateBlog;
