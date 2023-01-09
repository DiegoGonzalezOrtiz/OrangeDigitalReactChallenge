import express from "express";
import multiMedia from "../services/multiMedia";

const router = express.Router();

router.get('/',(_req,res) =>{
    res.send(multiMedia);
})

export default router;