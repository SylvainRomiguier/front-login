import { IHttpService } from "../IHttpService";

export const fetchAdapter = (): IHttpService => ({
  get: <T>(url: string, params: Record<string, string>) =>
    fetch(`${url}?${new URLSearchParams(params)}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => (response.json() as unknown) as T),
  post: <T>(url: string, body: Record<string, string>) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => (response.json() as unknown) as T),
});
