import React from "react"
import assets from '../assets/cart_icon.png'
import logo from '../assets/logo.png'
import {Link} from "react-router-dom";


export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="Logo" style={{height:"80px"}} />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width:"100%", display:"flex",justifyContent:"center", fontSize:"18px",textTransform:"capitalize"}}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.shop}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/men">
                  {props.men}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/women">
                  {props.women}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kid">
                  {props.kid}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" style={{alignItems:"center"}}>
              <button  className="btn mx-2 btn-light" type="Login" style={{backgroundColor:"#EEEEEE",padding:"0 10px", marginTop:"6px"}}>
                loing
              </button>
              <img src={assets} alt="" style={{height:"25px"}} />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
