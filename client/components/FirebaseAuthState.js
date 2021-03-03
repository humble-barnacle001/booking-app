import { useEffect, useContext, Fragment } from "react";
import firebase from "../firebase";
import { Context } from "../context";

export default function FirebaseAuthState({ children }) {
    const { dispatch } = useContext(Context);
    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                dispatch({
                    type: "LOGOUT",
                    payload: null
                });
            } else {
                const { token } = await user.getIdTokenResult();
                console.log(token);
                dispatch({
                    type: "LOGIN",
                    payload: user
                });
            }
        });
    }, []);

    return <Fragment>{children}</Fragment>;
}
