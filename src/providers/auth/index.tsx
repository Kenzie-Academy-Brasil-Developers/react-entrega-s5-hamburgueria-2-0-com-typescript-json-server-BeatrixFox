import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "./../../services/api";
import { History } from "history";
import { UserLoginFormat } from "../../interfaces/interfaces";
import toast from "react-hot-toast";

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  authToken: string;
  userId: string;
  signIn: (userData: UserLoginFormat, history: History) => void;
  Logout: (history: History) => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || ""
  );

  const signIn = (userData: UserLoginFormat, history: History) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id);
        setAuthToken(response.data.token);
        setUserId(response.data.user.id);

        toast.success("Login Efetuado com sucesso");

        history.push("/");
      })
      .catch((err) =>
        toast.error("Problemas na autentificação. Tente novamente")
      );
  };

  const notifyLogout = () =>
    toast(
      <span>
        Você fez o logout! Para acessar o carrinho, faça seu login novamente.
      </span>,
      {
        icon: "🛑",
        id: "2",
      }
    );

  const Logout = (history: History) => {
    localStorage.clear();

    setAuthToken("");
    setUserId("");

    history.push("/login");
    notifyLogout();
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
