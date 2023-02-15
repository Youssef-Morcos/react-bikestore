import React, {useState} from "react";
import {BiSearch} from '../../../node_modules/react-icons/bi';
import {BsPerson} from '../../../node_modules/react-icons/bs';
import {HiOutlineMenuAlt4} from '../../../node_modules/react-icons/hi';
import {AiOutlineClose, AiOutlineArrowDown, AiOutlineArrowUp} from  '../../../node_modules/react-icons/ai';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter,FaYoutube} from '../../../node_modules/react-icons/fa';
import AccessoriesMenu from "./AccessoriesMenu";
import BikesMenu from "./BikesMenu";




import './NavbarStyles.css';


function Navbar () {

    const [hoverBikes, setHoverBikes] = useState(false);
    const [hoverAccessories, setHoverAccessories] = useState(false);
    const [nav, setNav] = useState(false);
    const [mobSubBikes, setMobSubBikes] = useState(false);
    const [mobSubAccessories, setMobSubAccessories] = useState(false);


    const handleHoverBikes = ()=> setHoverBikes(true);
    const leaveHoverBikes = ()=> setHoverBikes(false);

    const handleHoverAccessories = () => setHoverAccessories(true);
    const leaveHoverAccessories = () => setHoverAccessories(false);

    const handleNav = ()=> setNav(!nav);

    const handleSubMenuBikes = ()=> setMobSubBikes(!mobSubBikes);

    const handleSubMenuAccessories = ()=> setMobSubAccessories(!mobSubAccessories);

   


 
    return (
        <div className="navbar">

            <div className="logo">
                <h2>dave's bikes</h2>
            </div>

            <div className="nav-menu">

                    
                <div className="menu-home menu-list" >Home</div>
                   
                <BikesMenu hoverBikes={hoverBikes} handleHoverBikes={handleHoverBikes} leaveHoverBikes={leaveHoverBikes}/>
                <AccessoriesMenu hoverAccessories={hoverAccessories} handleHoverAccessories={handleHoverAccessories} leaveHoverAccessories={leaveHoverAccessories}/>     
                <div className="menu-service menu-list" >FAQ</div>
                <div className="meny-contact menu-list">Contact</div>

                <div className="bike-promotion"></div>
            </div>

        <div className="nav-icons">
            
           <BiSearch className="icon"  />
           <BsPerson className="icon" />
        
        </div>

        <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon'/>) : (<AiOutlineClose className="icon dark" />)}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>

                <div className="mobile-nav">
                <div className="mob-list">Home</div>

                <div className="sub-bikes-container">
                    <div className={mobSubBikes ? "mob-list no-border " : "mob-list"}>
                        <div>Bikes</div>
                        <div onClick={handleSubMenuBikes}>{mobSubBikes ? <AiOutlineArrowUp /> : <AiOutlineArrowDown/>} </div>
                    </div>
                    <div className= {mobSubBikes ? "mob-submenu sub-bike-active" : "mob-submenu" }>
                            <div className="mob-submenu-li">
                                <p>Road Bikes</p>
                                <p>Mountain Bikes</p>
                                <p>City Bikes</p>
                                <p>Electric Bikes</p>
                            </div>
                        </div>
                </div>

                <div className="sub-accessories-container">
                    <div className={mobSubAccessories ? "mob-list no-border " : "mob-list"}>
                        <div>Accessories</div>
                        <div onClick={handleSubMenuAccessories}>{mobSubAccessories ? <AiOutlineArrowUp /> : <AiOutlineArrowDown/>} </div>
                    </div>
                    <div className= {mobSubAccessories ? "mob-submenu sub-bike-active" : "mob-submenu" }>
                            <div className="mob-submenu-li">
                                <p>Water Bottles</p>
                                <p>Rider Gears </p>
                                <p>Lights & Electronics</p>
                            </div>
                        </div>
                </div> 

                <div className="mob-list">FAQ</div>
                <div className="mob-list">Contact</div>
                 </div>

                <div className="mobile-menu-bottom">
                    <div className="mennu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                </div>

                <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                </div>
            </div>


        </div>
            

    )
}

export default Navbar;