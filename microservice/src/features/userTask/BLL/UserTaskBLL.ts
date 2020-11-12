import IUserTaskBLL from './interfaces/IUserTaskBLL';
import UserTaskService from '../Service/UserTaskService';
import { IUser } from '../../../shared/interfaces/IUser';

import { ILogin } from '../../../shared/interfaces/ILogin';

class UserTaskBLL implements IUserTaskBLL {
    private userTaskService: UserTaskService;

    constructor(userTaskService: UserTaskService) {
        this.userTaskService = userTaskService;
    }

    createProject(user: IUser): Promise<ILogin> {
        return new Promise(async (resolve: Function, reject: Function) => {
            try {
                resolve(await this.userTaskService.createProject(user));
            } catch (erro) {
                reject(erro);
            }
        });
    }
}

export default UserTaskBLL;