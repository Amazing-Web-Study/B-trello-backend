import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

//  get method
router.get("/", (req: Request, res: Response, next: NextFunction):void => {
  res.send("GET request");
});
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
