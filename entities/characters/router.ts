import express from "express";
import {Request, Response, NextFunction} from 'express';
import {createChara, findChara} from "./controler.js"


const charaRouter = express.Router()

//Create character
charaRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await createChara(req.body))
    } catch(e){
        next(e)
    }
});

//Find Character by User
charaRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>{
    try{
        res.json(await findChara(req.query.name as string, req.query.owner as string))
    } catch(e){
        next(e)
    }
})


export default charaRouter