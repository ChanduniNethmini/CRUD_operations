import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import chair from "../img/chair.jpg"
import sofa from "../img/sofa.jpg"

export default class CreatePost extends Component {

  //intialization

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      postalNo: "",
      street: "",
      town: "",
      contactNo: "",
      orderDate: "",
      status: "Pending"
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })

  }
//save to db
  onSubmit = (e) => {

    e.preventDefault();

    const { name, postalNo, street, town, contactNo, orderDate, status } = this.state;

    const data = {
      name: name,
      postalNo: postalNo,
      street: street,
      town: town,
      contactNo: contactNo,
      orderDate: orderDate,
      status: status

    }

    console.log(data)

    //validation

    const re = /^[0-9\b]+$/;
    if(name.length < 2){
      swal("User name invaide", "length should be greater than 2", "error");
    } 
    else if( (!re.test(String(contactNo))) || (contactNo.length != 10)){
      swal("Contact Number invaide", "contact number should be valide pattern", "error");
    }else if(town.length<2){
      swal(" Please enter valid town", "length should be greater than 2", "error");
    }
     else{
      axios.post("/post/save", data).then((res) => {
        if (res.data.success) {
          this.setState(
            {
              name: "",
              postalNo: "",
              street: "",
              town: "",
              contactNo: "",
              orderDate: "",
              status: ""
            }
          )
          swal("Order Added Successfully!", "Your oder will be accepted", "success");
        }
      })
    } 


  }

  render() {
    return (
      <div>
        <br />
        <br/>
        
        <div className="container">
        <div class="row">
    <div class="col-6">
      
      <img src={chair} width="90%" height="84%" />
    </div>
    <div class="col-6">
    <div className="card" style={{width: "85%"}}>
          <div className="card-body">
            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="text-center topic">Order Detail Form </h1>

              <form className="needs-validation" align="center" style={{ width: "100%" }} >
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} className="topic">Customer Name: </label>
                  <input type="text"
                    id="validationTooltip01"
                    className="form-control"
                    name="name"
                    placeholder="Enter Your Name"
                    value={this.state.name}
                    onChange={this.handleInputChange} required />
                  

                </div>


                <label style={{ marginBottom: '5px' }} className="topic">Address: </label>
                <div class="row">
                  <div class="col">
                    <input type="number"
                      className="form-control"
                      name="postalNo"
                      placeholder="postal no"
                      value={this.state.postalNo}
                      onChange={this.handleInputChange}
                      required />
                  </div>

                  <div class="col">
                    <input type="text"
                      className="form-control"
                      name="street"
                      placeholder="street"
                      value={this.state.street}
                      onChange={this.handleInputChange} />
                  </div>

                  <div class="col">
                    <input type="text"
                      className="form-control"
                      name="town"
                      placeholder="town"
                      value={this.state.town}
                      onChange={this.handleInputChange} />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} className="topic">Contact No: </label>
                  <input type="text"
                    className="form-control"
                    name="contactNo"
                    placeholder="Enter Your TeleNo"
                    value={this.state.contactNo}
                    onChange={this.handleInputChange} />
                </div>


                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} className="topic">Order Date</label>
                  <input type="date"
                    className="form-control"
                    name="orderDate"
                    placeholder="Date"
                    value={this.state.orderDate}
                    onChange={this.handleInputChange} />
                </div>

                <label style={{ marginBottom: '5px' }} className="topic">Order Status: Pending  </label>
                <br />


                <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Continue with Payment
                </button>
                <br />
        
              </form>
            
            </div>
          </div>

        </div>
    </div>
  </div>
      
        <br />
        <br/>
        
        <section id="hire">
          <div className="move">
            <div class="container-fluid">
              <div class="Jumbotron jumbotron-fluid">
                <div className="container hire">
                  <marquee direction="left"><h6 class="display-3 "><img src="http://gifgifs.com/animations/jobs-people/painters/Painting_the_fence.gif" />Thanks for choosing CITY FURNITURE</h6></marquee>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    )
  }
}