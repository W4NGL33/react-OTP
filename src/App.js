import logo from './logo.svg';
import './App.css';
// import FontAwesome from 'react-fontawesome'
import logo1 from './component/images/Nigerian-Coat-of-Arm.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {MDBIcon, MDBCol} from 'mdbreact';
import {FaSearch} from 'react-icons/fa';
import Footer from './component/Footer'
// import DatePicker from './component/DatePicker'
// import Slider from './component/Slider'
import Slide1 from './component/images/1.jpg'
import Slide2 from './component/images/percentage-2.2.jpg'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button, Container, Row, Col, Modal, ListGroup, Carousel} from 'react-bootstrap';

function App() {

  // function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="App">
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
  
  <ListGroup.Item action variant="success"  onClick={handleShow}>
    Daily Treasury Report
  </ListGroup.Item>
  <ListGroup.Item action variant="success"  onClick={handleShow}>
  Daily Payment Report
  </ListGroup.Item>
  <ListGroup.Item action variant="success"  onClick={handleShow}>
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

  

      {/* Modal starts*/}

      <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
              <Form.Label className="mx-3">Federal Government Total</Form.Label>
              <Form.Check type="radio" aria-label="Federal Government Total" />
              <Form.Label className="mx-3">MDAs</Form.Label>
              <Form.Check type="radio" aria-label="MDAs" />
              </Form.Row>

              <Form.Row>
                   <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Organization</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                                    
                </Form.Row>

            <Form.Row>
               <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>
                   
           

             
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Form>
              

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      {/* Modal ends */}

      {/* footer start */}
      <div className="footer-area">
        <Container>
          <Footer />
         </Container>

       </div>
      {/* footer ends */}
    </div>
  );
}

export default App;
