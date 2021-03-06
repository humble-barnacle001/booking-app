import { useState } from "react";
import Link from "next/link";
import LoginRegisterForm from "../../components/Auth";
import { register } from "../../actions/auth";
import noAuth from "../../components/NotLoggedRoute";

const Register = () => {
    const [regEmail, setRegEmail] = useState("");
    const [regPass, setRegPass] = useState("");

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
            <p className='text-center'>
                Already have an account?{"  "}
                <Link href='/auth/login'>Login here</Link>
            </p>
        </div>
    );
};

export default noAuth(Register);
