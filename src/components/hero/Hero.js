import React from "react";
import './HeroStyles.css';
import Video from '../../assets/bike.mp4';
import {AiOutlineSearch} from '../../../node_modules/react-icons/ai';


function Hero() {
    return (
    <div className="hero">
        <video   autoPlay loop muted controls='' id='video'>
            <source src={Video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
            <h1>Top Quality Bikes</h1>
            <h2>Bikes for Everybody</h2>
            <form className="form">
               <div> <input type='text' placeholder="Explore our shop" /> </div>
               <div><button><AiOutlineSearch className='icon' /></button></div>
            </form>

        </div>

    </div>
    )
}

export default Hero;