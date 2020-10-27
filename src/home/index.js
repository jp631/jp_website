import React, { Component } from 'react';
import "./style.scss";
import { SocialLogos, Buttons, ColoredCards } from "../misc";
import Particles from "../particles";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            theWidth: window.innerWidth,
        }
    }

    scroll = ()=>{
        window.location.href='#contact'
    }

    checkSize = () => {
        this.setState({
            theWidth: window.innerWidth

        });
    }
    UNSAFE_componentWillUpdate() {
        window.onresize = this.checkSize;
    }
    componentDidUpdate() {
        window.onresize = this.checkSize;
    }

    render() {
        return (
            <div className="home-container" id="home">
                <div className="particlesAnimation">
                    <Particles />
                </div>
                <div className="home-colorSepator" id="tsparticles"></div>
                <div className="home">
                    <div className="home-profilePhoto_container">
                        <div className="image">
                            <a href="www.jerryprophete.com" alt="jerry prophete">
                                <img srcSet={`
                                    ${require(`../images/logo/jpProfile.jpg`)} 250w,
                                    ${require(`../images/logo/jpProfile.jpg`)} 500w`}
                                sizes="(max-width: 900px) 100vw, (max-width: 600px) 30vw, 300px"
                                alt="Jerry Prophete"
                                title="jerry prophete"
                                src={require(`../images/logo/jpProfile.jpg`)}

                            />
                            </a>
                        </div>
                    </div>

                    <div className="home-socialMedia">
                        <Zoom delay={1000}>
                            <SocialLogos show={true} facebook={true} instagram={true} twitter={true} youtube={true} linkedIn={true} />
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
                            backColor={(this.state.theWidth >= 1000) ? "var(--second_color)" : "var(--sixth_color)"}
                            text="Hire ME"
                            color="var(--first_color)"
                            link=""
                            click={this.scroll}
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