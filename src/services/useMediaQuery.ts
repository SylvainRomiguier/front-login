import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (width: number) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = useCallback(() => setWindowWidth(window.innerWidth), []);
    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, [updateWindowWidth]);
return windowWidth < width;
} 