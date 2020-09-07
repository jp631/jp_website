import React, { Component } from 'react';
import Menu from "./menu";
import Home from "./home";
import About from "./about";
import Porfolio from "./portfolio";
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
          trackPage: "home"
      }
  }

  checkIfMobile = ()=>{
    if(window.innerWidth < 1000 || this.state.scroll_position > 10) {
      this.setState({
        isMobile: true,
      });
  }
}

checkScrollLevel = ()=>{
  this.setState({
    scroll_position: window.scrollY,
  })
}

checkTrackPage = ()=> {
  if(this.state.scroll_position < 516){
    this.setState({
      trackPage: "home"
    })} else if(this.state.scroll_position > 516 && this.state.scroll_position < 1500){
    this.setState({
      trackPage: "about"
    })
    console.log(`about ${this.state.scroll_position}`);
  }else  if(this.state.scroll_position > 1500 && this.state.scroll_position < 2500){
    this.setState({
      trackPage: "portfolio"
    })
    console.log(`portfolio ${this.state.scroll_position}`);
  }
}

  componentDidMount = ()=>{
   
    window.onload = ()=>{
      this.setState({
        device: document.querySelector(".app"),
      });
      console.log(this.state.device);
      this.checkIfMobile();
    }

    window.onscroll = ()=> {
      this.checkScrollLevel();
      this.checkTrackPage();
    console.log(`scroll position ${this.state.scroll_position}`);
    console.log(`device ${this.state.device.scrollTop}`);

    }

   console.log(this.state.scroll_position);
  }


  render() {
    return (
      <div className="app">
        <Logo />
          <div className="menu_container">
            <Menu isMobile={this.state.isMobile} scroll = {this.state.scroll_position}/>
          </div>

        <Home />
        <About appState = {this.state.trackPage} />
        <Porfolio />
      </div>
    );
  }
}

export default App;


//later use
/**
 *   constructor (props) {
    super();
    this.state ={
      style: {
        width: `${window.innerWidth}px`,
        backgroundColor: 'blue'
      }
    }
  }

  componentDidMount(){
    const resize = ()=> {
      this.setState(
       { style: {
          width: `${window.innerWidth}px`,
          backgroundColor: 'red'
        }
      }
      );
    }

    window.onresize = resize;
  }

 */