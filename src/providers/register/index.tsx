import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "./../../services/api";
import { History } from "history";
import { toast } from "react-toastify";
import { UserRegisterFormat } from "../../interfaces/interfaces";

interface RegisterProps {
  children: ReactNode;
}

interface RegisterProviderData {
  registerForm: (userData: UserRegisterFormat, history: History) => void;
}

export const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: RegisterProps) => {
  const history = useHistory();

  const registerForm = (userData: UserRegisterFormat, history: History) => {
    const { email, password, name } = userData;
    api
      .post("/register", {
        email: email,
        password: password,
        name: name,
      })
      .then((response) => {
        toast.success("Registro Efetuado com sucesso");

        history.push("/login");
      })
      .catch((err) => toast.error("Problemas de cadastro"));
  };

  return (
    <RegisterContext.Provider value={{ registerForm }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
