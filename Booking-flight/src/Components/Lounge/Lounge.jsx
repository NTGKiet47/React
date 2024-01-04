import React from "react";

import flightAttendant from "../../assets/flightAttendant.jpg"

const Lounge = () => {
    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">
                <div className="imgDiv">
                    <img src={flightAttendant} alt="" />
                </div>
                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>
                    <div className="grids grid">
                        <div className="singleGrid">
                            <span>Help through the airport</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>
                        <div className="singleGrid">
                            <span>Help through the airport</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>
                        <div className="singleGrid">
                            <span>Help through the airport</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lounge;