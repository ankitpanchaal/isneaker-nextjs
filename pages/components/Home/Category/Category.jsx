import { useNavigate } from "react-router-dom";
import { urlFor } from "../../Products/Product/Product";
// import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.map((item) => (
                    item?.Show &&
                    <div
                        key={item._id}
                        className="category"
                        onClick={() => navigate(`/category/` + item?.name)}
                    >
                        <img
                            src={urlFor(item.image).url()}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
