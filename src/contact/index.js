import React, { Component } from 'react';
import { InputField, Buttons, SocialLogos } from "../misc";

import MessageIcon from '@material-ui/icons/Message';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./contact.scss";

class Contact extends Component {
    render() {
        return (
            <div className="mainContact_Container">
                <h1 className="title">Contact</h1>
                <div className="contact_profile">
                    <div className="picture_holder">
                        <img srcSet={`
                                    ${require(`../images/logo/myPictStading_small.webp`)} 100w,
                                    ${require(`../images/logo/myPictStading_medium.webp`)} 500w,
                                    ${require(`../images/logo/myPictStading.webp`)}, 1000w`}
                                sizes="(max-width: 900px) 100vw, (max-width: 600px) 30vw, 300px"
                                alt="jerry prophete"
                                src={require(`../images/logo/myPictStading_medium.jpg`)}

                            />
                    </div>
                    <div className="socialLogos_holder">
                        <SocialLogos show={true} fontSize="3rem" />
                    </div>
                    <div className="info">
                        <p>
                            <a href="mailto:noEmailYet@gmail.com">
                                Send me an email   <MessageIcon style={{ fontSize: "2rem", marginLeft: ".5rem", color: "var(--first_color)" }} /></a>
                            <span>Orlando, FL <LocationOnIcon style={{ fontSize: "2rem", marginLeft: ".5rem", transform: "rotate(20deg)", color: "var(--first_color)" }} /></span>
                        </p>
                    </div>
                </div>
                <div className="form_container">
                    <p className="contact_message">Weather you are ready or not, we can still talk  for 30 minutes to see what you need to take your website idea to the next level, or to see if I am really the guy. </p>
                    <form id="contact_form">
                        <InputField id="contact_firstName" type="text" title="First Name" label="First Name" />
                        <InputField id="contact_lastName" type="text" title="Last Name" label="Last Name" />
                        <InputField id="contact_email" type="email" title="email" label="Email" />
                        <label className="textAreaLabel" for="thattext">Message:</label>
                        <textarea id="thattext" placeholder="text..." style={{ border: "none", backgroundColor: "var(--second_color)", borderRadius: ".3rem", marginBottom: "2rem", width: "100%", height: "20rem" }}>
                        </textarea>
                        <div className="btn">
                            <Buttons backColor="var(--second_color)" color="var(--fifth_color)" type="submit" textSize="2.5rem" text="let's us talk" width="75%" height="4rem" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;


