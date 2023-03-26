import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import React from "react";
import Client from "../../../utils/Client";

const builder = imageUrlBuilder(Client)

export function urlFor(source) {
    return builder.image(source)
}

const Product = ({ data, id }) => {

    let slug = data?.slug?.current

    return (
        <div
            className="product-card"
        >
            <Link href={`/SingleProduct/${slug}`} as={`/SingleProduct/${slug}`} className='Link' >
                <div className="thumbnail">
                    <img
                        src={urlFor(data.image[0]).url()}
                        alt=""
                    />
                </div>
                <div className="prod-details">

                    <span className="name">
                        {data?.name}
                    </span>
                    <span className="price">$ {data?.price}</span>
                </div>
            </Link>
        </div>
    );
};

export default Product;
