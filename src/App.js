import React, { Component } from 'react';
import Menu from "./menu";
import Home from "./home";
import About from "./about";
import Porfolio from "./portfolio";
import Blog from "./Blog";
import { Logo } from "./misc";
import "./App.scss";
/**
 * let theWidth = window.innerWidth;
 * style={{width: `${theWidth}px`, minWidth: "400px", height: "auto"}}
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      device: window.screenTop,
      isMobile: false,
      scroll_position: window.scrollY,
      trackPage: "home",
    }
  }

  checkIfMobile = () => {
    if (window.innerWidth < 1000) {
      this.setState({
        isMobile: true,
      });
    }
  }

  checkScrollLevel = () => {
    this.setState({
      scroll_position: window.scrollY,
    })
  }

  checkTrackPage = () => {
    if (this.state.scroll_position < 516) {
      this.setState({
        trackPage: "home"
      })
    } else if (this.state.scroll_position > 516 && this.state.scroll_position < 1500) {
      this.setState({
        trackPage: "about"
      })
    } else if (this.state.scroll_position > 1500 && this.state.scroll_position < 2500) {
      this.setState({
        trackPage: "portfolio"
      })
    }
  }

  componentDidMount = () => {
    this.checkIfMobile();
    window.onload = () => {
      this.setState({
        device: document.querySelector(".app"),
      });
      this.checkIfMobile();
      console.log(`app mobile; ${this.state.isMobile}`);
    }

    window.onresize = () => {
      this.checkIfMobile();
    }

    window.onscroll = () => {
      this.checkScrollLevel();
      this.checkTrackPage();
    }

  }


  render() {
    return (
      <div className="app">
        <Logo />
        <Home />
        <About appState={this.state.trackPage} />
        <Porfolio />
        <Blog mobileState={this.state.isMobile}/>

        <div className="menu_container">
          <Menu isMobile={this.state.isMobile} scroll={this.state.scroll_position} />
        </div>
        {console.log("app is render")}
      </div>
    );
  }
}

export default App;
