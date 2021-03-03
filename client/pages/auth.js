import { useContext } from "react";
import { Context } from "../context";
import firebase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import LoginRegisterForm from "../components/Auth";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPass, setRegPass] = useState("");
    const router = useRouter();

    const login = async () => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPass)
            .then(({ user }) => toast.success(JSON.stringify(user)))
            .catch((e) => toast.error(e.message));
    };

    const googleLogin = async () => {
        await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .catch((err) => toast.error(err.message));
    };
    const register = async () => {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(regEmail, regPass)
            .then(({ user }) => toast.success(JSON.stringify(user)))
            .catch((e) => toast.error(e.message));
    };
    return (
        <div className='container'>
            <h2 className='mt-20 pt-10 text-center font-weight-light text-extra-letter-spacing text-light-dm'>
                Login / Register
            </h2>
            <div className='row'>
                <div className='col-md-6'>
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
                <div className='col-md-6'>
                    <LoginRegisterForm
                        email={regEmail}
                        setEmail={setRegEmail}
                        pass={regPass}
                        setPass={setRegPass}
                        btnTxt='Register'
                        btnClass='secondary'
                        callback={register}
                        className='col-md-6'
                    />
                </div>
            </div>
            <button
                className='btn btn-primary btn-rounded btn-lg my-15 offset-1 col-10 col-md-6 offset-md-3'
                onClick={googleLogin}
            >
                <i className='fab fa-google'></i> Login or SignUp with Google
            </button>
        </div>
    );
};

export default Login;
