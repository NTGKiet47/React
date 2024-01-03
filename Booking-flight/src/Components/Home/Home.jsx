import React from "react";

import adverVideo from "../../assets/backgroundVideo.mp4"
import planeTakeOff from "../../assets/takeoff.png"

const Home = () => {
    return (
        <div className="home flex container">
            <h1 className="mainText">
                Enjoy the best flights with GKAirline
            </h1>
            <div className="homeImage flex">
                <div className="videoDiv">
                    <video className="video" src={adverVideo}
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
                <img className="plane" src={planeTakeOff} alt="" />
            </div>
        </div>

    )
}
export default Home;