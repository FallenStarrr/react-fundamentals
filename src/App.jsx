import React, {useState, useMemo} from 'react'
import PostItem from './components/PostItem';
import PostForm from './components/PostForm';
import MyModal from './components/UI/MyModal';


import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
import MySelect from './components/UI/select/MySelect';

function App() {


  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: "бб"},
    {id: 2, title: 'Javascript 2', body: "аа"},
    {id: 3, title: 'Javascript 3', body: "яя"}
   ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
  
   
   const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТ')
    if(filter.sort) {
      return  [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
   }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
         return  sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])


   const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
   }


   const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id ))
}
   

   

  return (
    <div className="App">
      <MyButton style={{ marginTop: '50px'}}onClick={() => setModal(true)}>Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
         <PostForm create={createPost}/>
      </MyModal>
    
       <hr  style={{ margin: "15px 0"}}/>
        <PostFilter 
        filter={filter} 
        setFilter={setFilter} 
        />

      
         <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов 1"}/>
  
  
    </div>
  );
}

export default App;