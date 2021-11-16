import { LogLevel } from "@microsoft/signalr";

export default interface CloudEnv {
  hostUrl: string;
  api: string;
  singalRHub: string;
  singalRLogLevel: LogLevel;
  redirectUri: string;
  postLogoutRedirectUri: string;
  authClientId: string;
  b2cScopes: string[];
}
