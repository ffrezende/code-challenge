import IUserTaskBLL from './interfaces/IUserTaskBLL';
import UserTaskService from '../Service/UserTaskService';

import { ILogin } from '../../../shared/interfaces/ILogin';
import { IProject } from '../../../shared/interfaces/IProject';

class UserTaskBLL implements IUserTaskBLL {
    private userTaskService: UserTaskService;

    constructor(userTaskService: UserTaskService) {
        this.userTaskService = userTaskService;
    }

    createProject(project: IProject): Promise<ILogin> {
        return new Promise(async (resolve: Function, reject: Function) => {
            try {
                resolve(await this.userTaskService.createProject(project));
            } catch (erro) {
                reject(erro);
            }
        });
    }


    getProject(project: IProject): Promise<ILogin> {
        return new Promise(async (resolve: Function, reject: Function) => {
            try {
                resolve(await this.userTaskService.getProject(project));
            } catch (erro) {
                reject(erro);
            }
        });
    }
}

export default UserTaskBLL;