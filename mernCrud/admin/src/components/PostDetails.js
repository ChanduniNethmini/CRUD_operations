import React, { Component } from 'react';
import axios from 'axios';

/**
* @author
* @class 
**/

class PostDetails extends Component {

  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`http://localhost:8000/admincat/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
 render() {
  const {name,parentId,type} = this.state.post;
  return(
        <div style={{marginTop:'20px'}}>
          <h1>{name}</h1>
          <div className="imageprofile">
          <img src="https://cdn.dribbble.com/users/180658/screenshots/5333299/02_.gif "alt="..." className="rounded-circle" style={{marginLeft:"20%"}}/>
          </div>
          <hr/>
          <dl className="row">
            <dt className="col-sm-3">Parent ID </dt>
            <dd className="col-sm-9">{parentId}</dd>
            <dt className="col-sm-3">Parent Type </dt>
            <dd className="col-sm-9">{type}</dd>
           
          </dl>
          
         
        </div>
      )
   }
 }



export default PostDetails