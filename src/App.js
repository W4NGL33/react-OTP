import logo from './logo.svg';
import './App.css';
// import FontAwesome from 'react-fontawesome'
import logo1 from './component/images/Nigerian-Coat-of-Arm.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import axios from "axios";

import { MDBIcon, MDBCol } from 'mdbreact';
import { FaSearch } from 'react-icons/fa';
import Footer from './component/Footer'
// import DatePicker from './component/DatePicker'
// import Slider from './component/Slider'
import Slide1 from './component/images/1.jpg'
import Slide2 from './component/images/percentage-2.2.jpg'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container, Row, Col, Modal, ListGroup, Carousel } from 'react-bootstrap';

export default class App extends Component {

  state = {
    show: false,
    showOrganization: false,
    showDate: false,
    organizationList: [
      {id: 1, name: "Organization 1"},
      {id: 2, name: "Organization 2"},
      {id: 3, name: "Organization 3"}
    ],
    selectedOrg: "",
    selectedDate: "",
    fg: false,
    mda: false,
    result: []
  }

  handleShow=()=>{
    this.setState({show:true})
  }


  handleClose=()=>{
    this.setState({show:false})
  }


  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
        ...this.state,
        [e.target.name]: value,
    });
};

submitForm=()=>{
  if(this.state.fg==true){
    //Check for date
    if(this.state.selectedDate == ""){
      alert("Oga pick date bilo")
      return
    }
    //
    // axios.get("http://localhostere:343/"+this.state.selectedDate).then(res =>{
      axios.get(`http://localhostere:343/${this.state.selectedDate}`).then(res =>{
      this.setState({result: res.data})
    }).catch(err =>{

    })

  }
  else if(this.state.mda==true){
        //Check for date and mda
        if(this.state.selectedDate == "" || this.state.selectedOrg == ""){
          alert("Oga fill both fields")
          return
        }
        axios.get(`http://localhostere:343/${this.state.selectedOrg}/${this.state.selectedDate}`).then(res =>{
          this.setState({result: res.data})
        }).catch(err =>{
    
        })
        
  }

}


  render() {
    return (
      <div className = "App" >
      <div className="header-color">
        <Container>
      <Navbar expand="lg" variant="dark" className="navbar-color">
        <Navbar.Brand href="#home"><img src={logo1}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ml-auto">
            <Nav.Link href="#home"><Navbar.Brand>Home</Navbar.Brand></Nav.Link>
            {/* <Nav.Link href="#link">About Open Treasury</Nav.Link> */}
            <NavDropdown title="About Open Treasury" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Policy Objectives</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Transparency Requirements and Responsibilities</NavDropdown.Item>
            </NavDropdown> 
                <Nav.Link href="#home"><Navbar.Brand>News</Navbar.Brand></Nav.Link>
                <Nav.Link href="#home"><Navbar.Brand>Contact Us</Navbar.Brand></Nav.Link>
                <Nav.Link href="#home"><Navbar.Brand>FAQs</Navbar.Brand></Nav.Link>
          </Nav>
          <div className="searchbox">
          <Form inline>
            <FaSearch className="searchicon mx-3" /><input type="text" placeholder="Search" className="mr-sm-2" />
                        
      {/* <Button variant="outline-success" className="search-button">Search</Button> */}
    </Form>
    </div>
  </Navbar.Collapse>
</Navbar>
</Container>
</div>

<div>
<Container fluid="md">
  <h2 className="pt-5">REPORTS </h2>
  <Row>
    <Col sm={4}>
    <ListGroup>
  
  <ListGroup.Item action variant="success"  onClick={this.handleShow}>
                  Daily Treasury Report
  </ListGroup.Item>
  <ListGroup.Item action variant="success"  onClick={this.handleShow}>
                  Daily Payment Report
  </ListGroup.Item>
  <ListGroup.Item action variant="success"  onClick={this.handleShow}>
                  Monthly Budget Performance Reports
  </ListGroup.Item>

</ListGroup>
    </Col>

    <Col sm={8}>
    <Carousel fade>
  <Carousel.Item>
    <img src={Slide1} height="400"/>
    
  </Carousel.Item>
  <Carousel.Item>
    <img src={Slide2} height="400"/>
  </Carousel.Item>
  <Carousel.Item>
    <img src={Slide1} height="400"/>
  </Carousel.Item>
</Carousel>
    </Col>
  </Row>
  </Container>
  </div>

  

      {/* Modal starts*/ }

      <>
{/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

  < Modal show = { this.state.show } onHide = { this.handleClose } >
  <Form onSubmit={this.submitForm}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
          <Modal.Body>
              <Form.Row>
              <Form.Label className="mx-3">Federal Government Total</Form.Label>
              <Form.Check name="radio-type" type="radio" aria-label="Federal Government Total" onClick={()=>this.setState({showOrganization: false, showDate: true, fg:true, mda:false})} />

              <Form.Label className="mx-3">MDAs</Form.Label>
              <Form.Check name="radio-type" type="radio" aria-label="MDAs" onClick={()=>this.setState({showOrganization: true, showDate: true,fg:false, mda:true})} />
              </Form.Row>

{this.state.showOrganization ? (
                <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                 <Form.Label>Organization</Form.Label>
                 <Form.Control as="select" defaultValue="Choose..." name="selectedOrg" onChange={this.handleChange}>
                   <option>Choose...</option>
                   {this.state.organizationList.map((item) => (
                     <option key={item.id} value={item.name}>{item.name}</option>
                    // <option key={item.id} value={item.id}>
                    //   {item.title}
                    // </option>
                  ))}
                 </Form.Control>
               </Form.Group>
                                 
             </Form.Row>
) : null}


{this.state.showDate ? (
  <Form.Row>
               <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" placeholder="" name="selectedDate" onChange={this.handleChange}  />
              </Form.Group>
            </Form.Row>) : null}

                   
           

             
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
        Close
          </Button>
          <Button variant="primary" type="submit">
        Submit
          </Button>
        </Modal.Footer>
        
        </Form>
      </Modal >
    </>
  {/* Modal ends */ }

{/* footer start */ }
<div className="footer-area">
  <Container>
    <Footer />
  </Container>

</div>
{/* footer ends */ }
    </div >
    )
  }


}
