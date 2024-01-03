import React from "react";

import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";




const Search = () => {
    return (
        <div className="search container section">
            <div className="sectionContainer grid">
                <div className="btns flex">
                    <div className="singleBtn"><span>Economy class</span></div>
                    <div className="singleBtn"><span>Business class</span></div>
                    <div className="singleBtn"><span>First class</span></div>
                </div>
                <div className="searchInputs flex">
                    <div className="searchInput flex">
                        <div className="iconDiv">
                            <FaMapLocationDot className="icon" />
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder="Choose destination" />
                        </div>
                    </div>
                    <div className="searchInput flex">
                        <div className="iconDiv">
                            <FaUserFriends className="icon" />
                        </div>
                        <div className="texts">
                            <h4>Number of seat</h4>
                            <input type="number" placeholder="Choose how many seat" />
                        </div>
                    </div>
                    <div className="searchInput flex">
                        <div className="iconDiv">
                            <IoCalendar className="icon" />
                        </div>
                        <div className="texts">
                            <h4>Departure date</h4>
                            <input type="text" placeholder="Choose departure date" />
                        </div>
                    </div>
                    <div className="searchInput flex">
                        <div className="iconDiv">
                            <IoCalendar className="icon" />
                        </div>
                        <div className="texts">
                            <h4>Leaving date</h4>
                            <input type="text" placeholder="Choose leaving date" />
                        </div>
                    </div>

                    <button className="btn btnBlock flex">Search flight</button>
                </div>
            </div>
        </div>
    )
}
export default Search;