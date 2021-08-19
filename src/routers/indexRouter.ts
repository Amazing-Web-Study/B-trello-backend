import express, { Request, Response, NextFunction } from "express";
const router = express.Router();


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
