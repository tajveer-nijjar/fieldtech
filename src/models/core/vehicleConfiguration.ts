import {
  Avf,
  Common,
  GpsReplacer,
  J1587,
  Tracking,
  VehicleDiagnostics
} from ".";
import CanMultiplexer from "./canMultiplexer";

export default class VechicleConfiguration {
  avf: Avf | null = null;
  canMultiplexer: CanMultiplexer | null = null;
  common: Common | null = null;
  gpsReplacer: GpsReplacer | null = null;
  j1587: J1587 | null = null;
  tracking: Tracking | null = null;
  vehicleDiagnostics: VehicleDiagnostics | null = null;
}
