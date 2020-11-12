import { Response, NextFunction } from 'express';
import dotenv from 'dotenv-safe';
import jwt from 'jsonwebtoken';

dotenv.config();
const SECRET = 'mysecret' //TODO: use dotenv

export const generateJWT = (userId: string) => jwt.sign({ userId }, SECRET, { expiresIn: 600 });

export const verifyJWT = (req: any, res: Response, next: NextFunction) => {
    const token: any = req.headers['x-acess-token'];
    jwt.verify(token, SECRET, (error: any, decoded: any)=> {
        if(error) return res.status(401).json({message: 'Access denied'});

        req.userId = decoded.userId
        next();
    });
}