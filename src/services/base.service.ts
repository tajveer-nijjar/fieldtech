import axios from "axios";

import { CnxError } from "@/models/system";
import Constants, { Namespaces, StoreActions, Texts } from "@/constants";

export async function getAsync<T>(path: string): Promise<T[]>;
export async function getAsync<T>(path: string): Promise<T[]> {
  const response = await axios.get(path);
  return response.data;
}

export async function postAsync<T>(path: string, content: T): Promise<any> {
  debugger;
  try {
    const response = await fetch(
      path,
      await GenerateHeadersForPost(JSON.stringify(content))
    );

    return await handleResponseAsync(response);
  } catch (e) {
    if (e instanceof CnxError) {
      throw e;
    }

    const message = e instanceof Error ? e.message : Texts.UnknownError;
    throw new Error(`${Constants.ApiErrorPrefix} ${message}`);
  }
}

function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json;charset=utf-8");
  headers.append("Access-Control-Allow-Origin", "http://localhost:90");
  headers.append("Access-Control-Allow-Credentials", "true");

  return headers;
}

async function GenerateHeadersForPost(content: string): Promise<RequestInit> {
  const headers = getHeaders();

  return {
    method: "POST",
    body: content,
    headers: headers
  };
}

export async function handleResponseAsync(
  res: Response,
  enableAuth = true
): Promise<any> {
  const text = await res.text();

  if (!text || text.length === 0) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
