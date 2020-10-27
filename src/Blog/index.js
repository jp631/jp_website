import React, { Component } from 'react';
import "./blog.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Bounce from "react-reveal/Bounce";
import { Poster, Buttons, InputField } from "../misc";
import { docRefBlog, docRefEmailLists, storage } from '../fireBase/firebase'
import ArticlePage from './articlePage';

class Blog extends Component {
    constructor() {
        super()
        this.state = {
            arrowPushMenu: false,
            email: '',
            // title: '',
            theImage:'',
            allArticles:[],
            recentArticle: {},
        }
    }

    sideMenuBlog = () => {

        if (window.innerWidth < 1000) {
            this.setState({
                arrowPushMenu: (this.state.arrowPushMenu) ? false : true
            })
        }
    }

    UNSAFE_componentWillUpdate() {
        window.onresize = () => {
            this.setState({
                arrowPushMenu: false
            })
        }

        window.onload = () => {
        }

    }

    UNSAFE_componentWillMount(){
        storage.child('blogPic/comingSoon.jpg').getDownloadURL().then( url => {
            this.setState({
                theImage: url
            })
        }) 

       docRefBlog.limit(1).get().then( dataQuerry => {
        dataQuerry.forEach( m => {
               this.setState({
                   recentArticle: m.data()
               })
           })
       })


       docRefBlog.get().then( dataQuerry => {
           let arc = []
            dataQuerry.forEach( m => {
                arc.push(m.data())
            })
           this.setState({
               allArticles: arc
           })
       })
}

    handleEmail = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

    subscribeEmail = (e) => {
        e.preventDefault();

        docRefEmailLists.doc(this.state.email).get().then(data => {
            if (data.exists) {
                alert('email is in there')
            } else {
                docRefEmailLists.doc(`${this.state.email}`).set({
                    email: this.state.email,
                }).then(() => {
                    alert(`Thanks for signing!`)
                    this.setState(
                       { email: ''}
                    )
                })
                    .catch(error => {
                        alert(error.message)
                    })
            }
        })
    }

    render() {
        return (
            <div className="blog_container" id='blog'>
                <Bounce delay={500}>
                    <h1 className="title"> Blog <span><FontAwesomeIcon icon={faRss} /></span></h1>
                </Bounce>
                <div className="contents_container">
                    <div className="poster_container">
                        <Poster 
                        image = {this.state.theImage}
                        title = {this.state.recentArticle.title}
                        date = {(this.state.recentArticle.date) ? this.state.recentArticle.date.seconds : ''}
                         isMobile={true} shadow="0rem 5rem 10rem 0.5rem black"
                          />
                    </div>
                    <div className="article_list" style={{
                        left: (this.state.arrowPushMenu && (window.innerWidth < 1000)) ? "0rem" : "",
                        opacity: (this.state.arrowPushMenu && (window.innerWidth < 1000)) ? "1" : ""
                    }}>
                        <h1>Recent Blog Posts</h1>
                        <ul>
                            {
                                this.state.allArticles.map((article) => {

                                    return (
                                        <li key={article.title}>{
                                            (article.title.length > 19) ? `${article.title.slice(0, 20)}...` : article.title // slice the texts that has more than the 19 character
                                        }
                                        </li>
                                    )

                                })
                            }
                            <div></div>
                        </ul>
                    </div>

                    <div className="doubleArrow" style={{ transform: (this.state.arrowPushMenu) ? "translateX(-5rem)" : "translateX(-10rem)" }} onClick={this.sideMenuBlog}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} style={{ transform: (this.state.arrowPushMenu) ? "rotateY(180deg)" : "rotateY(0deg)" }} />
                    </div>
                    <div className="visit">
                        <Buttons
                            link={"#home"}
                            text="visit"
                            backColor="var(--second_color)"
                            width="10rem"
                            textSize="2rem"
                            color="var(--first_color)"
                            position="relative" />
                    </div>

                    <div className="signIn_emailList_message">
                        <p>
                            Sign up to my email list to know about my latest blog post and to receive update from me.
                    </p>

                        <form onSubmit={this.subscribeEmail} id="subscribe_form">
                            <InputField type="email" onChange={this.handleEmail} label="Email" value={this.state.email} id="emailMe" title="email" />
                            <Buttons type="submit" backColor="var(--second_color)" text="Subscribe" width="12rem" height="4rem" textSize="2.5rem" position="relative" top="2rem" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;