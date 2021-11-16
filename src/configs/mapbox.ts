export const MapboxToken =
  "pk.eyJ1IjoicGF1bC1jb25uZXhpb256IiwiYSI6ImNrZW5jajVhbDAzZDIyem1qeHU2cWZ5enIifQ.RG2UwUMeZFVUhEk8t3rCiQ";
export const MapboxUserName = "paul-connexionz";
export const MapboxStyleLightId = "ckendz4c5065o19s14owscwd6";
export const MapboxStyleDarkId = "ckqrelr5v73ss18nzqp4iztsm";
export const MapboxStyleSatelliteId = "ckuhohvtnehie17pjnf72sjhi";
export const MapboxStyleLight =
  "mapbox://styles/" + MapboxUserName + "/" + MapboxStyleLightId;
export const MapboxStyleDark =
  "mapbox://styles/" + MapboxUserName + "/" + MapboxStyleDarkId;

// Map
export const CenterOfUSPosition: [number, number] = [-95.7129, 37.0902];
export const CenterOfUS = {
  lng: CenterOfUSPosition[0],
  lat: CenterOfUSPosition[1]
};
export const DefaultZoom = 15;
export const FarZoom = 10;
export const MinZoom = 3.8;
export const MaxZoom = 18;

export const DefaultPaddingTop = 24;
export const DefaultPaddingRight = 64;
export const DefaultPaddingBottom = 48;
export const DefaultPaddingLeft = 24;

export const DefaultTripDetailsPaddingBottom = 176;

export const PlatformCircleMinRadius = 12;
export const PlatformCircleMaxRadius = 40;
export const PlatformCircleMinBorderWidth = 1;
export const PlatformCircleMaxBorderWidth = 2;
export const PlatformCircleMinFontSize = 6;
export const PlatformCircleMaxFontSize = 16;

export const VehicleMarkerMinRadius = 8;
export const VehicleMarkerMaxRadius = 48;
export const VehicleMarkerMinBorderWidth = 0;
export const VehicleMarkerMaxBorderWidth = 3;
export const VehicleMarkerMinIconWidth = 0;
export const VehicleMarkerMaxIconWidth = 32;

export const PlatformCircleRadius = 16;

export const PlatformLayerMinZoom = 12;
export const VehicleBgLayerMaxZoom = 10;
export const VehicleLocationLayerMinZoom = VehicleBgLayerMaxZoom;

export const VehicleCircleStrockOpacity = 0.8;

export const BusImageRoundLight = "bus_round_light.png";
export const BusImageRoundDark = "bus_round_dark.png";
export const FerryImageRoundLight = "ferry_round_light.png";
export const FerryImageRoundDark = "ferry_round_dark.png";

export const BusImageFallback = "bus_round_fallback";
export const FerryImageFallback = "ferry_round_fallback";

export const BusImageTag = "cnx-bus";
export const FerryImageTag = "cnx-ferry";
export const LabelImageTag = "cnx-label";
export const ExclaimationImage = "exclaimation-white-24.png";

export const PlatformHalfCircleNormalImageName =
  "cnx-platform-half-circle-normal";
export const PlatformCircleHalfOntimeImageName =
  "cnx-platform-half-circle-ontime";
export const PlatformCircleHalfWarningImageName =
  "cnx-platform-half-circle-warning";
export const PlatformCircleHalfErrorImageName =
  "cnx-platform-half-circle-error";

// should match the names in Mapbox studio
export const TrafficCongestionLayer = "traffic-congestion";
export const TrafficCongestionLayerBg = "traffic-congestion-bg";
export const TrafficRoadClosedLayer = "traffic-road-closed";
export const TrafficRoadClosedSignsLayer = "traffic-road-closed-signs";
export const TrafficRoadClosedLayerBg = "traffic-road-closed-bg";

export const TrafficLayers = [
  TrafficCongestionLayer,
  TrafficCongestionLayerBg,
  TrafficRoadClosedLayer,
  TrafficRoadClosedSignsLayer,
  TrafficRoadClosedLayerBg
];

export const labelLayersLight = [
  "road-label",
  "poi-label",
  "state-label",
  "settlement-major-label",
  "settlement-minor-label",
  "settlement-subdivision-label"
];

export const labelLayersDark = [
  "road-label-dark",
  "poi-label-dark",
  "state-label-dark",
  "settlement-major-label-dark",
  "settlement-minor-label-dark",
  "settlement-subdivision-label-dark"
];

export const SatelliteLayer = "mapbox-satellite";

export const VehicleVisibilityFilter = ["==", "visible", true];
export const VehicleClusterFilter = ["!has", "point_count"];

export const EnableBearing = false;
