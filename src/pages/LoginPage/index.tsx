import shoppingbag from "../../assets/shopping-bag.png";
import { useHistory } from "react-router";

import {
  ContainerLogin,
  MainContainerLoginPage,
  MessageCard,
  TitleContainer,
} from "./style";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { UserLoginFormat } from "../../interfaces/interfaces";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const history = useHistory();

  const { signIn } = useAuth();

  const sendTo = (path: string) => {
    history.push(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormat>({ resolver: yupResolver(formSchema) });

  const handleSubmitLogin = (data: UserLoginFormat) => {
    signIn(data, history);
  };

  return (
    <>
      <MainContainerLoginPage>
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
        <ContainerLogin onSubmit={handleSubmit(handleSubmitLogin)}>
          <h3>Login</h3>
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}
          <button type="submit" className="logar">
            Logar
          </button>
          <p>
            Crie sua conta para saborear muitas delícias e matar a sua fome!
          </p>
          <button className="cadastrar" onClick={() => sendTo("/register")}>
            Cadastrar
          </button>
        </ContainerLogin>
      </MainContainerLoginPage>
    </>
  );
};

export default LoginPage;
