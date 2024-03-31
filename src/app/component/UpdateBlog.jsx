"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "@/app/styles/text.css"

const UpdateBlog = ({ postId }) => {
  // Get the user session from next-auth/react
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();

  // Initialize the post state with the session user's email
  const [post, setPost] = React.useState({
    file: "",
    newContent: " ",
    username: session.user.email
  });

  // Handle file selection
  const getFile = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  // Handle updating the post with new content and file
  const handleUpdate = async () => {
    setLoading(true);

    try {
      // Send a PUT request to update the post with the new content and file
      const response = await axios.put(`http://localhost:3000/api/posts/${postId}`, post);

      if (response.status === 200) {
        console.log('Post updated successfully');
        console.log(response)
      } else {
        console.error('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setLoading(false);
    }
  };

  // Render the component
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