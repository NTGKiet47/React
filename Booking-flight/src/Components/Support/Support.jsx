import React from "react";

import windowImg from "../../assets/window1.jpg"

const Support = () => {
    return (
        <div className="support container section">
            <div className="sectionContainer">
                <div className="tittlesDiv">
                    <small>
                        Travel support
                    </small>
                    <h2>Plan you trip with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey</p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div className="singleInfo">
                            <span className="number">01</span>
                            <h4>Travel requirements for Dubai</h4>
                        </div>
                        <div className="singleInfo">
                            <span className="number colorOne">02</span>
                            <h4>Travel requirements for Dubai</h4>
                        </div>
                        <div className="singleInfo">
                            <span className="number colorTwo">03</span>
                            <h4>Travel requirements for Dubai</h4>
                        </div>
                    </div>
                    <div className="imageDiv">
                        <img src={windowImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support;