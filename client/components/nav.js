import Link from "next/link";
import { useContext } from "react";
import { logOut } from "../actions/auth";
import { Context } from "../context";

const Nav = () => {
    const {
        state: { user },
        dispatch
    } = useContext(Context);

    return (
        <nav className='navbar'>
            <div className='container justify-content-between'>
                <div>
                    <ul className='navbar-nav d-flex'>
                        <li className='nav-item'>
                            <Link href='/'>
                                <a className='nav-link text-primary'>
                                    <span className=' d-none d-sm-flex'>
                                        Home
                                    </span>
                                    <span className='d-sm-none'>
                                        <i className='fas fa-home'></i>
                                    </span>
                                </a>
                            </Link>
                        </li>
                        {user ? (
                            <li className='nav-item'>
                                <Link href='/booking/new'>
                                    <a className='nav-link text-primary'>
                                        <span className=' d-none d-sm-flex'>
                                            New Booking
                                        </span>
                                        <span className='d-sm-none'>
                                            <i className='fas fa-plus'></i>
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        ) : (
                            ""
                        )}
                        <li className='nav-item'>
                            {user ? (
                                <Link href='#!'>
                                    <a
                                        className='nav-link text-primary'
                                        onClick={() => {
                                            dispatch({ type: "LOAD" });
                                            logOut();
                                        }}
                                    >
                                        <span className=' d-none d-sm-flex'>
                                            Log Out
                                        </span>
                                        <span
                                            className='d-sm-none'
                                            key='logOut'
                                        >
                                            <i className='fas fa-sign-out-alt'></i>
                                        </span>
                                    </a>
                                </Link>
                            ) : (
                                <Link href='/auth/login'>
                                    <a className='nav-link text-primary'>
                                        <span className=' d-none d-sm-flex'>
                                            Login
                                        </span>
                                        <span className='d-sm-none' key='logIn'>
                                            <i className='fas fa-sign-in-alt'></i>
                                        </span>
                                    </a>
                                </Link>
                            )}
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
