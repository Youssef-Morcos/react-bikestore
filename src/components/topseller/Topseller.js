import React from "react";
import './TopsellerStyles.css';

import Bike1 from "../../assets/bike1.jfif";
import Bike2 from "../../assets/bike2.jfif";


function Topseller () {
    return (
        <div className="topseller">
            <h2>Top Sellers</h2>

            <div className="top-bikes">

                <div className="bike">
                    <div className="bikeimage"><img src={Bike1} alt="/"/></div>
                    <h3>Best Trek Bike </h3>
                    <button>Check it out</button>
                </div>
                <div className="bike">
                    <div className="bikeimage"><img src={Bike2} alt="/"/></div>
                    <h3>Best Bike for value</h3>
                    <button>Check it out</button>
                </div>

            </div>

            

        </div>
    )
}

export default Topseller;