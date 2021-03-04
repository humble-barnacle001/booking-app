export default function (req, res, next) {
    try {
        if (!req.header("authorization"))
            throw new Error("No authorization header!!");
        const token = req.header("authorization").split(" ")[1];
        const type = req.header("authorization").split(" ")[0];
        if (token && type === "Bearer") {
            req.token = token;
            next();
        }
    } catch (err) {
        return res.json({
            status: 401,
            body: { errors: [{ msg: "Inavlid token, authorisation denied" }] }
        });
    }
}
