const jwt = require('jsonwebtoken')
import express, { Request, Response, NextFunction } from "express";
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY


exports.verifyToken = async function (req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.cookies)
        const clientToken = req.cookies.user
        const decoded = jwt.verify(clientToken, SECRET_KEY)
        console.log('decoded', decoded)
        if (decoded) {
            console.log('res', res)
            console.log(decoded)
            res.locals.userId = decoded._id
            next()
        } else {
            res.status(401).json({error: 'unauthorized'})
        }
    }
    catch (err) {
        console.error(err)
        next(err)
    }
}