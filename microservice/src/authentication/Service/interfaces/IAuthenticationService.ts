export default interface IAuthenticationService {
    authenticationPOST(): Promise<any>;
    authenticationGET(): Promise<any>;
}
