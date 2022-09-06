import { ReactNode, createContext, useState, useEffect } from "react";
import HomeLess from "../../pages/HomeLess/HomeLess";
import api from "../../server/api";
interface IHomelessProps {
  img: string;
  name: string;
  CPF: number;
  age: number;
  state: string;
  lastLocation: string;
  contact: number;
}

interface IUserConstext {
  isLogin: boolean;
  isModal: boolean;

  isRegister: boolean;
  setIsRegister: (prevState: boolean) => boolean | void;

  homeLess: IHomelessProps[];
  searchFor: string;
  isNextDisabled: boolean;
  isGoBackDisabled: boolean;

  setIsLogin: (prevState: boolean) => boolean | void;
  setIsModal: (prevState: boolean) => boolean | void;
  setSearchFor: React.Dispatch<React.SetStateAction<string>>;
  next(): void;
  goBack(): void;
  teste(): void;
  logout(): void;
}

interface IChildrenProps {
  children: ReactNode;
}

export const AuthContext = createContext<IUserConstext>({} as IUserConstext);

export default function AuthProvider({ children }: IChildrenProps) {

  const [isLogin, setIsLogin] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [searchFor, setSearchFor] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isGoBackDisabled, setIsGoBackDisabled] = useState(true);
  useEffect(()=>{
    const token = localStorage.getItem('@TOKEN')
    token? setIsLogin(true) : setIsLogin(false)
  },[])
  const [homeLess, setHomeLess] = useState<IHomelessProps[]>([]);

  function next() {
    api
      .get("database", {
        params: {
          _page: nextPage + 1,
          _limit: 8,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          setNextPage(nextPage + 1);
        } else if (res.data.length < 0) {
          setIsNextDisabled(true);
        }
      });
    if (nextPage > 0) {
      setIsGoBackDisabled(false);
    }
  }

  function goBack() {
    api
      .get("database", {
        params: {
          _page: nextPage,
          _limit: 8,
        },
      })
      .then((res) => {
        if (nextPage <= 1) {
          setIsGoBackDisabled(false);
        } else if (nextPage > 1) {
          setIsGoBackDisabled(true);
          setIsNextDisabled(false);
        }
      });
    setNextPage(nextPage - 1);
  }

  function teste() {
    api
      .get(`database/?name_like=${searchFor}`)
      .then((res) => setHomeLess(res.data));
  }

  function logout() {
    setIsLogin(false);
    localStorage.clear();
  }

  useEffect(() => {
    api
      .get("database", {
        params: {
          _page: nextPage,
          _limit: 8,
        },
      })
      .then((res) => {
        setHomeLess(res.data);
      });
  }, [searchFor, nextPage]);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        isModal,
        homeLess,
        searchFor,
        isNextDisabled,
        isGoBackDisabled,
        isRegister,
        setIsRegister,
        setIsLogin,
        setIsModal,
        setSearchFor,
        goBack,
        next,
        teste,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
