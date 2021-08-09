import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

//  get method
router.get("/", (req: Request, res: Response, next: NextFunction):void => {
  res.send("GET request");
});
//  post method
router.post("/", (req: any, res: any) => {
    res.send('POST request')
})
//  put method
router.put('/', (req: any, res: any):void => {
    res.send('PUT request')
})
//  delete method
router.delete('/', (req: any, res: any):void => {
    res.send('DELETE request')
})

export = router;