import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import mongoose from 'mongoose'
const List = require('../models/List')
const Card = require('../models/Card')


// list api
router.get("/api/list", (req: Request, res: Response):void => {
    List.find((err:any, lists: any):void => {
        if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
        res.json(lists)
    })
})
router.post("/api/list", (req:Request, res: Response):void => {
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

// card api
router.get("/api/card", (req: Request, res: Response):void => {
    Card.find((err:any, cards: any):void => {
        if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
        res.json(cards)
    })
})
router.post("/api/card", (req:Request, res: Response):void => {
    let listId = req.body.list_id
    if (!req.body.list_id) {
        listId = new mongoose.Types.ObjectId()
    }
    const card = new Card({
    list_id: listId,
    content: req.body.content,
    state: req.body.state,
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






//  post method
router.post("/", (req: Request, res: Response) => {
    res.send('POST request')
})
//  put method
router.put('/', (req: Request, res: Response):void => {
    res.send('PUT request')
})
//  delete method
router.delete('/', (req: Request, res: Response):void => {
    res.send('DELETE request')
})

module.exports = router;
