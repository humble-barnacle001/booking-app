import faunadb from "faunadb";
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
export const dbClient = new faunadb.Client({ secret: process.env.FAUNA_KEY }),
    q = faunadb.query;
