import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ResetPage(){
  const resetRout = useLocation()
  const resetScroll = ()=> {
    window.scrollTo(0,0)
  }
  useEffect(()=>{
    resetScroll()
  },[resetRout])
  return null
}
