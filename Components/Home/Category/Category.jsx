import Link from "next/link";
import { urlFor } from "../../Products/Product/Product";
const Category = ({ categories }) => {


    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.map((item) => (
                    item?.Show &&
                    <div
                        key={item._id}
                        className="category"
                    >
                        <Link href={`/Category/${item?.name}`} as={`/Category/${item?.name}`} className='Link'>
                            <img
                                src={urlFor(item.image).url()}
                                alt=""
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
