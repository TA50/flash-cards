import { Container } from 'inversify';
import { createContext, PropsWithChildren, useContext } from 'react';
import { ServiceType } from './ServiceType';

export const inversifyContext = createContext<Container>(new Container());

interface Props {
  container: Container
}
export function IocProvider({ container, children }: PropsWithChildren<Props>) {
  return <inversifyContext.Provider value={container}>
    {children}
  </inversifyContext.Provider>
}

export const useService = <T,>(serviceType: ServiceType) => {
  const container = useContext(inversifyContext);
  return container.get<T>(serviceType);
}