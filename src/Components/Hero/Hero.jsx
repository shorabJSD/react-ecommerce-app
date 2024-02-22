import React from "react";
import hand_icon from '../assets/hand_icon.png'
import hero_image from '../assets/hero_image.png'
import arrow_img from '../assets/arrow.png'
import './Hero.css'
export default function Hero() {
  return (
    <>
      <div className="hero"  style={{ width: "100%", height: "100vh", backgroundColor: "green" }}>
        <div className="container" style={{height:"100%", }}>
          <div className="row" style={{ width: '100%', height: '100%',display: 'flex', alignItems: 'center'}}>
            <div className="col-sm-6 col-md-5 col-lg-6 ">
              <h2>NEW ARRIVALS ONLY</h2>
              <div className="icon d-flex" style={{alignItems:"center"}}>
                <p>new</p>
                <img src={hand_icon} alt="" style={{height:"45px"}} />
              </div>
              <div className="new_coll">
                <p>latest collection</p>
                <img src={arrow_img} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 d-flex" style={{alignItems:"center", justifyContent:"center"}}>
              <img src={hero_image} alt="hero_image" style={{height:"600px"}}/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
