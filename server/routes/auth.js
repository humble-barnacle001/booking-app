import { Router } from "express";
import verifyUser from "../middleware/verifyUser";
import getToken from "../middleware/getToken";
const router = Router();
const authMiddleware = [getToken, verifyUser];

router.get("/current-user", authMiddleware, (req, res) => {
    res.json({
        status: 200,
        body: {
            message: "Token receieved",
            user: req.user
        }
    });
});

router.get("/verify-token", authMiddleware, (req, res) => {
    res.json({
        status: 200,
        body: {
            message: "Token verified"
        }
    });
});

module.exports = router;
