import { Request, Response } from 'express';

import UserTaskBLL from './BLL/UserTaskBLL';
import UserTaskService from './Service/UserTaskService';
import { IUser } from '../../shared/interfaces/IUser';

class UserTaskController {

    getLib(): UserTaskBLL {
        return new UserTaskBLL(new UserTaskService());
    }

    createProduct = async (req: Request, res: Response) => {
        try {
            const userTaskBLL = this.getLib();
            const user: IUser = req.body;
            
            return res.status(200).json(await userTaskBLL.createProject(user));
        } catch (erro) {
            return res.status(403).json(erro);
        }
    };

}

export default UserTaskController;