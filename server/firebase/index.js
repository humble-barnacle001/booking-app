import admin from "firebase-admin";

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

admin.initializeApp({
    credential: admin.credential.cert(
        JSON.parse(new Buffer(process.env.FRB_CONFIG_BASE64, "base64"))
    )
});

export default admin;
