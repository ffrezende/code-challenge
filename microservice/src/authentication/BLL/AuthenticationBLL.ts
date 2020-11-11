import IAuthenticationBLL from './interfaces/IAuthenticationBLL';
import AuthenticationService from '../Service/AuthenticationService';
import { IUser } from '../../shared/interfaces/IUser';

import { generateJWT} from '../../shared/auth/';
import { ILogin } from '../../shared/interfaces/ILogin';

class AuthenticationBLL implements IAuthenticationBLL {
    private authenticationService: AuthenticationService;

    constructor(authenticationService: AuthenticationService) {
        this.authenticationService = authenticationService;
    }

    authenticationPOST(): Promise<Array<string>> {
        return new Promise(async (resolve: Function, reject: Function) => {
            try {
                resolve(await this.authenticationService.authenticationPOST());
            } catch (erro) {
                reject(erro);
            }
        });
    }

    userLogin(user: IUser): Promise<ILogin> {
        return new Promise(async (resolve: Function, reject: Function) => {
            const {auth} = await this.authenticationService.userLogin(user)

            if(auth) {
                const token = generateJWT('id')
                resolve( {auth: true, token})
            } else {
                resolve({auth:false, token: ''})
            }     
        });
    }
}

export default AuthenticationBLL;