import React from "react"
import cart_icon from './assets/cart_icon.png'
import logo from './assets/logo.png'
import {Link} from "react-router-dom"
import './Navbar.css'
import { useState } from "react"


export default function NavBar(props) {
const [menu, setMenu] = useState('shop')
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <Link className=" d-flex" to="#" style={{alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
            <img src={logo} alt="Logo" style={{height:"55px", marginRight:"10px"}} />
            <p style={{marginTop:"5px", marginBottom:"0", color:"#000", fontWeight:"bold"}}>SHOPPER</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width:"100%", display:"flex",justifyContent:"center", fontSize:"18px",textTransform:"capitalize", alignItems:"center"}}>
              <li onClick={()=>{setMenu('Shop')}} className="nav-item">
                <Link  className="nav-link active" aria-current="page" to="/">
                  {props.shop} 
                </Link>{menu==='Shop'?<hr/>:<></>}
              </li>
              <li onClick={()=>{setMenu('Men')}} className="nav-item">
                <Link  className="nav-link" to="/men">
                  {props.men}
                </Link>{menu==='Men'?<hr/>:<></>}
              </li>
              <li onClick={()=>{setMenu('Women')}} className="nav-item">
                <Link  className="nav-link" to="/women">
                  {props.women}
                </Link>{menu==='Women'?<hr/>:<></>}
              </li>
              <li onClick={()=>{setMenu('Kids')}} className="nav-item">
                <Link  className="nav-link" to="/kid">
                  {props.kid}
                </Link>{menu==='Kids'?<hr/>:<></>}
              </li>
            </ul>
            <form className="d-flex" role="search" style={{alignItems:"center"}}>
              <button  className="btn mx-2 btn-light" type="Login" style={{backgroundColor:"#EEEEEE",padding:"5px 20px", marginTop:"6px"}}>
                Loing
              </button>
              <Link>
                <img src={cart_icon} alt="" style={{height:"25px"}} />
                <span className="position-absolute  translate-middle badge rounded-pill bg-danger">0</span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
