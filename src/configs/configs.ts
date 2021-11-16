export const VersionNumber = "1.0.0";
export const VersionCheckingFile = "version.html";
export const ResponseHeaderVersionKey = "current-version";
export const HelpDeskLink =
  "https://connexionz.atlassian.net/servicedesk/customer/portals";

export const NavDrawerWidth = 256;

export const NoteMaxCharacter = 500;
export const NotePreviewMaxWord = 56;
export const TripNotePreviewMaxNumber = 2;
export const DialogOverlayColorLight = "white";
export const DialogOverlayColorDark = "black";
export const DialogOverlayOpacity = 0.7;

export const LocalStorageKey = "cnx_dispatch_cloud_settings";
export const DistanceDigits = 2;

export const TripTimeWindowMins = 10;
export const AssignBlockSteps = {
  selectBlock: 1,
  selectVehicle: 2,
  repeatService: 3,
  confirm: 4,
  done: 5
};
export const UnassignBlockSteps = {
  selectBlock: 1,
  repeatService: 2,
  confirm: 3,
  done: 4
};
export const TripAssignVehicleSteps = {
  selectTrips: 1,
  selectVehicle: 2,
  confirm: 3,
  done: 4
};
export const CreateAssistTripSteps = {
  selectTrips: 1,
  configurations: 2,
  selectVehicle: 3,
  confirm: 4,
  done: 5
};

export const AutoDeletingInactiveVehicleLocationList = false;
export const DefaultUsername = "Web Dispatch";
export const NotInBlockNumber = -Number.MAX_SAFE_INTEGER;

export const VehicleLocationHubIntervalMs = 15 * 1000;
export const TimepointToleranceMs = 5 * 60 * 1000;

export const VehicleLocationListPanelWidth = 256;

export const EnablePassengerLoading = false;
export const NewTripDateWarningTimeoutSec = 60;
