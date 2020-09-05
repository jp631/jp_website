import React, { Component } from 'react';
import "./style.scss";
import profilePhoto from "../images/logo/man.jpg";
import { SocialLogos, Buttons, ColoredCards } from "../misc";
import Particles from "../particles";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";


class Home extends Component {
constructor() {
    super();
    this.state = {
        theWidth: window.innerWidth,
         scroll: document.querySelector('#root')

    }
}

     checkSize = ()=> {
         this.setState({
             
            theWidth: window.innerWidth
         
        });
    }   

    chekScrol = (e)=>{
        console.log(e.target.scrollTop)
    }

componentDidMount(){

    window.onresize = this.checkSize;
    this.state.scroll.onscroll = this.chekScrol;
    
}

    render(){
    return (
        <div className="home-container">
            <div className="particlesAnimation">
                 <Particles />
            </div>
            <div className="home-colorSepator" id="tsparticles"></div>
            <div className="home">
                <div className="home-profilePhoto_container">
                    <div className="image">
                        <a href="www.jerryprophete.com" alt="jerry prophete">
                        <img src={profilePhoto} alt="jerry's pic" title="Jerry Prophete" />
                        </a>
                    </div>
                </div>

                <div className="home-socialMedia">
                    <Zoom delay="1000">
                        <SocialLogos isTrue={true} />
                    </Zoom>
                </div>
                
                <div className="home-para">
                    <Bounce right cascade>
                    <p>
                        <span className="p1">Hey There!</span>
                        <span className="p2">I am Jerry Prophete.</span>
                        <span className="p3">I can build your website.</span>
                    </p>
                    </Bounce>

                </div>
                <div className="theButton">
                    <Buttons
                        backColor=  {(this.state.theWidth >= 1000) ? "var(--second_color)" : "var(--sixth_color)"}
                        text="Hire ME"
                        color="var(--first_color)"
                        link="b.com"
                    />
                </div>

                <div className="colored_section">
                    <ColoredCards color="var(--first_color)" />
                    <ColoredCards color="var(--seventh_color)" />
                    <ColoredCards color="var(--fifth_color)" />
                </div>
            </div>
        </div>
    );
};
}

export default Home;