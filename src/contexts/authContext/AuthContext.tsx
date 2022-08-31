import { ReactNode, createContext, useState, } from "react"

interface IHomelessProps {
  img: string
  name: string
  CPF: number
  age: number
  state: string
  lastLocation: string
  contact: number
}

interface IUserConstext {
  isLogin: boolean;
  setIsLogin: (prevState: boolean) => boolean | void;
  isModal: boolean;
  setIsModal: (prevState: boolean) => boolean | void;
  homeLess: IHomelessProps[]
}

interface IChildrenProps {
  children: ReactNode
}

export const AuthContext = createContext<IUserConstext>({} as IUserConstext)

export default function AuthProvider({ children }: IChildrenProps) {
  const [isLogin, setIsLogin] = useState(false)
  const [isModal, setIsModal] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [homeLess, setHomeLess] = useState<IHomelessProps[]>([
    {
      img: "../../img/people01.jpg",
      name: "Carlos",
      CPF: 123456789,
      age: 34,
      state: "Desabrigado",
      lastLocation: "Estado da contantina, 22",
      contact: 4845698745
    },
    {
      img: "../../img/people02.jpg",
      name: "Carlos",
      CPF: 123456789,
      age: 34,
      state: "Desabrigado",
      lastLocation: "Estado da contantina, 22",
      contact: 4845698745
    },
    {
      img: "../../img/people01.jpg",
      name: "Carlos",
      CPF: 123456789,
      age: 34,
      state: "Desabrigado",
      lastLocation: "Estado da contantina, 22",
      contact: 4845698745
    },
    {
      img: "../../img/people02.jpg",
      name: "Carlos",
      CPF: 123456789,
      age: 34,
      state: "Desabrigado",
      lastLocation: "Estado da contantina, 22",
      contact: 4845698745
    }
  ])

  return (
    <AuthContext.Provider value={{
      isLogin,
      setIsLogin,
      isModal,
      setIsModal,
      homeLess,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
