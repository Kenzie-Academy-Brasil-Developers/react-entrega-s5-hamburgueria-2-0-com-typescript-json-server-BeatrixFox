import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterContext } from "../../providers/register";
import { useHistory } from "react-router-dom";

interface UserDataTwo {
  user: string;
  email: string;
  password: string;
  checkPassword: string;
}

const FormRegister = () => {
  const history = useHistory();
  const { registerForm } = useContext(RegisterContext);
  const schema = yup.object().shape({
    user: yup.string().required("Insira seu nome"),
    email: yup.string().required("Insira seu email"),
    password: yup.string().required("Insira sua senha"),
    checkPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataTwo>({ resolver: yupResolver(schema) });

  const handleForm = (data: UserDataTwo) => {
    registerForm(data, history);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <input placeholder="Nome" {...register("user")} />
      <p>{errors.user?.message}</p>
      <input placeholder="Email" {...register("email")} />
      <p> {errors.email?.message}</p>
      <input placeholder="Senha" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input
        placeholder="Confirmação de senha"
        {...register("checkPassword")}
      />
      <p>{errors.checkPassword?.message}</p>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormRegister;
