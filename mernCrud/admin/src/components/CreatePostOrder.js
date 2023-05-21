import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePostOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      postalNo: "",
      street: "",
      town: "",
      contactNo: "",
      orderDate: "",
      status: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })

  }

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

    axios.post("http://localhost:8000/post/save", data).then((res) => {
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
      }
    })


  }

  render() {
    return (
      <>

        <div className="container">
        <h1 className="text-centre">Order Detail Form </h1>

        <form className="row g-3 needs-validation" noValidate>

          <div className="order-form" style={{ marginBottom: '15px' }} align="center">
            <label for="validationTooltip01" style={{ marginBottom: '5px' }} >Customer Name: </label>
            <input type="text"
              id="validationTooltip01"
              className="form-control"
              name="name"
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={this.handleInputChange} required />
            
          </div>



          <label style={{ marginBottom: '5px' }} >Address: </label>
          <div class="row">
            <div class="col">
              <input type="number"
                className="form-control"
                name="postalNo"
                placeholder="postal no"
                value={this.state.postalNo}
                onChange={this.handleInputChange} />
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
            <label style={{ marginBottom: '5px' }} >Contact No: </label>
            <input type="text"
              className="form-control"
              name="contactNo"
              placeholder="Enter Your TeleNo"
              value={this.state.contactNo}
              onChange={this.handleInputChange} />
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Order Date</label>
            <input type="date"
              className="form-control"
              name="orderDate"
              placeholder="Date"
              value={this.state.orderDate}
              onChange={this.handleInputChange} />
          </div>

          <label style={{ marginBottom: '5px' }} >Order Status: Pending  </label>

          <br />


          <br />


        </form>
        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Submit
        </button>



      </div>
      </>
    )
  }
}