import { Router } from "express";
import verifyUser from "../middleware/verifyUser";
const router = Router();

router.get("/current-user", verifyUser, (req, res) => {
    res.json({
        status: 200,
        body: {
            message: "Token receieved",
            user: req.user
        }
    });
});

module.exports = router;
