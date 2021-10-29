import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { History } from "history";
import { toast } from "react-toastify";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;
  signIn: (userData: UserData, history: History) => void;
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

  const signIn = (userData: UserData, history: History) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        setAuthToken(response.data.token);

        toast.success("Login Efetuado com sucesso");

        history.push("/dashboard");
      })
      .catch((err) => toast.error("Problemas na autentificação"));
  };

  const Logout = (history: History) => {
    localStorage.clear();

    setAuthToken("");

    history.push("/");

    toast.info("Logout realizado");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
