import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
// import getToken from "../middleware/getToken";
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const PORT = process.env.PORT || 5500;
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: process.env.PROXY.split(",") }));
// app.use(getToken);

app.get("/api", (req, res) => res.send(`API running`));

// Use Routes
readdirSync("./routes/").map((route) => {
    app.use(`/api/${route.replace(".js", "")}`, require(`../routes/${route}`));
    app.get(`/api/${route.replace(".js", "")}`, (req, res) =>
        res.send(`API route ${route} running`)
    );
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
