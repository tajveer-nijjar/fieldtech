import { Env } from "@/configs";
import { Volume } from "@/models/core";
import { HttpService, VehicleConfigurationService } from "@/services";
import Utils, { DebugUtils } from "@/utils";

export async function getVolumeDataAsnyc(): Promise<Volume[] | null> {
  const url = new URL(`http://localhost:9090/api/volume`);

  return await HttpService.getAsync<Volume>(url.toString());
}

export async function saveVolumeAsync(data: Volume): Promise<Volume[] | null> {
  const url = new URL("http://localhost:9090/api/volume");

  const response = await HttpService.postAsync(url.toString(), data);
  return response;
}
