import React from "react";
import {FaHome, FaEnvelope, FaPhoneAlt, FaPrint, FaFacebook, FaTwitter, FaGooglePlusG, FaLinkedinIn} from 'react-icons/fa';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Open Treasury Portal
            </h6>
            <p>
             A one stop place for Government Transparency, that deals with all her transactions. Feel free to check any project of the FGN.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Payments</h6>
            <p> <a href="#!" className="link">Account</a> </p>
            <p><a href="#!" className="link">Amounts</a> </p>
            <p> <a href="#!" className="link">Transcations</a> </p>
            <p><a href="#!" className="link">MDAs</a></p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold"> Requirements</h6>
            <p><a href="#!" className="link">Your Account</a></p>
            <p> <a href="#!" className="link">Become an Affiliate</a> </p>
             <p> <a href="#!" className="link">Help</a></p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>  <FaHome className="mr-3"/>  Plot 1570 Samuel Ladoke Akintola Boulevard, Garki 2, Abuja </p>
            <p>   <FaEnvelope className="mr-3"/> info@gifmis.gov.ng </p>
            <p>  <FaPhoneAlt className="mr-3" /> + 01 234 567 88</p>
            <p> <FaPrint className="mr-3" /> + 01 234 567 89</p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="6" lg="8">
            <p className="text-center text-md-left grey-text">&copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://opentrasury.gov.ng" className="link"> Transparency Portal </a>
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <FaFacebook className="mr-1" size={25} style={{ fill: 'white'}} />
                    </a>
                    {/* <FaThumbsDown size={30} style={{ fill: 'black' }} /> */}
                 </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <FaTwitter className="mr-1" size={25} style={{ fill: 'white', shadowOpacity: 0.75, shadowRadius: 5, shadowColor: 'red'  }} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <FaGooglePlusG className="mr-1" size={25} style={{ fill: 'white', shadowOpacity: 0.75, shadowRadius: 5, shadowColor: 'red'  }} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <FaLinkedinIn className="mr-1" size={25} style={{ fill: 'white', shadowOpacity: 0.75, shadowRadius: 5, shadowColor: 'red'  }} />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPagePro;