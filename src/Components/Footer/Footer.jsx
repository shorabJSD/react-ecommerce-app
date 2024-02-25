import React from 'react'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pintester_ion from '../assets/pintester_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import logo_big from '../assets/logo_big.png'
import './Footer.css'
export default function Footer() {
  return (
   <>
    <div className='container footer my-5'>
       
       <div className="footer_info">
         <div className="footer_logo">
           <img src={logo_big} alt="" />
           <p>shopper</p>
         </div>
           <div className="footer_nav">
            <ul>
                <li><a href="#">Comapny</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Office</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
           </div>
           <div className="social_media">
              <div className="whatsapp">
                 <a href="/"><img src={whatsapp_icon} alt="" /></a>
              </div>
              <div className="pintester">
                 <a href="/"><img src={pintester_ion} alt="" /></a>
              </div>
              <div className="instagrame">
                 <a href="/"><img src={instagram_icon} alt="" /></a>
              </div>
           </div>
           <hr/>
         <div className="copyRight">Copyright @ 2024 All Right Reserved.</div>
       </div>
    </div>
    </>
  )
}
