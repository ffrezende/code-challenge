import dotenv from  "dotenv-safe";
import jwt from 'jsonwebtoken';

dotenv.config();
const SECRET = 'mysecret'

export const generateJWT = (userId: string) => jwt.sign({ userId }, SECRET, { expiresIn: 600 });

