import { useEffect, useState } from "react";

export const ScreenSize = {
  Mobile: "Mobile",
  Tablet: "Tablet",
  Desktop: "Desktop",
  LargeDesktop: "LargeDesktop",
} as const;

export type ScreenSizeType = keyof typeof ScreenSize;

const BREAKPOINTS = [
  { size: ScreenSize.Mobile, width: 768 },
  { size: ScreenSize.Tablet, width: 1024 },
  { size: ScreenSize.Desktop, width: 1200 },
  { size: ScreenSize.LargeDesktop, width: 1600 },
];

export function getScreenSize(): ScreenSizeType {
  const width = window.innerWidth;

  const screenSize = BREAKPOINTS.reverse().find(
    ({ width: breakpointWidth }) => width >= breakpointWidth
  );

  return screenSize ? screenSize.size : ScreenSize.Mobile;
}

export function useScreenSize(): ScreenSizeType {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);

    setScreenSize(getScreenSize());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

export function useIsMobile(): boolean {
  const screenSize = useScreenSize();
  return screenSize === ScreenSize.Mobile;
}
