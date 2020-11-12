import { Router } from 'express';

import { verifyJWT } from '../middleware/authToken';
import UserTaskController from '../../features/userTask/UserTaskController';

const userTask = Router();
const userTaskController = new UserTaskController();

userTask.post('/crateProject', verifyJWT, userTaskController.createProject);
userTask.get('/getProject', verifyJWT, userTaskController.getProject);


export default userTask;