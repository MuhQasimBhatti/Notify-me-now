import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { login } from "../images";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:3001/login",{
      email,password
    })
    .then((response)=>{
      console.log(response.data);
      if(response.data.success===true){
        alert("Login Successful");
        navigate('/dashboard');
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  return (
    <div class="signinPage">
      <div class="signinPageInner">
        <form onSubmit={handleSubmit}>
        <MDBContainer fluid="true" class="signInForm">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src={login}
                class="img-fluid"
                alt="Phone image"
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <MDBTypography style={{color:"#fd7f27",fontWeight:"bold",fontSize:"50px",textAlign:"center"}}>
                WELCOME BACK!
              </MDBTypography>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                onChange={e=>setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={e=>setPassword(e.target.value)}
              />

              <div className="d-md-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="/resetpassword" className="d-flex justify-content-end  align-items-end ">Forgot password?</a>
              </div>

              <button className="custom-button mb-4 w-100" size="lg">
                Sign in
              </button>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </form>
      </div> 
      </div>
  );
};

export default Login;
