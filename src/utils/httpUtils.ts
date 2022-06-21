import Constants, { Namespaces, StoreActions, Texts } from "@/constants";
import HttpStatusCodes from "@/constants/statusCodes";
import { CnxError, SystemMessageData } from "@/models/system";
import store from "@/store";
import { DebugUtils } from "@/utils";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getErrorSystemMessage(e: any): SystemMessageData {
  const data = new SystemMessageData();

  if (!(e instanceof Error)) {
    e = new Error(Texts.UnknownError);
  }

  if (e instanceof CnxError) {
    switch (e.statusCode) {
      case HttpStatusCodes.unauthorized:
        {
          data.title = "Unauthorized";
          data.message = "You need to sign in to access the content.";
        }
        break;
      case HttpStatusCodes.internalServerError:
        {
          data.message = "Oops, we messed up.";
          data.details = e.message;
        }
        break;
      default:
        {
          data.message = "Couldn't load data.";
          data.details = e.message;
        }
        break;
    }

    return data;
  }

  if (
    e.message
      .toLocaleLowerCase()
      .startsWith(Constants.ApiErrorPrefix.toLocaleLowerCase())
  ) {
    data.message =
      "An error happened while processing your request. Please try again. " +
      Texts.ContactUs;
    data.details = e.message;
    return data;
  }

  data.message = "An error happened. " + Texts.ContactUs;
  data.details = e.message;

  return data;
}

export function showHttpError(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  e: any,
  type: "dialog" | "toast" = "toast"
): void {
  DebugUtils.trace(e);

  if (!(e instanceof Error)) {
    e = new Error(Texts.UnknownError);
  }

  // Don't show error toasts for unauthorised, the user will be logged out.
  if (e instanceof CnxError && e.statusCode === HttpStatusCodes.unauthorized) {
    return;
  }

  if (e.message.indexOf(HttpStatusCodes.unauthorized.toString()) > -1) {
    return;
  }

  if (type === "toast") {
    store.dispatch(
      `${Namespaces.root}/${StoreActions.showSystemMessageToast}`,
      getErrorSystemMessage(e)
    );
    return;
  }

  store.dispatch(
    `${Namespaces.root}/${StoreActions.showMessageDialog}`,
    getErrorSystemMessage(e)
  );
}
