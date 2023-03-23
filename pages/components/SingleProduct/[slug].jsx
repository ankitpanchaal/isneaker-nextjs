import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
// import "./SingleProduct.scss";
import Client from "../../utils/Client";
import { urlFor } from "../Products/Product/Product";

const SingleProduct = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [currIndex, setCurrIndex] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        Client
            .fetch(
                `*[_type == "product" && slug.current == '${id}']{
                    _id,
                    name,
                    image,
                    price,
                    rating,
                    isPopular,
                    slug,
                    desc,
                    category[]->{
                        _id,
                        name,
                    }
                }`
            )
            .then((data) => setData(data))
            .catch(console.error);
    }, [id]);


    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    let currentProduct = data?.[0]

    if (!data) return;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="ImgMainContaier">
                        {currentProduct.image.map((item, index) =>
                            <div className="arrImageContainer"
                                onClick={() => setCurrIndex(index)}
                            >
                                <img className="arrImage"
                                    src={urlFor(currentProduct.image[index]).url()}
                                    alt=""
                                />
                            </div>
                        )}
                    </div>

                    <div className="left">
                        <img
                            src={urlFor(currentProduct.image[currIndex]).url()}
                            alt=""
                        />
                    </div>

                    <div className="right">
                        <span className="name">{currentProduct.name}</span>
                        <span className="price">$ {currentProduct.price}</span>
                        <span className="desc">{currentProduct.desc}</span>

                        {/* <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    handleAddToCart(currentProduct, quantity);
                                    setQuantity(1);
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div> */}
                        <div className="cart-buttons secondBTN">
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    navigate('/summry/' + id)
                                }}
                            >
                                <FaCartPlus size={20} />
                                BUY NOW
                            </button>
                        </div>


                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    {
                                        currentProduct?.category[0]?.name
                                    }
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* <RelatedProducts
                    productId={id}
                    categoryId={data}
                /> */}
            </div>
        </div>
    );
};

export default SingleProduct;
