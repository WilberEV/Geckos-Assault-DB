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
charaRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) =>{
    try{
        res.json(await findChara(req.params.id, req.payload))
    } catch(e){
        next(e)
    }
})


export default charaRouter