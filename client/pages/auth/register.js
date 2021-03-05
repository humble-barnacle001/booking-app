import firebase from "../../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import LoginRegisterForm from "../../components/Auth";

const register = () => {
    const [regEmail, setRegEmail] = useState("");
    const [regPass, setRegPass] = useState("");

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
    const register = async () => {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(regEmail, regPass)
            // .then(({ user }) => toast.success(JSON.stringify(user)))
            .then(() =>
                toast.success("Sign Up successful!!", {
                    role: "Inform successful login"
                })
            )
            .catch((e) => toast.error(e.message));
    };

    return (
        <div className='container'>
            <h1 className='mt-20 pt-10 text-center font-weight-light text-extra-letter-spacing text-light-dm'>
                Sign Up
            </h1>
            <div className='row'>
                <div className='col-lg-6 col-md-10 mx-auto'>
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
                <i className='fab fa-google'></i> Sign-up with Google
            </button>
            <p className='text-center'>
                Already have an account?{"  "}
                <Link href='/auth/login'>Login here</Link>
            </p>
        </div>
    );
};

export default register;
