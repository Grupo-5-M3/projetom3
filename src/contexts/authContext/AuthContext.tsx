import { ReactNode, createContext, useState, useEffect, } from "react"
import api from "../../server/api"

interface IHomelessProps {
  img: string
  name: string
  CPF: number
  age: number
  state: string
  lastLocation: string[]
  contact: number
}

interface IUserConstext {
  isLogin: boolean;
  isModal: boolean;
  homeLess: IHomelessProps[]
  searchFor: string
  filtro: IHomelessProps[]

  setIsLogin: (prevState: boolean) => boolean | void;
  setIsModal: (prevState: boolean) => boolean | void;
  setSearchFor: React.Dispatch<React.SetStateAction<string>>
  setFiltro: React.Dispatch<React.SetStateAction<IHomelessProps[]>>
  next(): void
  goBack(): void
}

interface IChildrenProps {
  children: ReactNode
}

export const AuthContext = createContext<IUserConstext>({} as IUserConstext)

export default function AuthProvider({ children }: IChildrenProps) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [homeLess, setHomeLess] = useState<IHomelessProps[]>([])
  const [searchFor, setSearchFor] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [isModal, setIsModal] = useState(false);
  const [filtro, setFiltro] = useState<IHomelessProps[]>([] as IHomelessProps[])
  const [nextPage, setNextPage] = useState(1)


  function next() {
    setNextPage(nextPage + 1)
  }

  function goBack() {
    setNextPage(nextPage - 1)
  }

  useEffect(() => {
    all()
  }, [searchFor])

  function all() {
    api.get("database", {
      params: {
        _page: nextPage,
        _limit: 8
      }
    })
      .then(res => {
        setHomeLess(res.data)
      })
  }

  useEffect(() => {
    if (filtro.length === 0) {
      all()
    }
    else {
      setHomeLess(filtro)
    }
  }, [filtro, nextPage])

  return (
    <AuthContext.Provider value={{
      isLogin,
      isModal,
      homeLess,
      searchFor,
      filtro,

      setIsLogin,
      setIsModal,
      setSearchFor,
      setFiltro,
      goBack,
      next
    }}>
      {children}
    </AuthContext.Provider>
  )
}
