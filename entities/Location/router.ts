import express from "express";
import {Request, Response, NextFunction} from 'express';
import {createLocation, findLocation} from "./controler.js"

const locationRouter = express.Router()

//Create character
locationRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await createLocation(req.body))
    } catch(e){
        next(e)
    }
});

//Find Character by User
locationRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>{
    try{
        res.json(await findLocation(req.query.xCoordinate, req.query.yCoordinate))
    } catch(e){
        next(e)
    }
})

export default locationRouter