import { ReactNode } from "react";
import { AnimaPage } from "./styles";
interface IAnimateProps{
  children:ReactNode
}
const AnimatedPage = ({ children }:IAnimateProps) => {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <AnimaPage 
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}>
      {children}
    </AnimaPage>
  );
};

export default AnimatedPage;
