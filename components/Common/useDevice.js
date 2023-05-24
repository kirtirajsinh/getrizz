import React from "react";
import useWindowSize from "./useWindowSize";

const useDevice = () => {
  const [windowHeight, windowWidth] = useWindowSize();
  const isMobile = windowWidth < 950;
  const isDesktop = windowWidth >= 950;
  return { isMobile, isDesktop };
};

export default useDevice;
