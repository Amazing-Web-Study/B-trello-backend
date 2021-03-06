import express, { Request, Response, NextFunction } from "express"
import mongoose from "mongoose";
const router = express.Router();
const List = require('../../models/List')
// const { verifyToken, check } = require('../../middleware/Authorization')
// const listController = require('../../controllers/ListController')
const cookie = require('cookie')
const Controller = require('../../controllers/UserToken')

// router.get('/', verifyToken, listController.getAll)
// router.get('/', listController.getAll)


router.get("/", async (req: Request, res: Response) => {

    let id:any
    if (req.headers.cookie !== undefined) {
        const id = await Controller.check(cookie.parse(req.headers.cookie).user)
        List.find((err: any, lists: any): void => {
            if (err) res.status(500).send({err: '백엔드 개발자에게 카톡주세요!(db find 오류)'})
            const filtering_list = lists.filter((a: any) => {
                return a.user_id === id.info._id
            })
            res.json(filtering_list)
        })
    } else {
        console.log('유저가 아님')
        res.json({
            login: false,
            message: '로그인이 안됨'
        })
    }
})

router.post("/", async (req:Request, res: Response) => {
    const id = await Controller.check(cookie.parse(req.headers.cookie).user)

    const list = new List({
        user_id: id.info._id,
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
