import express from "express"
import { Router } from "express";
const router = express.Router()
import loginUser from "../controllers/authController.js";
import jwt from "jsonwebtoken"

// ruta para iniciar sesion
router.post('/login', loginUser)

// ruta protegida
router.get('/homedashboard',  ensureToken, (req,res) => {
    jwt.verify(req.token, process.env.JWT_SECRET || 'my_secret_key', (err,data) => {
        if(err) {
            res.sendStatus(403);
        }else{
            res.json({
                text:'protected dashboard',
                data
            })
        }
    })
})

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    console.log(bearerHeader)
    if(typeof bearerHeader !== 'undefined'){
        const bearer= bearerHeader.split(" ")
        const bearerToken= bearer[1];
        req.token=bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}

// ruta para registrarme
// router.post('/register', registerUser)

// ruta para verificar el token
// router.post('/verify', verifyToken)

export default router