import IAuthenticationService from './interfaces/IAuthenticationService';

class AuthenticationService implements IAuthenticationService {
    async authenticationPOST(): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            try {
                return resolve({ info: 'GET Pedido MongoDB' });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    async authenticationGET(): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            try {
                return resolve({ info: 'GET Pedido MongoDB' });
            } catch (erro) {
                reject(erro);
            }
        });
    }
}

export default AuthenticationService;