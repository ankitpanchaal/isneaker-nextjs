import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Context } from "../utils/context";
import { urlFor } from "../Components/Products/Product/Product";

const Search = ({ setSearchModal }) => {
    const { products, } =
        useContext(Context);
    let data = products
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };
    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item._id}
                            onClick={() => {
                                navigate("/product/" + item?.slug?.current);
                                setSearchModal(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={urlFor(item.image[0]).url()}
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item?.name}
                                </span>
                                <span className="desc">
                                    {item?.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
