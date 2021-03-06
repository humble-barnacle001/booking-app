import React, { useContext } from "react";
import { googleLogin } from "../actions/auth";
import { Context } from "../context";

const LoginRegisterForm = ({
    email,
    setEmail,
    pass,
    setPass,
    btnTxt,
    btnClass = "primary",
    callback
}) => {
    const { dispatch } = useContext(Context);

    return (
        <>
            <div className='card'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        callback(email, pass);
                        dispatch({ type: "LOAD" });
                    }}
                >
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            className='form-control'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            autoComplete='current-email'
                            required={true}
                        />
                        {btnTxt !== "Login" ? (
                            <small>Email shall never be shared outside!!</small>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pass'>Password</label>
                        <input
                            className='form-control'
                            type='password'
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                            required={true}
                            minLength='10'
                            autoComplete={
                                btnTxt === "Login"
                                    ? "current-password"
                                    : "new-password"
                            }
                        />
                        {btnTxt !== "Login" ? (
                            <small>
                                Passwords shall be held securely as hashes!!!!
                            </small>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className='text-right'>
                        <button type='submit' className={`btn btn-${btnClass}`}>
                            {btnTxt}
                        </button>
                    </div>
                </form>
            </div>
            <button
                className='btn btn-primary btn-rounded btn-lg my-15 offset-1 col-10 col-md-6 offset-md-3'
                onClick={() => {
                    dispatch({ type: "LOAD" });
                    googleLogin();
                }}
            >
                <i className='fab fa-google'></i> {`${btnTxt} with Google`}
            </button>
        </>
    );
};

export default LoginRegisterForm;
