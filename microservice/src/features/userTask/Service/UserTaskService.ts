import IUserTaskService from './interfaces/IUserTaskService';
import { IProject } from '../../../shared/interfaces/IProject';
import { createProjectRep, deleteProjectRep, getProjectRep } from '../Repository'
class UserTaskService implements IUserTaskService {

    async createProject(project: IProject): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            return resolve(await createProjectRep(project));
        });
    }

    async getProject(project: IProject): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            return resolve(await getProjectRep(project));
        });
    }

    async deleteProject(project: IProject): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            return resolve(await deleteProjectRep(project));
        });
    }
}

export default UserTaskService;