import { useEffect, useState } from "react";
import Products from "../../Components/Products/Products";
import { useRouter } from "next/router";
import Client from "@/utils/Client";

const Category = () => {
    const [data, setData] = useState()

    const router = useRouter();
    const id = router.query.Category

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
