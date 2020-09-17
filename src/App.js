import React, { Suspense, Component } from 'react';
import Menu from "./menu";
import { Logo, LoaderSpinner } from "./misc";
import "./App.scss";
import ErrorBoundary from "./ErrorHandler"

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
      
    }

    window.onresize = () => {
      this.checkIfMobile();
    }

    window.onscroll = () => {
      this.checkScrollLevel();
      this.checkTrackPage();
    }

  }

  componentWillUnmount = () => {
    this.checkIfMobile();

    window.onload = () => {
      this.setState({
        device: document.querySelector(".app"),
      });
      this.checkIfMobile();
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
    const Home = React.lazy(() => import('./home'));
    const About = React.lazy(() => import('./about'));
    const Portfolio = React.lazy(() => import('./portfolio'));
    const Blog = React.lazy(() => import('./Blog'));
    const Contact = React.lazy(() => import('./contact'));
    const Footer = React.lazy(() => import('./footer'));


    return (
      <div className="app">
            <ErrorBoundary>
              <Logo />
              <Suspense fallback={<LoaderSpinner />}>
                <Home />
                <About appState={this.state.trackPage} />
                <Portfolio />
                <Blog mobileState={this.state.isMobile} />
                <Contact />
                <Footer />
              </Suspense>
               <div className="menu_container">
                  <Menu isMobile={this.state.isMobile} scroll={this.state.scroll_position} />
                </div>
            </ErrorBoundary>
      </div>
    );
  }
}

export default App;
