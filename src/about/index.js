import React from 'react';
import "./styleAbout.scss";
import ParagraphBlock from "./paragraphBlock";
import { YellowCardNormal, YellowCardShift } from "../misc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTools, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass, faHtml5, faJs, faWordpress, faNode } from '@fortawesome/free-brands-svg-icons'
import { ColoredCards } from "../misc";
import Zoom from "react-reveal/Zoom";

const About = () => {
    const Allbrands = [faReact,faSass, faHtml5, faJs, faWordpress, faNode];
    

    return (
        <div className="about_container" id="about">
             <h1 className="am"><span>Am I</span> the Guy?</h1>
                <div className="paragraphs_container">
                   <ParagraphBlock 
                        title = "About Me"
                        icon = {faUser}
                        text = "
                            I am  Jerry Prophete, the web developer that you are looking for. 
                            I have worked on many different projects, which have given me the 
                            experience that can solve your website problems."
                   />
                </div>

                <div className="skills_container">
                   <ParagraphBlock 
                        title = "Skills"
                        icon = {faTools}
                        text = "I am currently focusing on those tools listed below to build the websites.
                         Those tools are currently among of those that the web development industry is asking for. 
                         If you do need a website 
                        they are the tools that I will use to build your website."
                        brands={Allbrands}
                   />
                </div>

                <div className="development_container">
                   <ParagraphBlock 
                        title = "Development"
                        icon = {faLayerGroup}
                        text = {
                            ['Responsive Design', 
                            "Great web performance and SEO",
                            "Modern, Interactive & User-friendly Layout ",
                            "Maintainable and scalable code ready for growth"
                            ]
                        }
                   />
                </div>
                   
                <div className="colored_section" style={{top: "5rem"}}>   
                    <ColoredCards color="var(--first_color)" />
                    <ColoredCards color="var(--seventh_color)" />
                    <ColoredCards color="var(--fifth_color)" />
                </div>
            
                 <div className="yellowCardNormal" >
                     <YellowCardNormal />
                   </div>
                   
                   <div className="yellowCardShift">
                   <YellowCardShift />
                  </div> 
                   
                
        </div>
    );
};

export default About;