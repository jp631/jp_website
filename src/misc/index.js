import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Tilt from 'react-tilt'
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
                    width: (props.width) ? props.width : "25rem",
                    height: (props.height) ? props.height : "auto"
                }}>
            <a title={props.link} onClick={props.click} style={{ fontSize: (props.textSize) ? props.textSize : "5rem" }}>
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
        <div className="yellowCardNormal_container">
            <div className="top">
            </div>
            <div className="middle">
            </div>
            <div className="down">
            </div>
        </div>

    );
};

export const YellowCardShift = () => {
    return (
        <Zoom right opposite>
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

export const Showframe = (props) => {
    return (
        <div className="iframe_container"
            style={{
                display: (props.display) ? "block" : "none"
                }}
        >
            <div className="closeIcon" title="close">
                <FontAwesomeIcon icon={faTimesCircle} onClick={props.clickToClose}/>
            </div>
            <iframe key={props.key} className="frame"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: ".5rem",
                    transition: "all .3s",

                }}
                src={props.link}
            >
                <a>visit this link</a>
            </iframe>
            
        </div>
    )
}

export const ProjectCard = (props) => {

    return (
        <Tilt className="Tilt" option={{ max: 25, perspective: 1000, scale: 1, speed: 300, reset: true }}>
            <div className="projectCard">
                <div className="firstRec"></div>
                <Tilt>
                    <div className="secondRec">
                        <h1>{props.name}</h1>
                        <a href={props.link} alt={props.name}>
                            <img src={props.image} alt="props.name" title="props.name" />
                            <div className="screen">
                        </div>
                        <p>click here to see the project in a new window</p>
                        </a>
                        
                    </div>

                </Tilt>
                <Tilt>
                    <div className="thirdRec">
                        <p>
                            {props.text}
                        </p>
                        <Buttons
                            link={props.link}
                            text="Seet it"
                            backColor="var(--sixth_color)"
                            width="60%"
                            textSize="3rem"
                            color="var(--first_color)"
                            click={props.click}
                        />

                    </div>
                </Tilt>
            </div>
        </Tilt>

    )
}

// function declaring 
