import { Env } from "@/configs";
import { VehicleConfiguration } from "@/models/core";
import { HttpService, VehicleConfigurationService } from "@/services";
import Utils, { DebugUtils } from "@/utils";

export async function getVehicleConfigurationListAsync(): Promise<
  VehicleConfiguration[]
> {
  const url = new URL(`http://localhost:90/api/VehicleConfiguration`);

  return await HttpService.get<VehicleConfiguration>(url.toString());
}
