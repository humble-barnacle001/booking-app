import { useEffect } from "react";
import Nav from "../components/nav";
import { Provider } from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FirebaseAuthState from "../components/FirebaseAuthState";

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <FirebaseAuthState>
                <div className='page-wrapper with-navbar with-transitions'>
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
