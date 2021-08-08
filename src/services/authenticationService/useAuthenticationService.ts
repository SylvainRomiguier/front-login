import { useCallback, useContext } from "react";
import { ServicesContext } from "..";

type Response = Record<string, string>;

export const useAuthenticationService = (): {
    sendCredentials: (username:string, password:string) => Promise<Response>;
} => {
  const {
    httpService: { post },
  } = useContext(ServicesContext);

  const sendCredentials = useCallback(
    (username: string, password: string) =>
      post<Response>(
        "https://identity-server.grimoire-systems.fr/users/login",
        {
          username,
          password,
        }
      ),
    []
  );

  return {
    sendCredentials,
  };
};
