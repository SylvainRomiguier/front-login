import { useCallback, useContext } from "react";
import { ServicesContext } from "..";

export type APIResponse = Record<string, string>;

export const useAuthenticationService = (): {
    sendCredentials: (email:string, password:string) => Promise<APIResponse>;
} => {
  const {
    httpService: { post },
  } = useContext(ServicesContext);

  const sendCredentials = useCallback(
    (email: string, password: string) =>
      post<APIResponse>(
        "https://identity-server.grimoire-systems.fr/users/login",
        {
          email,
          password,
        }
      ),
    [post]
  );

  return {
    sendCredentials,
  };
};
