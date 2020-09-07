import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { ColoredCircle } from "../misc";
import "./index.scss";
import Roll from "react-reveal/Roll";


class Menu extends Component {
        constructor(props){
            super(props);
            this.state = {
                isMenuVisible: false,
                isMobile: props.isMobile,
            }
        }

        toggleMenu = ()=> {
            this.setState({
                isMenuVisible: (!this.state.isMenuVisible) ? true : false
            })
    }

    componentDidMount(){
      
    }

    render() {
        return (
            <menu className="menu"
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
                <a href="#home" className="menuIcons">
                    <FontAwesomeIcon icon={faHome} />
                </a>
                <a href="#about" className="menuIcons">
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="#portfolio" className="menuIcons">
                    <FontAwesomeIcon icon={faBriefcase} />
                </a>
                <a href="#contact" className="menuIcons">
                    <FontAwesomeIcon icon={faIdCard} />
                </a>
                <a href="#blog" className="menuIcons">
                    <FontAwesomeIcon icon={faRss} />
                </a>
                    </Roll>                        
            </menu>
        );
    }
}

export default Menu;