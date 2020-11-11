import IAuthenticationBLL from './interfaces/IAuthenticationBLL';
import AuthenticationService from '../Service/AuthenticationService';

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

    authenticationGET(): Promise<Array<string>> {
        return new Promise(async (resolve: Function, reject: Function) => {
            try {
                resolve(await this.authenticationService.authenticationGET());
            } catch (erro) {
                reject(erro);
            }
        });
    }
}

export default AuthenticationBLL;