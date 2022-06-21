import { MessageType } from "@/types/types";

export default class SystemMessageData {
  // The key of i18n
  title?: string = "";

  details?: string = "";

  // The key of i18n
  message = "";

  // The key of i18n
  buttonText = "close";

  showClose = true;
  isLogOut?: boolean = false;
  type: MessageType = "error";
  hideOverlay?: boolean;
  callback?: () => void;

  // Calls the callback after {timeout} seconds.
  // If the value is larger than 0, a countdown will display on SystemMessageDialog,
  // and the callback will be called after the timeout.
  timeout = -1;

  constructor();
  constructor(message: string);
  constructor(message: string, type: MessageType);
  constructor(message?: string, type?: MessageType) {
    if (message) {
      this.message = message;
    }

    if (type) {
      this.type = type;
    }
  }
}
