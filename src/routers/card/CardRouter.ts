import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
const router = express.Router();
const Card = require('../../models/Card')


router.get("/", (req: Request, res: Response):void => {
    Card.find((err:any, cards: any):void => {
        if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
        res.json(cards)
    })
})

router.post("/", (req:Request, res: Response):void => {
    let listId = req.body.list_id
    if (!req.body.list_id) {
        listId = new mongoose.Types.ObjectId()
    }
    const card = new Card({
        list_id: listId,
        content: req.body.content,
        state: 0,
        date: new Date()
    })
    card.save()
        .then(() => {
            res.json({result: 1})
        })
        .catch((err:any) => {
            console.log(err)
            res.json({result: 0})
        })
})

module.exports = router
