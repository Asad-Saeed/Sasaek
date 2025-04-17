'use client';

import { useMediaQueries } from '@react-hook/media-query';
import { createContext, useContext } from 'react';

const CheckDeviceContext = createContext({
  isLaptop: false,
  isLaptopSmall: false,
  isTabAndLaptop: false,    
  isTablet: false,
  isMobile: false,
});
export const useCheckDevice = () => {
  const matches = useContext(CheckDeviceContext);

  return {
    ...matches,
  };
};

export const MediaQueriesProvider = ({ children }: any) => {
  const { matches } = useMediaQueries({
    // screen: "screen",
    isLaptop: '(min-width: 769px)',
    isLaptopSmall: '(min-width: 769px) and (max-width: 1024px)',
    isTabAndLaptop: '(min-width: 426px)',
    isTablet: '(min-width: 435px) and (max-width: 768px)',
    isMobile: '(max-width: 768px)',
    //  isMobile: "(max-width: 425px)",
  });

  return (
    <CheckDeviceContext.Provider value={matches}>
      {children}
    </CheckDeviceContext.Provider>
  );
};
