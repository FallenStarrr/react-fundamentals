import React, { useState, useMemo, useEffect } from "react";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from './hooks/usePosts'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/Loader/Loader";

import "./styles/App.css";
import PostService from "./API/PostService";


function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)
  useEffect(() => {
     fetchPosts()
  }, [])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  

 async  function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostsLoading(false)
  }


  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: "50px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {isPostsLoading 
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      : <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов 1"}
      /> 
      }
    </div>
  )
}

export default App
