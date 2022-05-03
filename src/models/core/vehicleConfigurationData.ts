import {
  VehicleConfiguration,
  FleetConfiguration,
  CanBitRate,
  WifiConfigurations,
  EthernetConfiguration,
  ServiceOption
} from ".";
import CanMultipleser from "./canMultiplexer";

export default class VehicleConfigurationData {
  VehicleConfiguration: VehicleConfiguration | null = null;
  fleetConfiguration: FleetConfiguration | null = null;
  canBitRate: CanBitRate | null = null;
  wifiConfigurations: WifiConfigurations | null = null;
  ethernetConfiguration: EthernetConfiguration | null = null;
  serviceOption: ServiceOption | null = null;
}
