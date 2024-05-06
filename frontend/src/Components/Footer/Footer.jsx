import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo_big.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import instagram_icon from "../Assets/instagram_icon.png"

function Footer() {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="logo"/>
            <p>FASHOLIC</p>
        </div>
        <div className="footer-list">
            <ul>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className="footer-socialmedia-icons">
            <img src={instagram_icon} alt="instagram_icon" />
            <img src={pintester_icon} alt="pintester_icon" />
            <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
        <hr/>
        <p>Copyrights @ 2024 - All Right Reserved.</p>
    </div>
  )
}

export default Footer