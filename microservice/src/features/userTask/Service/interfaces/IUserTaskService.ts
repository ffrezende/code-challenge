import { IProject } from "../../../../shared/interfaces/IProject";

export default interface IUserTaskService {
    createProject(project: IProject): Promise<any>;
}
