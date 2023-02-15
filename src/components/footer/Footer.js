import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import './FooterStyles.css';


function Footer () {
    return (
        <div className="footer">

<div className="container">

<div className="top">

    <div className="logo">
                <h2>dave's bikes</h2>
    </div>
    <div className="social">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaPinterest className="icon" />
        <FaYoutube className="icon" />

    </div>
</div>

<div className="bottom">
    <div className="left">
        <ul>
            <li>About</li>
            <li>Bikes</li>
            <li>Accessories</li>
            <li>Sign Up</li>
            <li>FAQ</li>
        </ul>
    </div>
    <div className="right">
        <ul>
            <li>Contact</li>
            <li>Terms</li>
            <li>Policy</li>
            <li>Privacy</li>
            <li>Legal</li>
    
        </ul>
    </div>
</div>

</div>

        </div>
    )
}

export default Footer;