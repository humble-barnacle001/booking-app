import { useEffect, useContext, Fragment } from "react";
import firebase from "../firebase";
import { Context } from "../context";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function FirebaseAuthState({ children }) {
    const { dispatch } = useContext(Context);
    const router = useRouter();
    useEffect(() => {
        return firebase.auth().onAuthStateChanged(
            async (user) => {
                if (!user) {
                    dispatch({
                        type: "LOGOUT",
                        payload: null
                    });
                } else {
                    const { token } = await user.getIdTokenResult(true);
                    fetch(
                        `${process.env.NEXT_PUBLIC_API_URI}/api/auth/current-user`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )
                        .then((r) =>
                            r.json().then((res) => {
                                if (res.status === 200) {
                                    router.push("/");
                                    dispatch({
                                        type: "LOGIN",
                                        payload: res.body.user
                                    });
                                } else throw new Error("Unable to login user");
                            })
                        )
                        .catch((err) => {
                            console.log(err.message);
                            dispatch({
                                type: "LOGOUT",
                                payload: null
                            });
                        });
                }
            },
            (e) => {
                console.log(e);
                toast.error("Verification failed!!");
            }
        );
    }, []);

    return <Fragment>{children}</Fragment>;
}
