import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowAltCircleDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard, Showframe, ColoredCards } from "../misc";
import "./portfolio.scss";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";


class Porfolio extends Component {
    constructor() {
        super();
        this.state = {
            showFrames: false,
            dispplayLink: "",
            projects: [
                {
                    name: "Trillio",
                    image: "trillio",
                    link: "https://jp631.github.io/trillo/",
                    text: "This hotel website was built during my academic school year, and it was build using html and sass."
                },
                {
                    name: "Nexter",
                    image: "nexter",
                    link: "https://jp631.github.io/myNexter/",
                    text: "This website is a realtor website, and it was build with html and css. It was a great experience building this website"

                },
                {
                    name: "Paint",
                    image: "paint",
                    link: "https://jp631.github.io/Paint/",
                    text: "Who would not like to build a paint application. User can use many diffrent brushes. Please check it out"
                },
                {
                    name: "My Natour",
                    image: "natour",
                    link: "https://jp631.github.io/myNatours/",
                    text: "This is an eCommerce website for hiking.It is a great outdoor activities that anyone should enjoy."
                }
            ]

        }
    }

    componentWillReceiveProps(){
    }

    openCloseFrame = (link) => {
        this.setState({
            showFrames: (this.state.showFrames) ? false : true,
            dispplayLink: (link) ? link : ""

        })
    }

    displayframe =() => {
        return (
            <div>
                    <Showframe
                        link={this.state.dispplayLink}
                        display= {this.state.showFrames}
                        clickToClose={this.openCloseFrame}
                     />
            </div>

        )
    }

    render() {
        return (
            <div className="portfolio" id="portfolio">
                <Bounce top cascade>
                    <h1 className="title">Porfolio <span><FontAwesomeIcon icon={faBriefcase} /></span></h1>
                </Bounce>
                <Bounce>
                    <p className="p1"> Below are the four most recent projects that I have worked on during my academic school year. Please be aware that I did not come up with those desings myself. Please click on more to see those designs that I build myself. If you click on "See it" button, a window will popup to show you the project. The window can be close by clicking on the yellow x above the window.</p>
                    <ColoredCards           
                            position="absolute"
                            top="-17rem"
                            right="-55rem"
                            width="20rem"
                            color="var(--third_color)"
                    />
                         <ColoredCards           
                            position="absolute"
                            top="-17rem"
                            left="-55rem"
                            width="20rem"
                            color="var(--third_color)"
                    />
                </Bounce>
                <div className="projectCard_holder">
                    <Zoom right delay={500}>

                        {
                            this.state.projects.map((project, index) => {
                                return (
                                    <div key={project.name}>
                                        <ProjectCard
                                            name={project.name}
                                            image={require(`../images/projects/${project.image}.png`)}
                                            link={project.link}
                                            text={project.text}
                                            click={
                                                () => {
                                                    this.openCloseFrame(project.link)
                                                }
                                            }
                                        />
                                    </div>

                                )
                            })

                        }

                    </Zoom>
                </div>
                <Zoom delay={500}>
                    <a href="#home" className="seeMore">
                        <p> See More </p>  <FontAwesomeIcon icon={faArrowAltCircleDown} />
                    </a>
                </Zoom>
                    <div style={{position: "fixed", width: "60%", left: "50%", zIndex: "9000"}}>
                    { this.displayframe()}
                    </div>

            </div>
        );
    }
};

export default Porfolio;