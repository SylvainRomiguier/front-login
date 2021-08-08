export interface IHttpService {
    get: <T>(url:string, params: Record<string, string>) => Promise<T>;
    post: <T>(url:string, body: Record<string, string>) => Promise<T>;
}