import IAuthenticationService from './interfaces/IAuthenticationService';
import { IUser } from '../../shared/interfaces/IUser';

class AuthenticationService implements IAuthenticationService {
    async createUser(user: IUser): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            const {username, password} = user;

            //chama banco
            
            return resolve({ created: true});

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