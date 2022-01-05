import HubRequestType from "@/types/requestTypes/hubRequestType";
import Utils from "@/utils";

export default class ApiRequestData {
  projectSystemId = "";
  organizationSystemId = "";
  userId = "";
  userRole: null | number = null;
  date: Date | null = null;

  get isValid(): boolean {
    return (
      !Utils.isNullOrEmptyString(this.projectSystemId) &&
      !Utils.isNullOrEmptyString(this.organizationSystemId) &&
      !Utils.isNullOrEmptyString(this.userId)
    );
  }

  get hubRequestData(): HubRequestType {
    return {
      Organization: this.organizationSystemId,
      Project: this.projectSystemId,
      UserId: this.userId
    };
  }
}
