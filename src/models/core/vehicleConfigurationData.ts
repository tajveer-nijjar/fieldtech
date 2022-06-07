import {
  VehicleConfiguration as VechicleConfiguration,
  FleetConfiguration,
  CanBitRate,
  WifiConfigurations,
  EthernetConfiguration,
  ServiceOption
} from ".";
import CanMultiplexer from "./canMultiplexer";

export default class VehicleConfigurationData {
  vechicleConfiguration: VechicleConfiguration | null = null;
  fleetConfiguration: FleetConfiguration | null = null;
  canBitRate: CanBitRate | null = null;
  wifiConfigurations: WifiConfigurations | null = null;
  ethernetConfiguration: EthernetConfiguration | null = null;
  serviceOption: ServiceOption | null = null;
}
