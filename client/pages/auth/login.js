import { useState } from "react";
import Link from "next/link";
import LoginRegisterForm from "../../components/Auth";
import { login } from "../../actions/auth";
import noAuth from "../../components/NotLoggedRoute";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");

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
            <p className='text-center'>
                New here?{"  "}
                <Link href='/auth/register'>Create an account</Link>
            </p>
        </div>
    );
};

export default noAuth(Login);
