import axios from "axios";

export async function getAsync<T>(path: string): Promise<T[]>;
export async function getAsync<T>(path: string): Promise<T[]> {
  const response = await axios.get(path);
  return response.data;
}

export async function postAsync<T>(path: string, content: T): Promise<any> {
  debugger;

  const x = await axios.post(path, content);
  debugger;
}

function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json;charset=utf-8");
  headers.append("Access-Control-Allow-Origin", "http://localhost:90");
  headers.append("Access-Control-Allow-Credentials", "true");

  return headers;
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
