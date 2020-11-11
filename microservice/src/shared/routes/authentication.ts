import { Router } from 'express';

import handleLog from '../middleware/handleLog';
import AuthenticationController from '../../authentication/AuthenticationController';

const authentication = Router();
const authenticationController = new AuthenticationController();

authentication.post('/auth', handleLog, authenticationController.authentication);
authentication.get('/auth', handleLog, authenticationController.authentication);


export default authentication;