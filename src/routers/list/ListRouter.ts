import express, { Request, Response, NextFunction } from "express"
import mongoose from "mongoose";
const router = express.Router();
const List = require('../../models/List')
// const { verifyToken } = require('../../middleware/Authorization')
const listController = require('../../controllers/ListController')

// router.get('/', verifyToken, listController.getAll)
// router.get('/', listController.getAll)

router.get("/", (req: Request, res: Response):void => {
    List.find((err:any, lists: any):void => {
        if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
        res.json(lists)
    })
})

router.post("/", (req:Request, res: Response):void => {
    let userId = req.body.user_id
    if (!req.body.user_id) {
        userId = new mongoose.Types.ObjectId()
    }
    const list1 = new List({
        user_id: userId,
        title: req.body.title,
        date: new Date
    })
    list1.save()
        .then(() => {
            res.json({result: 1})
        })
        .catch((err:any) => {
            console.log(err)
            res.json({result: 0})
        })
})


module.exports = router
