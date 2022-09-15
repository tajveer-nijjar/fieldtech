import { Env } from "@/configs";
import { Logs } from "@/models/core";
import { HttpService } from "@/services";
import Utils, { DebugUtils } from "@/utils";

export async function getLogsAsync(): Promise<Logs[] | null> {
  const url = new URL(`http://localhost:9090/api/ConfigFile`);

  return await HttpService.getAsync<Logs>(url.toString());
}
