import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import Client from "../../utils/Client";
import { urlFor } from "../../Components/Products/Product/Product";
import Link from "next/link";
import { SyncLoader } from "react-spinners";
import { useRouter } from "next/router";

const SingleProduct = () => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [currIndex, setCurrIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const slug = router.query.SingleProduct

    useEffect(() => {
        setLoading(true)
        Client
            .fetch(
                `*[_type == "product" && slug.current == '${slug}']{
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
        setLoading(false)
    }, [slug]);


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
            </div> :
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="ImgMainContaier">
                            {currentProduct?.image.map((item, index) =>
                                <div className="arrImageContainer"
                                    onClick={() => setCurrIndex(index)}
                                >
                                    <img className="arrImage"
                                        src={
                                            currentProduct?.image?.[index] &&
                                            urlFor(currentProduct?.image?.[index])?.url()}
                                        alt=""
                                    />
                                </div>
                            )}
                        </div>

                        <div className="left">
                            <img
                                src={currentProduct?.image?.[currIndex] && urlFor(currentProduct?.image?.[currIndex])?.url()}
                                alt=""
                            />
                        </div>

                        <div className="right">
                            <span className="name">{currentProduct?.name}</span>
                            <span className="price">$ {currentProduct?.price}</span>
                            <span className="desc">{currentProduct?.desc}</span>

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
                                <Link href={`/summry/${slug}`} className="Link" >
                                    <button
                                        className="add-to-cart-button"
                                    >
                                        <FaCartPlus size={20} />
                                        BUY NOW
                                    </button>
                                </Link>
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
