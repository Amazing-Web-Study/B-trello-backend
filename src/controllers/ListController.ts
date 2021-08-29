import { Request, Response, NextFunction } from "express";
const List = require('../models/List')



exports.getAll = async function (req:Request, res: Response, next: NextFunction) {
    try{
        const allLists = await List.find({
            user_id: res.locals.userId
        })
        res.json({ lists: allLists })
    }
    catch (err) {
        console.error(err)
        next(err)
    }
}