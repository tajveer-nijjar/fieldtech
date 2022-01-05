import { IsDev, IsLocal } from "@/configs/env";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function updateLogContent(log: any): any {
  if (typeof log === "string") {
    log = `[CNX] ${log}`;
  }

  return log;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function log(log: any): void {
  if (!IsLocal) {
    return;
  }

  console.log(updateLogContent(log));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function warn(log: any): void {
  if (!IsLocal) {
    return;
  }

  console.warn(updateLogContent(log));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function error(log: any): void {
  if (!IsLocal) {
    return;
  }

  console.error(updateLogContent(log));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function trace(log: any): void {
  if (!IsLocal) {
    return;
  }

  console.trace(updateLogContent(log));
}
