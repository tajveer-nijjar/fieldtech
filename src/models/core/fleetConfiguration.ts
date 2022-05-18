import Announcement from "./announcement";
import Avf2 from "./avf2";
import Common2 from "./common2";
import Tracking2 from "./tracking2";
import VehicleDiagnostics2 from "./vehicleDiagnostics2";

export default class FleetConfiguration {
  announcement: Announcement | null = null;
  avf: Avf2 | null = null;
  common: Common2 | null = null;
  tracking: Tracking2 | null = null;
  vehicleDiagnostics: VehicleDiagnostics2 | null = null;
}
