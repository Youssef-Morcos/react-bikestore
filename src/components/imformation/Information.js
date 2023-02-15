import React from "react";
import "./InformationStyles.css";

import {GrBike} from "../../../node_modules/react-icons/gr";
import {GoTools} from "../../../node_modules/react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import {FiCreditCard} from "../../../node_modules/react-icons/fi";




function Information () {
    return (
        <div className="information">

            <div className="career info">
                <GrBike className='info-icons iconbike' />
                <p>Check our bikes</p>
                <button>Shop</button>
            </div>

            <div className="catering info">
                <GoTools className="info-icons" />
                <p>Service</p>
                <button>Learn More</button>
            </div>

            <div className="signup info">
                <AiOutlineMail className="info-icons" />
                <p>Sign up for offers </p>
                <button>Sign Up</button>
            </div>

            <div className="gift-card info">
                <FiCreditCard className="info-icons" />
                <p> Gift Card</p>
                <button>Learn More</button>

            </div>

        </div>
    )
}

export default Information;