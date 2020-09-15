import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
//import MessageIcon from '@material-ui/icons/Message';
import PhoneIcon from '@material-ui/icons/Phone';

import Tilt from 'react-tilt'
import Zoom from "react-reveal/Zoom";
import logo from "../images/logo/logoBrand.png";
import postImage from "../images/blog/blog.jpg";


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
                    position: props.position,
                    top: props.top,
                    backgroundColor: props.backColor,
                    color: props.color,
                    width: (props.width) ? props.width : "25rem",
                    height: (props.height) ? props.height : "auto"
                }}>
            <button type={props.type} title={props.link} onClick={props.click} style={{ fontSize: (props.textSize) ? props.textSize : "5rem" }}>
                {props.text}
            </button>
        </div>
    );
}

export const ColoredCards = (props) => {
    return (
        <Zoom left>
            <div className="coloredCard_container"
                style={{
                    backgroundColor: props.color,
                    zIndex: (props.zindex) ? props.zindex : "",
                    width: (props.width) ? props.width : "",
                    height: (props.height) ? props.height : "",
                    position: (props.position) ? props.position : "",
                    top: (props.top) ? props.top : "",
                    right: (props.right) ? props.right : "",
                    left: (props.left) ? props.left : "",
                    bottom: (props.bottom) ? props.bottom : "",
                    boxShadow: (props.shadow) ? props.shadow : ""



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
                <FontAwesomeIcon icon={faTimesCircle} onClick={props.clickToClose} />
            </div>
            <iframe key={props.key} title={props.link} className="frame"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: ".5rem",
                    transition: "all .3s",

                }}
                src={props.link}
            >
                <a href={props.link}>visit this link</a>
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
                            top="6rem"
                            position="relative"
                        />

                    </div>
                </Tilt>
            </div>
        </Tilt>

    )
}

//  Poster for Blog
export const Poster = (props) => {
    return (
        <div className="blogPoster"
            style={{
                width: props.width,
                height: props.height,
                boxShadow: (props.isMobile) ? props.shadow : ""
            }}>
            <a href="#blog">
                <img alt={"this"} src={postImage} />
                <h2 className="post_title">Internet <span>of Today</span></h2>
                <p className="post_date"> feb - 12 - 2020</p>
                <p className="latest_post">latest</p>
            </a>


        </div>
    )
}

// input for form
//input field
export class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }

    typeOfIcon = (this.props.type === "email") ?
        <AlternateEmailIcon style={{ fontSize: 30 }} />
        : (this.props.firstName || this.props.lastName) ?
            <PersonIcon style={{ fontSize: 30 }} />
            : (this.props.phone) ?
                <PhoneIcon style={{ fontSize: 30 }} />
                :
                "";
    componentDidMount() {
        const theId = document.getElementById(`${this.props.id}`);
        const thatIdLabel = document.getElementById(`label_${theId.id}`);
        theId.addEventListener('input', (event) => {
            let newLabel = thatIdLabel.innerText.replace(":", '');
            if (theId.value.length > 0) {
                thatIdLabel.style.top = "-3rem";
                thatIdLabel.style.left = "0rem";
                thatIdLabel.style.fontSize = "2rem";
                thatIdLabel.style.opacity = "1"
                if((theId.value.length >= 0 && theId.value.length <= 1)
                    && (!thatIdLabel.innerHTML.includes(":"))) {
                    thatIdLabel.innerHTML += ":"

                }} else {
                thatIdLabel.style.top = "";
                thatIdLabel.style.left = "";
                thatIdLabel.style.fontSize = "";
                thatIdLabel.style.opacity = "";
                thatIdLabel.innerHTML = newLabel;
            }
        })
    }


    render() {
        return (
            // finish adding props and functinality        
            <div className="labelAndInput">
                <div className="icon">{this.typeOfIcon}</div>
                <input id={this.props.id} type={this.props.type.toLowerCase()} title={this.props.type} />
                <label htmlFor={this.props.id} id={`label_${this.props.id}`}>{this.props.label}</label>
            </div>
        )
    }
}

