import CloudEnv from "@/types/system/cloudEnv";
import { LogLevel } from "@microsoft/signalr";

export const ApiKey = "54F5C9134B9D6ACD3BFB4585DCF4B";
export const EmptyOrgId = "00000000-0000-0000-0000-000000000000";

export const ServerProduction: CloudEnv = {
  hostUrl: "dispatchcloud.connexionz.net",
  api: "https://dispatchcloudapi.connexionz.net/api",
  singalRHub: "https://dispatchcloudhub.connexionz.net",
  singalRLogLevel: LogLevel.None,
  authClientId: "f8c49aec-bf43-4537-91cb-0b5603ecc430",
  b2cScopes: ["https://connexionzb2c.onmicrosoft.com/dispatchcloudapi/Read"],
  redirectUri: "https://dispatchcloud.connexionz.net/auth",
  postLogoutRedirectUri: "https://dispatchcloud.connexionz.net/logout"
};

export const ServerUat: CloudEnv = {
  hostUrl: "dispatchclouduat.connexionz.net",
  api: "https://dispatchcloudapiuat.connexionz.net/api",
  singalRHub: "https://dispatchcloudhubuat.connexionz.net",
  singalRLogLevel: LogLevel.None,
  authClientId: "09765ed4-9ccb-475f-86b6-a9ac369c43b7",
  b2cScopes: ["https://connexionzb2c.onmicrosoft.com/dispatchclouduatapi/Read"],
  redirectUri: "https://dispatchclouduat.connexionz.net/auth",
  postLogoutRedirectUri: "https://dispatchclouduat.connexionz.net/logout"
};

export const ServerTest: CloudEnv = {
  hostUrl: "dispatchcloudtest.connexionz.net",
  api: "https://dispatchcloudapitest.connexionz.net/api",
  singalRHub: "https://dispatchcloudhubtest.connexionz.net",
  singalRLogLevel: LogLevel.None,
  authClientId: "b23f1dac-52ba-4ffa-a664-a0cf86850ca5",
  b2cScopes: [
    "https://connexionzb2c.onmicrosoft.com/dispatchcloudtestapi/Read"
  ],
  redirectUri: "https://dispatchcloudtest.connexionz.net/auth",
  postLogoutRedirectUri: "https://dispatchcloudtest.connexionz.net/logout"
};

export const ServerDev: CloudEnv = {
  hostUrl: "dispatchclouddev.connexionz.net",
  api: "https://dispatchcloudapidev.connexionz.net/api",
  singalRHub: "https://dispatchcloudhubdev.connexionz.net",
  singalRLogLevel: LogLevel.None,
  authClientId: "f8c49aec-bf43-4537-91cb-0b5603ecc430",
  b2cScopes: ["https://connexionzb2c.onmicrosoft.com/dispatchclouddevapi/Read"],
  redirectUri: "https://dispatchclouddev.connexionz.net/auth",
  postLogoutRedirectUri: "https://dispatchclouddev.connexionz.net/logout"
};

export const ServerLocal: CloudEnv = {
  hostUrl: "localhost",
  api: ServerDev.api,
  singalRHub: ServerDev.singalRHub,
  singalRLogLevel: LogLevel.Debug,
  authClientId: ServerDev.authClientId,
  b2cScopes: ServerDev.b2cScopes,
  redirectUri: "http://localhost:8080/auth",
  postLogoutRedirectUri: "http://localhost:8080/logout"
};

const HostName = window.location.hostname.toLocaleLowerCase();
export const IsProduction =
  HostName.indexOf(ServerProduction.hostUrl.toLocaleLowerCase()) > -1;

export const IsUat =
  HostName.indexOf(ServerUat.hostUrl.toLocaleLowerCase()) > -1;

export const IsTest =
  HostName.indexOf(ServerTest.hostUrl.toLocaleLowerCase()) > -1;

export const IsDev =
  HostName.indexOf(ServerDev.hostUrl.toLocaleLowerCase()) > -1;

export const IsLocal =
  HostName.indexOf(ServerLocal.hostUrl.toLocaleLowerCase()) > -1;

export function getServerEnv(): CloudEnv {
  if (IsProduction) {
    return ServerProduction;
  }

  if (IsUat) {
    return ServerUat;
  }

  if (IsDev) {
    return ServerDev;
  }

  if (IsTest) {
    return ServerTest;
  }

  if (IsLocal) {
    return ServerLocal;
  }

  return ServerTest;
}

function getApiUrl() {
  const server = getServerEnv();

  if (!server) {
    return ServerTest.api;
  }

  return server.api;
}

export const BaseUrl = getApiUrl();
