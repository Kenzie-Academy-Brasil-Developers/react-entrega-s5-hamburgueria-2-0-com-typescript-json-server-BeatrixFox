import shoppingbag from "../../assets/shopping-bag.png";

import {
  ContainerRegister,
  MainContainerRegisterPage,
  MessageCard,
  TitleContainer,
} from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { UserRegisterFormat } from "../../interfaces/interfaces";
import { useRegister } from "../../providers/register";

const RegisterPage = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .max(50, "Campo obrigatório. Máximo de 50 dígitos.")
      .required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .min(6, "Campo obrigatório. Mínimo de 6 dígitos")
      .required("Campo obrigatório. Senha deve ter no mínimo 6 caracteres."),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormat>({ resolver: yupResolver(formSchema) });

  const { registerForm } = useRegister();

  const sendToRegisterHandling = (data: UserRegisterFormat) => {
    registerForm(data, history);
  };

  return (
    <>
      <MainContainerRegisterPage>
        <TitleContainer>
          <Link to="/">
            <h1>
              Burguer <span>Kenzie</span>
            </h1>
          </Link>
          <MessageCard>
            <div>
              <img src={shoppingbag} alt="bag" />
            </div>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <span>melhores</span> ingredientes.
            </p>
          </MessageCard>
        </TitleContainer>
        <ContainerRegister onSubmit={handleSubmit(sendToRegisterHandling)}>
          <h3>Cadastro</h3>
          <Link className="linkToLogin" to="/login">
            <p>Retornar para o login</p>
          </Link>

          <input placeholder="Nome" {...register("name")} />
          {errors.name?.message}
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}
          <input
            placeholder="Confirmar Senha"
            type="password"
            {...register("password_confirm")}
          />
          {errors.password_confirm?.message}
          <button type="submit">Cadastrar</button>
        </ContainerRegister>
      </MainContainerRegisterPage>
    </>
  );
};

export default RegisterPage;
