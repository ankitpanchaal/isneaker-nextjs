import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../../utils/Client";
import Products from "../Products/Products";
// import "./Category.scss";

const Category = () => {
    const [data, setData] = useState()
    const { id } = useParams();

    useEffect(() => {
        Client
            .fetch(
                `
                *[_type == "product" && references(*[_type == "category" && name == '${id}']._id)] {
                    _id,
                    name,
                    image,
                    price,
                    rating,
                    isPopular,
                    slug,
                  }
                `
            )
            .then((data) => setData(data))
            .catch(console.error);
    }, [id]);


    return (
        data &&
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        id
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
