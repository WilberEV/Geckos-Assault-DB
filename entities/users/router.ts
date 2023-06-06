import express from "express";
import {Request, Response, NextFunction} from 'express';
import {createUser, login, findUser, updateUser} from "./controler.js"
import { auth } from "../../core/middlewares.js";

const userRouter = express.Router()


//Create User
userRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await createUser(req.body))
    } catch(e){
        next(e)
    }
});


//Login User
userRouter.post('/login', async (req: Request, res: Response, next: NextFunction)=>{
    try{
        res.json(await login(req, res))
    } catch(e){
        next(e)
    }
}) 


//Find User
userRouter.get('/:id', auth, async (req: Request, res: Response, next: NextFunction) =>{
    try{
        res.json(await findUser(req.params.id, req.payload))
    } catch(e){
        next(e)
    }
})


//Modify User
userRouter.put('/:id', auth, async (req: Request, res: Response, next: NextFunction) =>{
    try{
        res.json(await updateUser(req.params.id, req.body, req.payload))
    } catch(e){
        next(e)
    }
})

export default userRouter