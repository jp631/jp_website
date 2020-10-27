import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { ColoredCircle } from "../misc";
import "./index.scss";
import Roll from "react-reveal/Roll";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
            scrollNum: 0,
            scrollOn: false,
            isMobileMenuVisible: false,
            style: {
                mobileStyle: {
                    menu: "menu_mobile",
                    circle: "addCircleMobile"
                },
                desktopStyle: {
                    menu: "menu_desktop"
                }
            }
        }
    }

    toggleMenu = () => {
        this.setState({
            isMobileMenuVisible: (!this.state.isMobileMenuVisible) ? true : false,
        })
    }
    //close the mobile menu on some other ocasion like a click
    closeMobileMenu = () => {
        setTimeout(() => {
            this.setState({
                isMobileMenuVisible: false,
            })
        }, 300)
    }

    //to close the menu when sroll is at the top
    closeMenuOnScroll = () => {
        if (!this.state.scrollOn && !this.state.isMobile) {
            this.setState({
                isMobileMenuVisible: false,
                isDesktopMenu: false,
            })
        }
    }

    checkScroll = () => {
        this.setState({
            scrollNum: window.scrollY,
            scrollOn: (window.scrollY > 400) ? true : false
        })
    }

    checkIfMobile = () => {
        this.setState(
            {
                isMobile: (window.innerWidth < 1000) ? true : false
            }
        )
    }

    USAFE_componentWillMount() {
        this.checkIfMobile();
        this.checkScroll();
    }

    USAFE_componentWillUpdate = () => {
        window.onload = () => {
            this.checkIfMobile();
            this.checkScroll();
        }
        window.onscroll = () => {
            this.checkScroll();
            this.closeMenuOnScroll();
        }
        window.onresize = () => {
            this.checkIfMobile();
            this.checkScroll();
        }
    }

    componentDidUpdate = () => {
        window.onload = () => {
            this.checkIfMobile();
            this.checkScroll();
        }
        window.onscroll = () => {
            this.checkScroll();
            this.closeMenuOnScroll();
        }
        window.onresize = () => {
            this.checkIfMobile();
            this.checkScroll();
        }
    }

    render() {
        const { isMobileMenuVisible, isMobile, style, scrollOn } = this.state;
        return (
            <Router>
                <menu className={`menu ${(isMobile || (!isMobile && scrollOn)) ? style.mobileStyle.menu : style.desktopStyle.menu}`}
                    style={{
                        width: "15rem",
                        right: ((isMobileMenuVisible && isMobile) || (scrollOn && isMobileMenuVisible)) ? "0" : "-25rem",
                        transition: ((isMobile) || (!isMobile && scrollOn)) ? "all .5s cubic-bezier(.26,1.45,.87,-0.49), top 0s" : "all .5s cubic-bezier(.26,1.45,.87,-0.49), top 0s, background .0s",
                        backgroundColor: ((isMobile) || (!isMobile && scrollOn)) ? "var(--fifth_color)" : "transparent"
                    }}

                >

                    <Roll left cascade>
                        <a href="#home" className="menuIcons" onClick={() => { this.closeMobileMenu() }}>
                            <FontAwesomeIcon icon={faHome} />
                        </a>
                        <a href="#about" className="menuIcons" onClick={this.closeMobileMenu}>
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <a href="#portfolio" className="menuIcons" onClick={this.closeMobileMenu}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                        <a href='#blog' className="menuIcons" onClick={this.closeMobileMenu}>
                            <FontAwesomeIcon icon={faRss} />
                        </a>
                        <a href="#contact" className="menuIcons" onClick={this.closeMobileMenu}>
                            <FontAwesomeIcon icon={faIdCard} />
                        </a>
                    </Roll>
                </menu>
                <div className={(isMobile || scrollOn) ? this.state.style.mobileStyle.circle : ""}
                    style={{
                        display: (isMobile || scrollOn) ? "block" : "none",
                        right: (isMobileMenuVisible) ? "15.5rem" : "0"
                    }}
                >
                    <ColoredCircle />
                    {/** that div cover the 3 circle and I use it to do the click */}
                    <div className="circle_cover" onClick={this.toggleMenu}>

                    </div>
                </div>
            </Router>
        );
    }
}

export default Menu;