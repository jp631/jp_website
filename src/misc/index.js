import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import logo from "../images/logo/logoBrand.png";

import "./style.scss";

export const Logo = (props) => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" width="50px" height="auto" title="logo" />
        </div>
    );
};

export const SocialLogos = () => {
    return (
        <div className="icons">
            <a href="be.com" className={(true) ? "facebook" : "false"} >
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="be.com" className={(true) ? "istagram" : "false"}>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="be.com" className={(true) ? "twitter" : "false"}>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="be.com" className={(true) ? "youtube" : "false"}>
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="be.com" className={(true) ? "linkedIn" : "false"}>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
    );
}

export const Buttons = (props) => {
    return (
        <div className="buttons"
            style={
                {
                    backgroundColor: props.backColor,
                    color: props.color,
                }
            }>
            <a href={props.link} title="click">
                {props.text}
            </a>
        </div>
    );
}

export const ColoredCards = (props) => {
    return (
        <Zoom left>
        <div className="coloredCard_container"
            style={{
                backgroundColor: props.color
            }}>
        </div>
        </Zoom>
    );
}

export const ColoredCircle = () => {
    return (
        <div className="circles_holders" data-title="Menu">
            <div className="circles yellow_circle"> </div>
            <div className="circles white_circle"> </div>
            <div className="circles pink_circle"> </div>
            <div className="circles blue_circle"> </div>
            <div className="circles lightBlue_circle"> </div>
        </div>
    );
}

export const YellowCardNormal = () => {
    return (
        <Fade>
        <div className="yellowCardNormal_container">
            <div className="top">
            </div>
            <div className="middle">
            </div>
            <div className="down">
            </div>
        </div>
    </Fade>
    );
};

export const YellowCardShift = () => {
    return (
        <Zoom right delay="2000" opposite>
            <div className="YellowCardShift_container">
                <div className="top">
                </div>
                <div className="middle">
                </div>
                <div className="down">
                </div>
            </div>
        </Zoom>
    );
};


// function declaring 
