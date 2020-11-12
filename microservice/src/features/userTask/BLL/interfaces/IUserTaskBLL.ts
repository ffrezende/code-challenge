import { IUser } from "../../../../shared/interfaces/IUser";

export default interface IUserTaskBLL {
    createProject(user: IUser): Promise<any>;
}
