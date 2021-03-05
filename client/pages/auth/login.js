import firebase from "../../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import LoginRegisterForm from "../../components/Auth";

const login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");

    const login = async () => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPass)
            // .then(({ user }) => toast.success(JSON.stringify(user)))
            .then(() =>
                toast.success("Login successful!!", {
                    role: "Inform successful login"
                })
            )
            .catch((e) => toast.error(e.message));
    };

    const googleLogin = async () => {
        await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(() =>
                toast.success("Google sign-in successful!!", {
                    role: "Inform successful login"
                })
            )
            .catch((err) => toast.error(err.message));
    };
    return (
        <div className='container'>
            <h1 className='mt-20 pt-10 text-center font-weight-light text-extra-letter-spacing text-light-dm'>
                Login
            </h1>
            <div className='row'>
                <div className='col-lg-6 col-md-10 mx-auto'>
                    <LoginRegisterForm
                        email={loginEmail}
                        setEmail={setLoginEmail}
                        pass={loginPass}
                        setPass={setLoginPass}
                        btnTxt='Login'
                        btnClass='success'
                        callback={login}
                    />
                </div>
            </div>
            <button
                className='btn btn-primary btn-rounded btn-lg my-15 offset-1 col-10 col-md-6 offset-md-3'
                onClick={googleLogin}
            >
                <i className='fab fa-google'></i> Login with Google
            </button>
            <p className='text-center'>
                New here?{"  "}
                <Link href='/auth/register'>Create an account</Link>
            </p>
        </div>
    );
};

export default login;
