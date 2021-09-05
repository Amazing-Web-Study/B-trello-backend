import express, { Request, Response, NextFunction } from "express"
import mongoose from "mongoose";
const router = express.Router();
const User = require('../../models/User')
// const Controller = require('../../controllers/UserToken')


// router.post("/sign-in", Controller.createToken)
// router.post("/sign-up", Controller.createUser)

router.get("/", (req: Request, res: Response):void => {
    User.find((err:any, user: any):void => {
        if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
        res.json(user)
    })
})
//
// router.post("/", (req:Request, res: Response):void => {
//     const list1 = new User({
//         id: req.body.id,
//         name: req.body.name,
//         pw: req.body.pw
//     })
//     list1.save()
//         .then(() => {
//             res.json({result: 1})
//         })
//         .catch((err:any) => {
//             console.log(err)
//             res.json({result: 0})
//         })
// })


module.exports = router
