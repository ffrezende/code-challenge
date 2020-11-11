import { IUser } from "../../../../shared/interfaces/IUser";

export default interface IAuthenticationService {
    createUser(user: IUser): Promise<any>;
    userLogin(user: IUser): Promise<any>;
}
