import admin from "../firebase";

export default async function (req, res, next) {
    const token = req.token;
    try {
        const user = await admin.auth().verifyIdToken(token);
        req.user = user;
    } catch (err) {
        return res.json({
            status: 401,
            body: { errors: [{ msg: "Invalid token, authorisation denied" }] }
        });
    }
    next();
}
