import { ReactNode, createContext } from "react"

interface IUserConstext {

}

interface IChildrenProps {
  children: ReactNode
}

export const AuthContext = createContext<IUserConstext>({} as IUserConstext)

export default function AuthProvider({ children }: IChildrenProps) {



  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}