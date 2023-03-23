import React, { useContext } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../utils/context";
// import "./Newsletter.scss";

const Newsletter = () => {
    const navigate = useNavigate()
    const {
        instaURL,
        twitterURL,
        fbURL,
        linkdinURL
    } = useContext(Context)

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button
                        onClick={() => navigate('/')}
                    >Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <a href={linkdinURL} target="_blank">
                            <FaLinkedinIn size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href={fbURL} target="_blank">
                            <FaFacebookF size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href={twitterURL} target="_blank">
                            <FaTwitter size={14} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href={instaURL} target="_blank">
                            <FaInstagram size={14} />
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
