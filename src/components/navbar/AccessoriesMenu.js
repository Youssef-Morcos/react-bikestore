import React, {useState, useRef, useEffect} from "react";
import Waterbottlepromo from '../../assets/waterbottlepromo.jfif';

function AccessoriesMenu (props){

    const [ refwidth,setRefwidth] = useState();
    const [refHeight, setRefHeight] = useState();

    const elementWidth = useRef();
    const elementHeight = useRef();

    useEffect( ()=> {
        if (elementWidth.current){
        let widthValue = elementWidth.current;
        setRefwidth(widthValue.offsetWidth);
            }
        if(elementHeight.current){
        let heightValue= elementHeight.current;
        setRefHeight(heightValue.offsetHeight);
    }
        
    },[]);


    return (
        <div className="accessories" onMouseEnter={props.handleHoverAccessories} onMouseLeave={props.leaveHoverAccessories} ref={elementWidth}>
                
        <div className="menu-accessories menu-list accessories-promotion-container" >

            <div className="accessoriesdiv">
            Accessories
            </div>

            <div className="accessories-promotion" style={props.hoverAccessories ? {right: (refwidth - 16), height: refHeight,  transition: "0.5s"}: {right: "-100vw"}}>
            <div className="accessoriesnavpromo">
                    <div className="accessoriesimagepromo">
                        <img src={Waterbottlepromo} alt="/"/>
                        <div className="button-accessories-promo"> <button>Check it out</button> </div>
                    </div>
                </div>
            </div>
            
            </div>


            <div className={props.hoverAccessories ? "sub-accessories hover-accessories" : "sub-accessories"} >

                <div className="cat-accessoriescontainer" ref={elementHeight}>

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
