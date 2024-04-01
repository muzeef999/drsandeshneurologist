import { useEffect, useState } from 'react'; 
import { useSession } from 'next-auth/react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "@/app/styles/text.css";
import { toast } from 'react-toastify';

const UpdateBlog = ({ postId }) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [post, setPost] = useState({
    file: "",
    newContent: "",
    username: ""
  });

  useEffect(() => {
    if (status === "authenticated") {
      setPost(prevState => ({ ...prevState, username: session.user.email }));
    }
  }, [status, session]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        if (response.status === 200) {
          const postData = response.data; // Assuming response.data is already JSON
          setPost({
            ...post,
            newContent: postData.content,
            file: postData.img
          });
        
        } else {
          console.error('Failed to fetch post details');
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchPostDetails();
  }, [postId]);


  const getFile = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // Clear the image URL in post state when a new file is selected
      setPost(prevState => ({ ...prevState, file: URL.createObjectURL(uploadedFile) }));
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      


      const response = await axios.put(`/api/posts/${postId}`, post);

      window.location.href = "/profile";

      if (response.status === 200) {
        toast.success('Post updated successfully');
        console.log(response);
      } else {
        toast.error('Failed to update post');
      }
    } catch (error) {
      toast.error('Error updating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type='file' className='fileUpload' accept='image/*' onChange={getFile} required></input>
      <br/>
      <br/>
      {post.file && <img className='imageupload' src={post.file} alt="Selected Image" />}
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
