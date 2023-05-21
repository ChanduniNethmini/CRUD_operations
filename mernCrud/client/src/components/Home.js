import React, { Component } from 'react';
import axios from 'axios';


 class Home extends Component{
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}
componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}

onDelete=(id)=>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("delete successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.name.toLowerCase().includes(searchKey)||
  post.town.toLowerCase().includes(searchKey)
 
  
  )
  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("posts").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}
render(){
    return (
      
      <div className="container">
        <h> Order Form </h>
        <div className="col-lg-3 mt-2 mb-2">
          <input
          className="form-control"
          type="search"
          placeholder="search"
          name="searchQuery"
          onChange={this.handleSearchArea}>

          </input>

        </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">PostalNo</th>
            <th scope="col">Street</th>
            <th scope="col">Town</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.name}
                  </a>
                  </td>
                <td>{posts.postalNo}</td>
                <td>{posts.street}</td>
                <td>{posts.town}</td>
                <td>{posts.contactNo}</td>
                <td>{posts.orderDate}</td>
                <td>{posts.status}</td>

                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="fas fa-edit"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            )) }
        </tbody>
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create new post</a></button>
      </table>

     
      </div>
    )
  }
}
export default Home;
