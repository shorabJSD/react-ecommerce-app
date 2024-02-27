import React from "react";
import './Login/Login.css'
export default function SingUp() {
  return (
    <>
      <div className="input_field">
        <div className="container dis_flex">
        <div className="form">
          <h1 className="input_title">Singh up</h1>
          <hr />
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
            <div className="login_btn d-flex">
              <p style={{color:"#fff"}}>Already you have account!</p>
              <button>login Here</button>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="exampleCheck1" style={{color:'#fff'}}>
                By Continuing I agree to the terms of use & privacy policy
              </label>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}
