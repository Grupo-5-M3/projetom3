import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ResetPage(){
  const { pathname } = useLocation()
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null
}
