import React, { useEffect, useContext, useState } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";
import Client from "../../utils/Client";
import { SyncLoader } from "react-spinners";

const Home = () => {
    const [loading, setLoading] = useState(false)
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    const [bannerData, setBannerData] = useState('')

    useEffect(() => {
        setLoading(true);
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
        setLoading(false);
    }, []);
    // console.log(bannerData);

    return (
        loading ?
            <div style={{
                display: 'flex',
                height: 600,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <SyncLoader
                    color="#8e2de2"
                />
            </div>
            :
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
