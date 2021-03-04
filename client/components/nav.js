import Link from "next/link";
import { useEffect, useContext } from "react";
import { Context } from "../context";
import firebase from "../firebase";

const Nav = () => {
    const {
        state: { user },
        dispatch
    } = useContext(Context);

    const handleLogOut = async () => {
        await firebase.auth().signOut();
        dispatch({
            type: "LOGOUT",
            payload: null
        });
    };
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
                            {user ? (
                                <Link href='#!'>
                                    <a
                                        className='nav-link text-primary'
                                        onClick={handleLogOut}
                                    >
                                        Log Out
                                    </a>
                                </Link>
                            ) : (
                                <Link href='/auth'>
                                    <a className='nav-link text-primary'>
                                        Login or Sign-Up
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
