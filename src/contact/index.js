import React, { useState } from 'react';
import { InputField, Buttons, SocialLogos } from "../misc";

import MessageIcon from '@material-ui/icons/Message';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./contact.scss";

import { detabase, docRefContact } from '../fireBase/firebase';

const Contact = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");

    const [loader, setLoader] = useState(false)

    const onFirstNameChange = (e) => {
        e.preventDefault()
        setFirstName(e.target.value)
    }
    const onLastNameChange = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
    }
    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const onTextAreaChange = (e) => {
        e.preventDefault()
        setTextArea(e.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault();
        setLoader(true)

        docRefContact.doc(email).get().then(data => {
            if (data.exists) {
                alert('email is already register')
            } else {
                docRefContact.doc(`${email}`).set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    textArea: textArea
                }).then(() => {
                        alert(`message sent! ${firstName}`)
                        //reset field
                        setFirstName('');
                        setLastName('');
                        setEmail('');
                        setTextArea('');
                        setLoader(false)
                    })
                    .catch(error => {
                        setLoader(false)
                        alert(error.message)
                    })
            }
        })
        }


        return (
            <div className="mainContact_Container" id='contact'>
                <h1 className="title">Contact</h1>
                <div className="contact_profile">
                    <div className="picture_holder">
                        <img srcSet={`
                                    ${require(`../images/logo/standingProfile.jpg`)} 100w,
                                    ${require(`../images/logo/standingProfile.jpg`)} 500w,
                                    ${require(`../images/logo/standingProfile.jpg`)}, 1000w`}
                            sizes="(max-width: 900px) 100vw, (max-width: 600px) 30vw, 300px"
                            alt="jerry prophete"
                            src={require(`../images/logo/standingProfile.jpg`)}

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
                    <p className="contact_message">Weather you are ready or not, we can still talk  for 30 minutes to see what you need to take your website idea to the next level, or to see if I am really the guy&#128526;.</p>
                    <form id="contact_form" onSubmit={submitForm}>
                        <InputField onChange={onFirstNameChange} value={firstName} id="contact_firstName" type="text" title="First Name" label="First Name" />
                        <InputField onChange={onLastNameChange} value={lastName} id="contact_lastName" type="text" title="Last Name" label="Last Name" />
                        <InputField onChange={onEmailChange} value={email} id="contact_email" type="email" title="email" label="Email" />
                        <label className="textAreaLabel" htmlFor="thattext">Message:</label>
                        <textarea onChange={onTextAreaChange} value={textArea} id="thattext" placeholder="text..." style={{ border: "none", outline: 'none', backgroundColor: "var(--second_color)", borderRadius: ".3rem", marginBottom: "2rem", width: "100%", height: "20rem" }}>
                        </textarea>
                        <div className="btn">
                            <Buttons backColor={loader ? 'darkgray' : "var(--second_color)"} color="var(--fifth_color)" type="submit" textSize="2.5rem" text="let's us talk" width="75%" height="4rem" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default Contact;


