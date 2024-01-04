import React from "react";

const Subscriber = () => {
    return (
        <div className="subscribe section">
            <div className="sectionContainer container">
                <h2>Subscribe and get Latest NEWS</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter your Email" />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Subscriber;