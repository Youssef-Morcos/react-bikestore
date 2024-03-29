import React from "react";
import Waterbottlepromo from '../../assets/waterbottlepromo.jfif';

function AccessoriesMenu (props){

   


    return (
        <div className="accessories" onMouseEnter={props.handleHoverAccessories} onMouseLeave={props.leaveHoverAccessories} >
                
        <div className="menu-accessories menu-list accessories-promotion-container" >

            <div className="accessoriesdiv">
            Accessories
            </div>

            <div className="accessories-promotion" style={props.hoverAccessories ? {right: 103, height: 359,  transition: "0.5s"}: {right: "-100vw"}}>
            <div className="accessoriesnavpromo">
                    <div className="accessoriesimagepromo">
                        <img src={Waterbottlepromo} alt="/"/>
                        <div className="button-accessories-promo"> <button>Check it out</button> </div>
                    </div>
                </div>
            </div>
            
            </div>


            <div className={props.hoverAccessories ? "sub-accessories hover-accessories" : "sub-accessories"} >

                <div className="cat-accessoriescontainer" >

                    <div className="categories water-bottles">
                        <h2>Water Bottles</h2>
                        <ul>
                            <li>Water Bottles</li>
                            <li>Bottle cages</li>
                        </ul>
                        
                    </div>
                    <div className="categories"rider-gears>
                        <h2>Rider Gears</h2>
                        <ul>
                            <li>Helmets</li>
                            <li>Cycling Glasses</li>
                            <li>Protective Gear</li>
                        </ul>

                        
                    </div>
                    <div className="categories lights-electronics">
                        <h2>Lights & Electronics</h2>
                        <ul>
                            <li>Bikes Lights</li>
                            <li>GPS </li>
                            <li>Sensors</li>
                            <li>Electronic accessories</li>
                        </ul>
                    </div>
                    </div>


            </div>
    </div>

    )
}

export default AccessoriesMenu;
