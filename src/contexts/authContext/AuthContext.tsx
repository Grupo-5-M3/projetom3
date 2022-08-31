import { ReactNode, createContext, useState, } from "react"

interface IUserConstext {
isLogin: boolean;
setIsLogin:(prevState:boolean)=> boolean | void;
isModal:boolean;
setIsModal:(prevState:boolean)=> boolean | void;
}

interface IChildrenProps {
  children: ReactNode
}

export const AuthContext = createContext<IUserConstext>({} as IUserConstext)

export default function AuthProvider({ children }: IChildrenProps) {
  const [isLogin,setIsLogin]= useState(true)
  const [isModal, setIsModal] = useState(false);



  return (
    <AuthContext.Provider value={{
      isLogin,
      setIsLogin,
      isModal,
      setIsModal
    }}>
      {children}
    </AuthContext.Provider>
  )
}
