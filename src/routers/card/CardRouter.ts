import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
const router = express.Router();
const Card = require('../../models/Card')


router.get("/:id", (req: Request, res: Response):void => {
    Card.find((err:any, cards: any):void => {
        const {id} = req.params
        const filtering_cards = cards.filter((a:any) => {
            return a.user_id === id
        })
        if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
        res.json(filtering_cards)
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

router.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    try{
        await Card.findByIdAndDelete(id).exec()
        return res.status(204).end()
    } catch(err) {
        return res.status(500).json({error: err})
    }
})

router.put('/:id', (req: Request, res: Response) => {
    const {id} = req.params
    Card.findById(id, (err:any, card:any) => {
        if (err) return res.status(500).json({error: err})
        if(!Card) return res.status(400).json({error: '아이디에 맞는 카드가 없음!'})
        if (req.body.content) card.content = req.body.content
        if (req.body.state) card.state = req.body.state
        if (req.body.file) card.file = req.body.file
        if (req.body.list_id) card.list_id = req.body.list_id
        console.log(card)

        card.save((err:any) => {
            if (err) res.status(500).json({error: '저장할때 에러남'})
            res.json({message: 'card update'})
        })
    })
})

module.exports = router
