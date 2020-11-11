import IAuthenticationService from './interfaces/IAuthenticationService';
import { IUser } from '../../shared/interfaces/IUser';

import { createUserRep, searchUserRep } from '../Repository'

class AuthenticationService implements IAuthenticationService {

    async createUser(user: IUser): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {
            const response = await createUserRep(user);
            
            return response ? resolve({ created: true}) : resolve({ created: false})

        });
    }

    async userLogin(user: IUser): Promise<any> {
        return new Promise(async (resolve: Function, reject: Function) => {

            const { rowid } = await searchUserRep(user);
            
            if(rowid) return resolve({auth: true, userId: '1'})
            else return resolve({auth: false, userId: ''})
        });
    }
}

export default AuthenticationService;