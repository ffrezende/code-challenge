import { IProject } from "../../../../shared/interfaces/IProject";

export default interface IUserTaskBLL {
    createProject(project: IProject): Promise<any>;
    getProject(project: IProject): Promise<any>;
}
