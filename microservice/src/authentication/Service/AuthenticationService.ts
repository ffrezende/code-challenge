import IAuthenticationService from './interfaces/IAuthenticationService';
import { IUser } from '../../shared/interfaces/IUser';

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

    async userLogin(user: IUser): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            const {username, password} = user;
            //chama banco
            
            return resolve({auth: true, userId: '1'});
        });
    }
}

export default AuthenticationService;