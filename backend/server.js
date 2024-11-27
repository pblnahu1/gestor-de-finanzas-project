// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import bodyParser from "body-parser"
import cors from "cors"

import { PORT, FRONTEND_URL } from "./config.js";
import { query } from "./db.js";

const app = express()

app.use(cors({
    origin: FRONTEND_URL,
}))

app.use(bodyParser.json())

app.get("/users", async (req, res) => {
    try {
        const result = await query("SELECT NOW()");
        console.log("DB Conectada y Servidor Funcionando: ", result.rows[0]);
        res.json({message: "DB Conectada y Servidor Funcionando"})
    } catch (error) {
        console.error("Database connection error: ", error);
        res.status(500).json({error: "Database connection error"})
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})