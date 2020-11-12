import IUserTaskService from './interfaces/IUserTaskService';
import { IProject } from '../../../shared/interfaces/IProject';
import { createProjectRep, searchProjectRep } from '../Repository'
class UserTaskService implements IUserTaskService {

    async createProject(project: IProject): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            return resolve(await createProjectRep(project));
        });
    }

    async getProject(project: IProject): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            return resolve(await searchProjectRep(project));
        });
    }
}

export default UserTaskService;