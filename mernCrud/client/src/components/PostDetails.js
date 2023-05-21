import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  //retriew data of specific form
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {name,postalNo,street,town,contactNo,orderDate,status} = this.state.post;
      return(
        <div style={{marginTop:'20px'}}>
          <h1>{name}</h1>
          <hr/>
          <dl className="row">
            <dt className="col-sm-3">Postal No</dt>
            <dd className="col-sm-9">{postalNo}</dd>
            <dt className="col-sm-3">Street</dt>
            <dd className="col-sm-9">{street}</dd>
            <dt className="col-sm-3">Town</dt>
            <dd className="col-sm-9">{town}</dd>
            <dt className="col-sm-3">Contact No</dt>
            <dd className="col-sm-9">{contactNo}</dd>
            <dt className="col-sm-3">Order Date</dt>
            <dd className="col-sm-9">{orderDate}</dd>
            <dt className="col-sm-3">Status</dt>
            <dd className="col-sm-9">{status}</dd>
          </dl>
         
        </div>
        
      )
    }
  }
  export default PostDetails;