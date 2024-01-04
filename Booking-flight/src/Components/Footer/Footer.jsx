import React from "react";

import logo from "../../assets/logo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaPinterestSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <p>Time doesn't wait till you free, fly when you want</p>
                    <div className="socialIcon flex">
                        <FaFacebookSquare className="icon" />
                        <FaXTwitter className="icon" />
                        <CiYoutube className="icon" />
                        <FaPinterestSquare className="icon" />
                    </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Infomation</span>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Flight Status</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Check-in</a></li>
                    <li><a href="#">Manage your booking</a></li>
                </div>
            </div>
            <div className="copyRightDiv flex">
                <p>Courtesy | Develop by <a href="https://github.com/NTGKiet47" target="blank">NguyenKiet</a></p>
            </div>
        </div>
    )
}
export default Footer;