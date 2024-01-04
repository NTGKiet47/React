import React from "react";

import { IoCalendar } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsBookmarkCheckFill } from "react-icons/bs";


const Info = () => {
    return (
        <div className="info section">
            <div className="infoContainer container">
                <div className="tittleDiv flex">
                    <h2>Travel to make memories all around the world</h2>
                    <button className="btn">
                        View All
                    </button>
                </div>
                <div className="cardsDiv grid">
                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <IoCalendar className="icon" />
                        </div>
                        <span className="carldTitle">Book & Relax</span>
                        <p>You can also call airlanes from your phone and book a flight ticket</p>
                    </div>
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <IoShieldCheckmarkOutline className="icon" />
                        </div>
                        <span className="carldTitle">Smart Checklist</span>
                        <p>You can also call airlanes from your phone and book a flight ticket</p>
                    </div>
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheckFill className="icon" />
                        </div>
                        <span className="carldTitle">Save More</span>
                        <p>You can also call airlanes from your phone and book a flight ticket</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;