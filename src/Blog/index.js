import React, { Component } from 'react';
import "./blog.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Bounce from "react-reveal/Bounce";
import {Poster, Buttons, InputField} from "../misc";


class Blog extends Component {
    constructor(){
        super()
        this.state = {
            arrowPushMenu: false,
            blog: [
                {
                    title: "The earth and everyone living in it",
                    image: "",
                    date: "sept 12, 2020",
                    text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                },
                {
                    title: "jimbo in lorem",
                    image: "",
                    date: "Jan 12, 2021",
                    text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                },
                {
                    title: "Jumbo this is just random",
                    image: "",
                    date: "March 12, 2020",
                    text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                },
                {
                    title: "The 7 and rainbow",
                    image: "",
                    date: "Jan 12, 2021",
                    text: "ok me is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's d standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
                }
            ]
        }
    }

        sideMenuBlog = ()=> {

            if(window.innerWidth < 1000){
                this.setState({
                    arrowPushMenu: (this.state.arrowPushMenu) ? false :  true
                })
            }
            console.log(`after blog ${this.state.arrowPushMenu}`)

        }

  componentWillUpdate(){
    window.onresize =()=>{
            this.setState({
                arrowPushMenu: false
            })
        }

    window.onload =()=>{
    }
    
  }

    render() {
        return (
            <div className="blog_container">
                <Bounce delay={500}>
                <h1 className="title"> Blog <span><FontAwesomeIcon icon={faRss} /></span></h1>
                </Bounce>
                <div className="contents_container">
                    <div className="poster_container">
                    <Poster isMobile={true} shadow="0rem 5rem 10rem 0.5rem black"/>
                    </div>
                    <div className="article_list" style={{
                         left: (this.state.arrowPushMenu && (window.innerWidth < 1000)) ? "0rem" : "",
                        opacity: (this.state.arrowPushMenu && (window.innerWidth < 1000)) ? "1" : ""
                                }}>
                        <ul>
                         <h4>Recent Blog Posts</h4>
                          {
                          this.state.blog.map((article)=>{
                              
                              return(
                                <li>{
                                    ( article.title.length > 19) ? `${article.title.slice(0, 20)}...` :  article.title // slice the texts that has more than the 19 character
                                   }
                                </li>
                              )
                              
                          })
                            }
                            <div></div>
                        </ul>
                    </div>

                    <div className="doubleArrow" style={{ transform: (this.state.arrowPushMenu) ? "translateX(-5rem)" : "translateX(-10rem)"}} onClick={this.sideMenuBlog}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} style={{transform: (this.state.arrowPushMenu) ? "rotateY(0deg)" : "rotateY(180deg)"}} />
                    </div>
                    <div className="visit">
                        <Buttons    
                            link={"#home"}
                            text="visit"
                            backColor="var(--second_color)"
                            width="10rem"
                            textSize="2rem"
                            color="var(--first_color)"
                            position="relative"/>
                    </div>

                    <div className="signIn_emailList_message">
                    <p>
                          Sign up to my email list to know about my latest blog post and to receive update from me. 
                    </p>

                    <form>
                         <InputField type="email" label="Email" id="emailMe"/>
                         {/* <Buttons type="submit" backColor="var(--second_color)" text="Subscribe" width="12rem" height="4rem" textSize="2.5rem" position="relative" top="2rem"/> */}
                    </form>
                    </div>
                </div>
                {console.log("blog is render")}
            </div>
        );
    }
}

export default Blog;