import { IUser } from "../../../shared/interfaces/IUser";

export default interface IAuthenticationBLL {
    authenticationPOST(): Promise<any>;
    userLogin(user: IUser): Promise<any>;
}
