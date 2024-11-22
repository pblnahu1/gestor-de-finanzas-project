import express from "express";
import bodyParser from "body-parser"
import { PORT } from "./config.js";

const app = express()

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})