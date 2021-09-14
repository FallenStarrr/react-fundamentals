import React, { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from './hooks/usePosts'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css";


function App() {
  const [posts, setPosts] = useState();

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  
 async  function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
  }
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "50px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов 1"}
      />
    </div>
  );
}

export default App;
