import { Env } from "@/configs";
import { ConfigurationFiles, Logs } from "@/models/core";
import { HttpService } from "@/services";
import Utils, { DebugUtils } from "@/utils";

export async function getConfigurationFilesAsync(): Promise<
  ConfigurationFiles[] | null
> {
  const url = new URL(`http://localhost:9090/api/configFile`);

  return await HttpService.getAsync<Logs>(url.toString());
}
