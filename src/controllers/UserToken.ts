import express, { Request, Response, NextFunction } from "express";
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

exports.createToken = async function (req:Request, res:Response, next:NextFunction) {
    try{
        const user = await User.find({id: req.body.id})
        if (user.length) {
            bcrypt.compare(req.body.pw, user[0].pw, (err:any, isMatch:any) => {
                if (err) {
                    console.error(err)
                } else {
                    if (isMatch) {
                        const token = jwt.sign({
                            _id: user[0]._id,
                            name: user[0].name
                        }, SECRET_KEY, {
                            expiresIn: '7h'
                        })

                        res.cookie('user', token)
                        res.status(201).json({
                            result: 'ok',
                            token
                        })
                    }
                }
            })
        } else {
            res.status(400).json({error: 'invalid user'})
            // User 모델에 없을 경우 에러 메세지와 400 응답
        }
    }
    catch (err:any) {
        console.error(err)
        next(err)
    }
}

exports.createUser = async function (req:Request, res:Response, next:NextFunction) {
    try {
        const user = await new User(req.body).save()

        res.status(201).json({
            result: 'ok',
            user: user
        })
    }
    catch (err) {
        console.error(err)
        next(err)
    }
}

exports.check = (cookie:any) => {

    if (!cookie) {
        return {
            success: false,
            message: 'fail'
        }
    }

    const p = new Promise((resolve, reject) => {
        jwt.verify(cookie, SECRET_KEY, (err:any, decoded:any) => {
            if(err) reject(err)
            resolve(decoded)
        })
    })

    const respond = (token:any) => {
        return {
            success: true,
            info: token
        }
    }

    const onError = (error:any) => {
        return {
            success: false,
            message: error.message
        }
    }

    return p.then(respond).catch(onError)
}

