import express, { Request, Response, NextFunction } from "express"
import mongoose from "mongoose";
const router = express.Router();
const List = require('../../models/List')
// const { verifyToken } = require('../../middleware/Authorization')
const listController = require('../../controllers/ListController')

// router.get('/', verifyToken, listController.getAll)
// router.get('/', listController.getAll)

router.get("/:id", (req: Request, res: Response):void => {
    List.find((err:any, lists: any):void => {
        const {id} = req.params
        if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
        const filtering_list = lists.filter((a:any) => {
            return a.user_id === id
        })
        res.json(filtering_list)
    })
})

router.post("/", (req:Request, res: Response):void => {
    let userId = req.body.user_id
    if (!req.body.user_id) {
        res.json({error: 'user_id가 빠졌습니다!'})
    }
    const list = new List({
        user_id: userId,
        title: req.body.title,
        date: new Date
    })

    list.save()
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
        await List.findByIdAndDelete(id).exec()
        return res.status(204).end()
    } catch(err) {
        return res.status(500).json({error: err})
    }
})

router.put('/:id', (req: Request, res: Response) => {
    const {id} = req.params
    List.findById(id, (err:any, list:any) => {
        if (err) return res.status(500).json({error: err})
        if(!List) return res.status(400).json({error: '아이디에 맞는 리스트가 없음!'})
        if (req.body.title) list.title = req.body.title
        console.log(list)

        list.save((err:any) => {
            if (err) res.status(500).json({error: '저장할때 에러남'})
            res.json({message: 'list update'})
        })
    })
})


module.exports = router
