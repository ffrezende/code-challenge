import { Request, Response } from 'express';

import AuthenticationBLL from './BLL/AuthenticationBLL';
import AuthenticationService from './Service/AuthenticationService';
import { IUser } from '../shared/interfaces/IUser';
import { ILogin } from '../shared/interfaces/ILogin';

class Authenticationontroller {

    getLib(): AuthenticationBLL {
        return new AuthenticationBLL(new AuthenticationService());
    }

    createUser = async (req: Request, res: Response) => {
        try {
            const authenticationBLL = this.getLib();
            const user: IUser = req.body;
            
            return res.status(200).json(await authenticationBLL.createUser(user));
        } catch (erro) {
            return res.status(403).json(erro);
        }
    };

    userLogin = async (req: Request, res: Response) => {
        try {
            const authenticationBLL = this.getLib();
            const user: IUser = req.body;

            const {auth, token}: ILogin = await authenticationBLL.userLogin(user);

            if (auth) 
                return res.status(200).json({auth, token});
            else
                return res.status(401).end();

        } catch (erro) {
            return res.status(500).end();
        }
    };

}


export default Authenticationontroller;