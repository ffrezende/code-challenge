import { IUser } from "../../../shared/interfaces/IUser";

export default interface IAuthenticationService {
    authenticationPOST(): Promise<any>;
    userLogin(user: IUser): Promise<any>;
}
