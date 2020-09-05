import React, { Component } from 'react';
import Menu from "./menu";
import Home from "./home";
import About from "./about";
import { Logo } from "./misc";
import "./App.scss";
/**
 * let theWidth = window.innerWidth;
 * style={{width: `${theWidth}px`, minWidth: "400px", height: "auto"}}
 */

class App extends Component {

  render() {
    return (
      <div className="app">
        <Logo />
          <div className="menu_container">
            <Menu />
          </div>

        <Home />
        <About />
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