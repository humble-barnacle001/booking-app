import Link from "next/link";
import { useEffect } from "react";

const Nav = () => {
    useEffect(() => {
        const el = document.getElementById("themeToggler");
        el.setAttribute("onclick", "halfmoon.toggleDarkMode()");

        // Works only for reload or initial load
        if (halfmoon.readCookie("halfmoon_preferredMode")) {
            if (halfmoon.readCookie("halfmoon_preferredMode") == "light-mode") {
                el.innerHTML = "<i class='far fa-moon' aria-hidden='true'></i>";
            } else if (
                halfmoon.readCookie("halfmoon_preferredMode") == "dark-mode"
            ) {
                el.innerHTML = "<i class='far fa-sun' aria-hidden='true'></i>";
            }
        }
    }, []);
    return (
        <nav className='navbar'>
            <div className='container justify-content-between'>
                <div>
                    <ul className='navbar-nav d-flex'>
                        <li className='nav-item'>
                            <Link href='/'>
                                <a className='nav-link text-primary'>Home</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/auth'>
                                <a className='nav-link text-primary'>
                                    Login or Sign-Up
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button
                        className='btn btn-action mr-5'
                        type='button'
                        id='themeToggler'
                        aria-label='Toggle dark mode'
                    >
                        <i className='far fa-moon' aria-hidden='true'></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
