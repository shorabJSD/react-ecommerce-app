import React from 'react'
import './Offer.css'
import Exclusive from '../assets/exclusive_image.png'
export default function Offer() {
  return (
    <div>
        <div className="container my-5">
            <div className="offer rounded shadow ">
                <div className="row d-flex offer_pro">
                    <div className="col col-left">
                        <h2>Exclusive <br/>Offer For You</h2>
                        <p>only one on best seller products</p>
                        <button>check now</button>
                    </div>
                    <div className="col col-right">
                         <img src={Exclusive} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
