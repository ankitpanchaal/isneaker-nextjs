import Link from "next/link";
import React, { useContext } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { Context } from "../../../utils/context";


const Newsletter = () => {
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
                    <Link href={'/'} className='Link' >
                        <button
                        >Subscribe</button>
                    </Link>
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
