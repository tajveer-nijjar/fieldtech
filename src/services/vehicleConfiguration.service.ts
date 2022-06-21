import { Env } from "@/configs";
import { VehicleConfiguration } from "@/models/core";
import { HttpService, VehicleConfigurationService } from "@/services";
import Utils, { DebugUtils } from "@/utils";

export async function getVehicleConfigurationListAsync(): Promise<
  VehicleConfiguration[] | null
> {
  const url = new URL(`http://localhost:9090/api/VehicleConfiguration`);

  return await HttpService.getAsync<VehicleConfiguration>(url.toString());
}

export async function saveVehicleConfigurationAsync(
  data: VehicleConfiguration
): Promise<VehicleConfiguration[] | null> {
  const url = new URL("http://localhost:9090/api/VehicleConfiguration");

  const response = await HttpService.postAsync(url.toString(), data);
  return response;
}
