import imageUrlBuilder from '@sanity/image-url'
import React from "react";
import { useNavigate } from "react-router-dom";
import Client from "../../../utils/Client";
// import "./Product.scss";

const builder = imageUrlBuilder(Client)

export function urlFor(source) {
    return builder.image(source)
}

const Product = ({ data, id }) => {

    const navigate = useNavigate();

    return (
        <div
            className="product-card"
            onClick={() => navigate(`/product/` + data?.slug?.current)}
        >
            <div className="thumbnail">
                <img
                    src={urlFor(data.image[0]).url()}
                    alt=""
                />
            </div>
            <div className="prod-details">
                <span className="name">{data?.name}</span>
                <span className="price">$ {data?.price}</span>
            </div>
        </div>
    );
};

export default Product;
