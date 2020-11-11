export default interface IAuthenticationBLL {
    authenticationPOST(): Promise<any>;
    authenticationGET(): Promise<any>;
}
