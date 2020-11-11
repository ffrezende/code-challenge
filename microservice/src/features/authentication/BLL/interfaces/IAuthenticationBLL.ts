import { IUser } from "../../../../shared/interfaces/IUser";

export default interface IAuthenticationBLL {
    createUser(user: IUser): Promise<any>;
    userLogin(user: IUser): Promise<any>;
}
