import IUserTaskService from './interfaces/IUserTaskService';
import { IUser } from '../../../shared/interfaces/IUser';

class UserTaskService implements IUserTaskService {

    async createProject(user: IUser): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
          return null

        });
    }

}

export default UserTaskService;