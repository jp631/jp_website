import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { ColoredCircle } from "../misc";
import "./index.scss";
import Roll from "react-reveal/Roll";


class Menu extends Component {
        constructor(){
            super();
            this.state = {
                isMenuVisible: false,
                isMobile: false,
            }
        }

        toggleMenu = ()=> {
            this.setState({
                isMenuVisible: (!this.state.isMenuVisible) ? true : false
            })
    }

    checkMobile = ()=> {
        if(window.innerWidth < 1000) {
            this.setState({
                isMobile: true,
            }
            );
        }else{
            this.setState({
                isMobile: false,
            }
            );
        }
    }

    componentDidMount(){
        window.onresize = this.checkMobile;
        window.onload = this.checkMobile;
    }

    render() {
        return (
            <div className="menu"
                style={
                    {
                        display: "flex",
                        flexDirection: (this.state.isMobile && this.state.isMenuVisible) ? "column" : "row",
                         right: (this.state.isMenuVisible) ? "0" : "-35rem",

                    }
                }
            >
                
                <div className="addCircle"
                    style={
                        {
                            right: (this.state.isMenuVisible) ? "20rem" : "0",
                        }
                    }>
                    <ColoredCircle />
                    <div className="circle_cover" onClick={this.toggleMenu}>

                    </div>
                </div>
                <Roll left cascade>
                <a href="a.com" className="menuIcons">
                    <FontAwesomeIcon icon={faHome} />
                </a>
                <a href="a.com" className="menuIcons">
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="a.com" className="menuIcons">
                    <FontAwesomeIcon icon={faBriefcase} />
                </a>
                <a href="a.com" className="menuIcons">
                    <FontAwesomeIcon icon={faIdCard} />
                </a>
                <a href="a.com" className="menuIcons">
                    <FontAwesomeIcon icon={faRss} />
                </a>
                    </Roll>
            </div>
        );
    }
}

export default Menu;