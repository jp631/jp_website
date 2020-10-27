import React from 'react';
import "./footer.scss";


const Footer = (props) => {
    return (
        <footer className="footer_container">
            <p> Copyright&#169;  2020 Jerryprophete. All right reserved</p>
            <menu>
                <ul>
                    <li>
                        <a href="/">
                            Resume
                    </a>

                    </li>
                    <li>
                        <a href="/">
                            FAQ
                    </a>

                    </li>
                    <li>
                        <a href="/">
                            Terms
                    </a>

                    </li>
                </ul>
            </menu>


        </footer>
    );
};

export default Footer;