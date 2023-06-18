import express from "express";
import {Request, Response, NextFunction} from 'express';
import {createItem, findItem} from "./controler.js"

const itemRouter = express.Router()

//Create character
itemRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await createItem(req.body))
    } catch(e){
        next(e)
    }
});

//Find Character by User
itemRouter.get('/:name', async (req: Request, res: Response, next: NextFunction) =>{
    try{
        res.json(await findItem(req.query.name))
    } catch(e){
        next(e)
    }
})

export default itemRouter