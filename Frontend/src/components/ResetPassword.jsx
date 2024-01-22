import React from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { resetpassword } from "../images/index";

const ResetPassword = () => {
  return (
    <div
    className="d-flex align-items-center justify-content-center p-2"
      style={{ height: "100vh" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center gap-4 p-2 p-md-5 rounded-4 " style={{ boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",maxWidth:"350px" }}>
        <img src={resetpassword} className="w-25 " />
        <h1 className="text-primary text-center fs-2" >Reset Password</h1>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="formControlLg"
          type="email"
          size="lg"
        />
        <button className="custom-button mb-4" size="md">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
