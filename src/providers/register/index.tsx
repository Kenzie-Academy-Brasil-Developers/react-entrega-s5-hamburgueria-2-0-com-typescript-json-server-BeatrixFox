import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "./../../services/api";
import { History } from "history";
import { toast } from "react-toastify";

interface RegisterProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
  checkPassword: string;
}

interface AuthProviderData {
  authToken: string;
  register: (userData: UserData, history: History) => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: RegisterProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const register = (userData: UserData, history: History) => {
    api
      .post("/register", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        setAuthToken(response.data.token);

        toast.success("Registro Efetuado com sucesso");

        history.push("/dashboard");
      })
      .catch((err) => toast.error("Problemas de cadastro"));
  };

  return (
    <AuthContext.Provider value={{ authToken, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
