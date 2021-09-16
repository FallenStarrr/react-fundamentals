import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComloading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });


  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)

  }, []);
  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading 
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
        
        }
      <h1>
        Комментарии 
      </h1>
      {isComloading 
      ? <Loader/>
      :
      <div>
        {comments.map(comm => 
         <div key={comm.id} style={{marginTop: '15px'}}>
           <h5>{comm.email}</h5>
           <div>{comm.body}</div>
         </div>)}
      </div>

      }
    </div>
  );
}

export default PostPage;
