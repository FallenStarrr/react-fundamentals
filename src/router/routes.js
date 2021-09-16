import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";


export const routes = [
  {path : '/about', component: About, exact: true},
  {path : '/posts', component: Posts, exact: true},
  {path : '/posts/:id', component: PostPage, exact: true}
]