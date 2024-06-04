import express from "express";
import {Request, Response, NextFunction} from 'express';
import {createEnemy, findEnemy} from "./controler.js"

const enemyRouter = express.Router()

//Create Enemy
enemyRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await createEnemy(req.body))
    } catch(e){
        next(e)
    }
});

//Find Enemy
enemyRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>{
    try{
        res.json(await findEnemy(req.query.ID, req.query.stratum, req.query.type))
    } catch(e){
        next(e)
    }
})

export default enemyRouter