import { Env } from "@/configs";
import { DebugUtils } from "@/utils";
import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState
} from "@microsoft/signalr";

export default class SignalRService {
  private connection: HubConnection | null = null;
  onResponsed: ((result: string) => void) | null = null;
  private serverEnv = Env.getServerEnv();

  constructor(private connectionName: string) {}

  async start(): Promise<void> {
    try {
      if (
        !this.serverEnv ||
        !this.connectionName ||
        this.connectionName.trim().length === 0
      ) {
        throw new AggregateError("Can't get server infomation.");
      }

      const hubUrl = `${this.serverEnv.singalRHub}/${this.connectionName}`;

      this.connection = new HubConnectionBuilder()
        .withUrl(hubUrl)
        .configureLogging(this.serverEnv.singalRLogLevel)
        .withAutomaticReconnect({
          nextRetryDelayInMilliseconds: (retryContext) => {
            // If the first two reconnects attempt fails,
            // the second reconnect attempt will start immediately instead of waiting 2 seconds
            // like it would in the default configuration.
            if (retryContext.previousRetryCount === 0) {
              return 0;
            }
            // If the second reconnect attempt fails,
            // the third reconnect attempt will start in 2 seconds
            // which is again like the default configuration.
            if (retryContext.previousRetryCount === 1) {
              return 1000 * 2;
            }
            // Retrys in 10s
            if (retryContext.previousRetryCount === 2) {
              return 1000 * 10;
            }
            // Retrys in 30s
            if (retryContext.previousRetryCount === 3) {
              return 1000 * 30;
            }
            // Retrys in 1m
            if (retryContext.previousRetryCount === 4) {
              return 1000 * 60;
            }
            // Retrys in 5m
            if (retryContext.previousRetryCount === 5) {
              return 1000 * 60 * 5;
            }
            // Retrys every 10mins
            if (retryContext.elapsedMilliseconds < 10000 * 60 * 60) {
              return 1000 * 60 * 10;
            } else {
              // Retrys every 30mins
              return 1000 * 60 * 30;
            }
          }
        })
        .build();

      this.connection.on("ReceiveMessage", (methodName, message) =>
        this.response(message)
      );

      DebugUtils.log("[SignalR] start hub connection: " + this.connectionName);
      await this.connection.start();
    } catch (e) {
      DebugUtils.log(
        "[SignalR] An error happened while connection the hub: " +
          this.connectionName
      );
      DebugUtils.trace(e);

      if (e instanceof AggregateError) {
        return;
      }

      setTimeout(this.start, 5000);
    }
  }

  async stop(): Promise<void> {
    if (!this.connection) {
      return;
    }

    DebugUtils.log("[SignalR] stop hub connection: " + this.connectionName);

    await this.connection.stop();
  }

  async invoke<T>(
    methodName: string,
    request: T,
    onResponsed?: (result: string) => void
  ): Promise<void> {
    if (!this.connection || !request) {
      return;
    }

    if (onResponsed) {
      this.onResponsed = onResponsed;
    }

    if (!this.connected) {
      DebugUtils.warn("[SignalR] connection is not valid");
      return;
    }

    try {
      DebugUtils.log("[SignalR] trying to send the hub request: " + methodName);
      await this.connection.invoke(methodName, request);
    } catch (e) {
      DebugUtils.error(
        "[SignalR] An Error happened while sending the hub request: " +
          methodName
      );
      DebugUtils.trace(e);
    }
  }

  private response(message: string): void {
    if (!this.onResponsed) {
      return;
    }

    this.onResponsed(message);
  }

  get connected(): boolean {
    if (!this.connection) {
      return false;
    }

    return this.connection.state === HubConnectionState.Connected;
  }
}
