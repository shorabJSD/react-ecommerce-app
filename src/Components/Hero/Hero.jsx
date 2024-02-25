import React from "react";
import hand_icon from '../assets/hand_icon.png'
import hero_image from '../assets/hero_image.png'
import arrow_img from '../assets/arrow.png'
import './Hero.css'
export default function Hero(props) {
  return (
    <>
      <div className="hero"  style={{ width: "100%", height: "100vh"}}>
        <div className="container" style={{height:"100%", }}>
          <div className="row" style={{ width: '100%', height: '100%',display: 'flex', alignItems: 'center'}}>
            <div className="col-sm-6 col-md-5 col-lg-6 ">
              <h2 className="marginPadding">{props.heroTitle}</h2>
              <div className="icon d-flex" style={{alignItems:"center"}}>
                <p className="heroFontSize marginPadding">{props.heroNewColl}</p>
                <img src={hand_icon} alt="" style={{height:"45px"}} />
              </div>
              <div className="new_coll">
                <p className="heroFontSize marginPadding">{props.heroColl}</p>
                <button style={{width: '155px',backgroundColor: 'red',border: 'none',borderRadius: '20px', color:"#fff"}}>New collection<img style={{width:"17px",marginRight:"5px"}} src={arrow_img} /></button>
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
