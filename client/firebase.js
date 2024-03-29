import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FRB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FRB_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FRB_PROJ_ID,
    storageBucket: process.env.NEXT_PUBLIC_FRB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FRB_MSG_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FRB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FRB_MEASUREMENT_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
}

export default firebase;
