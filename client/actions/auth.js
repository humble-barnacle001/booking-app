import firebase from "../firebase";
import { toast } from "react-toastify";

export const login = async (email, pass) => {
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
            toast.success("Login successful!!", {
                role: "Inform successful login"
            });
        })
        .catch((e) => toast.error(e.message));
};

export const googleLogin = async () => {
    await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(() =>
            toast.success("Google sign-in successful!!", {
                role: "Inform successful login"
            })
        )
        .catch((e) => toast.error(e.message));
};

export const register = async (email, pass) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() =>
            toast.success("Sign Up successful!!", {
                role: "Inform successful sign-up"
            })
        )
        .catch((e) => toast.error(e.message));
};

export const logOut = async () => {
    await firebase
        .auth()
        .signOut()
        .catch((e) => {
            console.log(e);
            toast.error("Unable to sign out!!");
        });
};
