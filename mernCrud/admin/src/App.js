import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import HomeOrder from './components/HomeOrder';
import EditPostOrder from './components/EditPostOrder';
import PostDetailsOrder from './components/PostDetailsOrder';
import CreatePostOrder from './components/CreatePostOrder';

/**
* @author
* @class App
**/

class App extends Component {
 state = {}
 render() {
  return(
    <BrowserRouter>
   <div className="container">
     <NavBar/>
     <h1>Admin dashboard</h1>
    <a href="/order">Orders</a>
    <br/>
    <a href="/">Category</a>
      <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
        <Route path="/order/not" component={CreatePostOrder}></Route>
        <Route path="/order" exact component={HomeOrder}></Route>
        <Route path="/order/edit/:id" exact component={EditPostOrder}></Route>
        <Route path="/order/post/:id" exact component={PostDetailsOrder}></Route>
         
   </div>
   </BrowserRouter>
    )
   }
 }


App.propTypes = {}
export default App