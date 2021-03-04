import { useEffect } from "react";
import Nav from "../components/nav";
import { Provider } from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FirebaseAuthState from "../components/FirebaseAuthState";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const el = document.getElementById("themeToggler");
        el.setAttribute("onclick", "halfmoon.toggleDarkMode()");

        // Works only for reload or initial load
        if (halfmoon.readCookie("halfmoon_preferredMode")) {
            if (halfmoon.readCookie("halfmoon_preferredMode") == "light-mode") {
                document.body.classList.remove("dark-mode");
                el.innerHTML = "<i class='far fa-moon' aria-hidden='true'></i>";
            } else if (
                halfmoon.readCookie("halfmoon_preferredMode") == "dark-mode"
            ) {
                document.body.classList.add("dark-mode");
                el.innerHTML = "<i class='far fa-sun' aria-hidden='true'></i>";
            }
        }
    }, []);

    return (
        <Provider>
            <FirebaseAuthState>
                <div
                    className='page-wrapper with-navbar with-transitions'
                    data-sidebar-hidden='hidden'
                >
                    <Nav />
                    <ToastContainer />
                    <div className='content-wrapper'>
                        <Component {...pageProps} />
                    </div>
                </div>
            </FirebaseAuthState>
        </Provider>
    );
}
