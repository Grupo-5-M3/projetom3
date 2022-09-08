import { ReactNode, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { IRegisterPerson } from "../../pages/DashBoard/DashBoard";
import api from "../../server/api";

interface IUserConstext {
  isLogin: boolean;
  isModal: boolean;
  isRegister: boolean;
  homeLess: IRegisterPerson[];
  searchFor: string;
  isNextDisabled: boolean;
  isGoBackDisabled: boolean;
  isEdit: boolean

  setIsRegister: (prevState: boolean) => boolean | void;
  setIsLogin: (prevState: boolean) => boolean | void;
  setIsModal: (prevState: boolean) => boolean | void;
  setSearchFor: React.Dispatch<React.SetStateAction<string>>;
  next(): void;
  goBack(): void;
  search(): void;
  logout(): void;
  deleteHomeless({ id }: IRegisterPerson): void;
  editHomeless(data: IRegisterPerson): void;
  setEdit: React.Dispatch<React.SetStateAction<IRegisterPerson>>
  setDel: React.Dispatch<React.SetStateAction<IRegisterPerson>>
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>

}

interface IChildrenProps {
  children: ReactNode;
}
const customId = "custom-id-yes";

export const AuthContext = createContext<IUserConstext>({} as IUserConstext);

export default function AuthProvider({ children }: IChildrenProps) {

  const [isLogin, setIsLogin] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [searchFor, setSearchFor] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isGoBackDisabled, setIsGoBackDisabled] = useState(true);
  const [homeLess, setHomeLess] = useState<IRegisterPerson[]>([]);
  const [isEdit, setIsEdit] = useState(false)
  const [edit, setEdit] = useState<IRegisterPerson>({} as IRegisterPerson)
  const [del, setDel] = useState<IRegisterPerson>({} as IRegisterPerson)

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN')
    token ? setIsLogin(true) : setIsLogin(false)
  }, [])

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

  function search() {
    api
      .get(`database/?name_like=${searchFor}`)
      .then((res) => setHomeLess(res.data));
  }

  function logout() {
    setIsLogin(false);
    localStorage.clear();
  }

  function deleteHomeless(user: IRegisterPerson) {
    const token = localStorage.getItem("@TOKEN")
    if (token) {
      api.delete(`database/${user.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
        }
      })
      toast.success("Excluido com sucesso", {
        autoClose: 1500,
        toastId: customId,
      })
    } else {
      toast.error(`Necessario login`)
    }
  }

  function editHomeless(data: IRegisterPerson) {
    const token = localStorage.getItem("@TOKEN")

    if (token) {
      api.patch(`database/${edit.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
        },
      })
      toast.success("Editado com sucesso", {
        autoClose: 1500,
        toastId: customId,
      })
    } else {
      toast.error(`Necessario login`)
    }
    setIsEdit(false)
  }

  useEffect(() => {
    api
      .get("database?_expand=user", {
        params: {
          _page: nextPage,
          _limit: 8,
        },
      })
      .then((res) => {
        setHomeLess(res.data);
      });
  }, [searchFor, nextPage, deleteHomeless, editHomeless]);

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
        isEdit,

        setIsRegister,
        setIsLogin,
        setIsModal,
        setSearchFor,
        goBack,
        next,
        search,
        logout,
        deleteHomeless,
        editHomeless,
        setEdit,
        setDel,
        setIsEdit

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
