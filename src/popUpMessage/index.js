import React, {useState} from 'react';
import './index.scss';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const PopUpMessage = () => {
    const [isShowing, setIsShowing] = useState(true);


    let showing =()=>{
        setIsShowing(false)
    }

    return (
        <div className='pop_message_container' style={ { display: (isShowing) ? 'flex' : 'none' }}>
            <h1>This website is currently under Construction </h1>
            <p>
                Hi visitor, <br />
                Thank you for visiting my website. My name is Jerry Prophete, and I am a web developer. I have been building this website from scratch using React, and Sass. <span className='alert'>This popup may be very annoying for some people, but I purposely build this popup to behave the way it is behaving right now because I want my visitor to be fully aware that the website is under construction, and its contents are charging.  </span>
            </p>

            <p>
                If you ever in need for a website, or you already have a website and want me to <span className='emphasis'> review </span>  or <span className='emphasis'> build </span>it for you, please contact me so we can talk about it. Since my website is <span className='emphasis'> not fully completed </span>, I decided to give out a special price for anyone who visited my website and tell me what they think of it. 
                All you have to do is <span > <a href='#contact' onClick={showing}> contact </a> </span> me with one sentence of what you think of my website, and with a brief explanation of what you need for your website, and I will reach out to you. 
            </p>

            <p><span className='alert'>click the button below to close this popup, and refresh the page to see it again</span></p>

            <p>Thanks again for visiting my website</p>

            <button className='okButton' onClick={showing}>Got it</button>
        </div>
    );
};

export default PopUpMessage;