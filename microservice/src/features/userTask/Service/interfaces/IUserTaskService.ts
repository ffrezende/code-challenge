import { IUser } from "../../../../shared/interfaces/IUser";

export default interface IUserTaskService {
    createProject(user: IUser): Promise<any>;
  
}
