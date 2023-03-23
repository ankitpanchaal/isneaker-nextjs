import React, { useContext } from "react";
// import "./Footer.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaLinkedinIn,
} from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
const Footer = () => {

    const navigate = useNavigate()

    const {
        instaURL,
        twitterURL,
        fbURL,
        linkdinURL
    } = useContext(Context)

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Welcome to our website! We are passionate about shoes and sneakers, and we want to share that passion with you. Our collection includes a wide variety of styles, from classic sneakers to trendy athletic shoes.

                        At our core, we believe that shoes aren't just accessories - they are a reflection of your personality and style. That's why we offer such a diverse range of shoes, so that you can find the perfect pair to express yourself.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <a href={linkdinURL} target="_blank">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href={fbURL} target="_blank">
                            <FaFacebookF size={14} />
                        </a>
                        <a href={twitterURL} target="_blank">
                            <FaTwitter size={14} />
                        </a>
                        <a href={instaURL} target="_blank">
                            <FaInstagram size={14} />
                        </a>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@jsdev.com</div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div> */}
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text" onClick={() => navigate('/')}>Home</span>
                    <span className="text" onClick={() => navigate('/about')}>About</span>
                    <span className="text" onClick={() => navigate('/PP')}>Privacy Policy</span>
                    <span className="text" onClick={() => navigate('/Return')}>Returns</span>
                    <span className="text" onClick={() => navigate('/TC')}>Terms & Conditions</span>
                    <a href={instaURL} target="_blank">
                        <span className="text">Contact Us</span>
                    </a>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        I-SNEAKERS 2022
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
