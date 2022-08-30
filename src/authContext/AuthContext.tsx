import { ReactNode } from "react"
import { createContext } from "vm"

interface IUserConstext {
}

interface IChildrenProps {
  children: ReactNode
}

export const AuthContext = createContext({})

export default function AuthProvider({ children }: IChildrenProps) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}