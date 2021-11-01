import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "./../../services/api";
import { History } from "history";
import { toast } from "react-toastify";

interface RegisterProps {
  children: ReactNode;
}

interface UserDataTwo {
  user: string;
  email: string;
  password: string;
  checkPassword: string;
}

interface RegisterProviderData {
  authToken: string;
  registerForm: (userData: UserDataTwo, history: History) => void;
}

export const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: RegisterProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const registerForm = (userData: UserDataTwo, history: History) => {
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
    <RegisterContext.Provider value={{ authToken, registerForm }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
