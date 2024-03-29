import React from "react";
import Bike2 from "../../assets/bike2.jfif";



function BikesMenu (props) {


    return (
        <div className="bikes" onMouseEnter={props.handleHoverBikes} onMouseLeave={props.leaveHoverBikes} >
                
        <div className="menu-bikes menu-list bike-promotion-container" >
            <div id="bikediv" >
            Bikes
            </div>
            <div className="bike-promotion" style={props.hoverBikes ? {right: 55, height: 537,  transition: "0.5s"}: {right: "-100vw"}}>
            <div className="bikenavpromo">
                    <div className="bikeimagepromo">
                        <img src={Bike2} alt="/"/>
                        <div className="buttonpromo"> <button>Check it out</button> </div>
                    </div>
                </div>
            </div>

        </div>
            <div className={props.hoverBikes ? "sub-bikes hover-bikes" : "sub-bikes"} >

                <div className="cat-container" >

                <div className="categories road-bikes">
                    <h2>Road Bikes</h2>
                    <ul>
                        <li>Performance & Race</li>
                        <li>Adventure</li>
                        <li>Electric Road</li>
                    </ul>
                </div>
                <div className="categories mountain-bikes">
                    <h2>Mountain Bikes</h2>
                    <ul>
                        <li>Cross Country</li>
                        <li>Trial & Downhill</li>
                        <li>Dirt Jump</li>
                        <li>Electric Mountain</li>

                    </ul>

                </div>
                <div className="categories city">
                    <h2>City Bikes</h2>
                    <ul>
                        <li>Fitness</li>
                        <li>Comfort</li>
                        <li>Hybrid</li>
                        <li>Touring</li>

                    </ul>
                </div>
                <div className="categories electric">
                    <h2>Electric Bikes</h2>
                    <ul>
                        <li>Road</li>
                        <li>Mountain</li>
                        <li>Active</li>

                    </ul>
                </div>

                </div>


            </div>
    </div>

    )
}

export default BikesMenu;