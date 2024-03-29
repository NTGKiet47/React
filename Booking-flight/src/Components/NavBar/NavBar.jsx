import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";


// image
import logo from "../../assets/logo.png"



const Navbar = () => {
    const [active, setActive] = useState('navBarMenu');
    const showNavBar = () => {
        setActive(() => {
            if (active === 'navBarMenu') {
                return 'navBarMenu showNavBar'
            } else {
                return "navBarMenu"
            }
        });
    }

    const [noBg, addBg] = useState('navBarTwo')
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navBarTwo navBar_with_bg');
        } else {
            addBg('navBarTwo');
        }
    }
    window.addEventListener('scroll', addBgColor);

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon" />
                </div>
                <div className="none flex">
                    <li className="flex"><BsFillPhoneVibrateFill />Support</li>
                    <li className="flex"><AiOutlineGlobal />
                        Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>

            </div>
            <div className={noBg}>
                <div className="logoDiv">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className={active}>
                    <ul className="menu flex">
                        <li className="listItem">Home</li>
                        <li className="listItem">About</li>
                        <li className="listItem">Offers</li>
                        <li className="listItem">Seats</li>
                        <li className="listItem">Destinations</li>
                    </ul>

                    <button className="btn flex btnOne">
                        Contact
                    </button>
                </div>
                <button className="btn btnTwo">
                    Contact
                </button>
                <div className="toggleIcon" onClick={showNavBar}>
                    <CgMenuGridR className="icon" />
                </div>
            </div>
        </div>
    )
}
export default Navbar;