import { Router } from 'express';

import handleLog from '../middleware/handleLog';
import AuthenticationController from '../../features/authentication/AuthenticationController';

const authentication = Router();
const authenticationController = new AuthenticationController();

authentication.post('/createUser', handleLog, authenticationController.createUser);
authentication.post('/login', handleLog, authenticationController.userLogin);


export default authentication;