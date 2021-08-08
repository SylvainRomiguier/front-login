import { createContext } from "react";
import { fetchAdapter } from "./adapters/fetchAdapter";
import { IHttpService } from "./IHttpService";

interface IServices {
  httpService: IHttpService;
}

export const ServicesContext = createContext<IServices>({} as IServices);

export const Services: React.FC = ({ children }) => {
  const httpService = fetchAdapter();

  return (
    <ServicesContext.Provider value={{ httpService }}>
      {children}
    </ServicesContext.Provider>
  );
};
