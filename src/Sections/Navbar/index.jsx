import { Link } from "react-scroll";
import Logo from "../../components/Logo";
import { navigations } from "../../source";
import ThemeToggle from "../../components/ThemeToggle";
import { FiMenu } from "react-icons/fi";
import SocialHandles from "../../components/SocialHandles";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import useNavbar from "../../hook/useNavbar";

function Navbar() {
    const [openSideBar, setOpenSideBar] = useState(false);

    const { showNavbar } = useNavbar();

    return (
        <nav
            className={`flex__center navbar ${showNavbar && "drop"}`}
        >
            <Logo />

            <SocialHandles />

            <div
                className={`flex navbar__links ${
                    openSideBar && "visible"
                }`}
            >
                <button
                    className="flex__center icon__container cancel__btn"
                    onClick={() => setOpenSideBar(!openSideBar)}
                >
                    <FaTimes />
                </button>

                {navigations.map((item, index) => (
                    <Link
                        to={item.to}
                        className="nav__item"
                        activeClass="active"
                        smooth={true}
                        offset={-300}
                        spy={true}
                        key={index}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="flex__center">
                <ThemeToggle />

                <button
                    className="flex__center icon__container menu__btn"
                    onClick={() => setOpenSideBar(!openSideBar)}
                >
                    <FiMenu />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;