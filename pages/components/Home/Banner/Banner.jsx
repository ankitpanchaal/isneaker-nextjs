import React from "react";
// import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";
import { urlFor } from "../../Products/Product/Product";

const Banner = ({ bannerData }) => {
    return (
        !bannerData ? null :
            <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>{bannerData?.[0]?.title}</h1>
                        <p>
                            {bannerData?.[0]?.desc}
                        </p>
                        <div className="ctas">
                            {/* <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div> */}
                        </div>
                    </div>
                    <img className="banner-img" src={urlFor(bannerData?.[0]?.image).url()} />
                </div>
            </div>
    );
};

export default Banner;
