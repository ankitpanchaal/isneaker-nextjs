import { useEffect, useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Search from '../../pages/Search'
import Link from "next/link";

const HeaderF = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li>
                            <Link href={'/'} className='Link' >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/About'} className='Link' >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={'/PP'} className='Link' >
                                Privacy and Policy
                            </Link>
                        </li>
                        <li onClick={() => window.scrollTo(0, 550)}>Categories</li>
                    </ul>
                    <div className="center" >
                        <Link href={'/'} className='Link'>
                            i - SNEAKERS
                        </Link>
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        {/* <AiOutlineHeart /> */}
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
        </>
    );
};

export default HeaderF;
