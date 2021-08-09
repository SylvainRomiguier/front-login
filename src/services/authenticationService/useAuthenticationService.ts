import { useCallback, useContext } from "react";
import { ServicesContext } from "..";

type Response = Record<string, string>;

export const useAuthenticationService = (): {
    sendCredentials: (email:string, password:string) => Promise<Response>;
} => {
  const {
    httpService: { post },
  } = useContext(ServicesContext);

  const sendCredentials = useCallback(
    (email: string, password: string) =>
      post<Response>(
        "https://identity-server.grimoire-systems.fr/users/login",
        {
          email,
          password,
        }
      ),
    []
  );

  return {
    sendCredentials,
  };
};
