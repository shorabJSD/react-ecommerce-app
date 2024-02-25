import React from "react";
import "./NewsLetter.css";
export default function NewsLetter() {
  return (
    <>
      <div className="container my-5">
        <div className="news_letter rounded shadow">
          <div className=" subForNews">
            <h1>Get exclusive offers on your email</h1>
            <p>Sbuscription to our newslatter and stay updated</p>
            <div className="input-group mb-3" style={{width:"60%"}}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Eamil...."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                style={{border:"none", backgroundColor:"#ff002b", borderRadius:"20px", color:"#000", left:"-25px", zIndex:"10"}}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
