import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
const User = require('../models/User')

//  get method
router.get("/", (req: Request, res: Response, next: NextFunction):void => {
    res.send("GET request");
});
router.get('/:name', (req:Request, res: Response):void => {
    User.find({name: req.params.name}, (err:any, user: any) => {
        res.send(`${user}`)
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

export = router;
