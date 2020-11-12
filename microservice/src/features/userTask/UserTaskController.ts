import { Request, Response } from 'express';

import UserTaskBLL from './BLL/UserTaskBLL';
import UserTaskService from './Service/UserTaskService';
import { IProject } from '../../shared/interfaces/IProject';

class UserTaskController {

    getLib(): UserTaskBLL {
        return new UserTaskBLL(new UserTaskService());
    }

    createProject = async (req: Request, res: Response) => {
        try {
            const userTaskBLL = this.getLib();
            const project: IProject = req.body;
            
            return res.status(201).json(await userTaskBLL.createProject(project));

        } catch (erro) {
            return res.status(403).json(erro);
        }
    };

    getProject = async (req: Request, res: Response) => {
        try {
            const userTaskBLL = this.getLib();
            const project: IProject = req.body;
            
            return res.status(200).json(await userTaskBLL.getProject(project));

        } catch (erro) {
            return res.status(404).json(erro);
        }
    };

    deleteProject = async (req: Request, res: Response) => {
        try {
            const userTaskBLL = this.getLib();
            const project: IProject = req.body;
            
            return res.status(202).json(await userTaskBLL.deleteProject(project));

        } catch (erro) {
            return res.status(403).json(erro);
        }
    };

}

export default UserTaskController;