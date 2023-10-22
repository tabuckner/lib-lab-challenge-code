import { useLocation } from 'react-router-dom';

export const useGetIDFromRoute = (parentTerminal: string) => {
  const location = useLocation();
  return location.pathname.split(`${parentTerminal}/`)[1];
};
