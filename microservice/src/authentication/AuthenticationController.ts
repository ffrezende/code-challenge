import { Request, Response } from 'express';

import AuthenticationBLL from './BLL/AuthenticationBLL';
import AuthenticationService from './Service/AuthenticationService';

class Authenticationontroller {

    getLib(): AuthenticationBLL {
        return new AuthenticationBLL(new AuthenticationService());
    }

    authentication = async (req: Request, res: Response) => {
        try {
            const authenticationBLL = this.getLib();

            return res.status(200).json(await authenticationBLL.authenticationPOST());
        } catch (erro) {
            return res.status(403).json(erro);
        }
    };

    userLogin = async (req: Request, res: Response) => {
        try {
            const authenticationBLL = this.getLib();

            return res.status(200).json(await authenticationBLL.authenticationGET());
        } catch (erro) {
            return res.status(403).json(erro);
        }
    };

}


export default Authenticationontroller;