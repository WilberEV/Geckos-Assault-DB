import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {MongoServerError} from 'mongodb';
import config from './config.js'


export const auth = (req: Request, res: Response, next) =>{
    let token: string | undefined = req.headers.authorization;
    if(!token) {
      return res.status(401).json({error: 'NO_TOKEN'})
    }
    token = token.split(' ')[1]
    try{
        req.payload = jwt.verify(token, config.SECRET);
        next();
    } catch(e){
        return next(new Error('INVALID_CREDENTIALS'))
    }
}