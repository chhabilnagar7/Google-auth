import express from "express";
import googleLogin from "../controllers/authController.js";

const router = express.Router()

router.get('/test', (req,res) => {
    res.send('test pass');
})

router.get('/google', googleLogin)

export default router;