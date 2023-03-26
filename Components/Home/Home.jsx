import React, { useEffect, useContext, useState } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";
import Client from "../../utils/Client";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    const [bannerData, setBannerData] = useState('')

    useEffect(() => {
        Client.fetch(
            `
            *[_type == "product"] {
                _id,
                name,
                image,
                price,
                rating,
                isPopular,
                slug,
              }
            `
        ).then(res => setProducts(res))
        Client.fetch(
            `*[_type == "category"]`
        ).then(res => setCategories(res))
        Client.fetch(
            `*[_type == "banner"]`
        ).then(res => setBannerData(res))
    }, []);
    // console.log(bannerData);

    return (
        <div>
            <Banner bannerData={bannerData} />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
