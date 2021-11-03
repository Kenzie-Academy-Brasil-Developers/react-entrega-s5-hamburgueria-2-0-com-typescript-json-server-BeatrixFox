import styled from "styled-components";

export const MainContainerLoginPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 690px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 5px;

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    width: 943px;
    height: 461px;
    margin: 100px auto 0px;
  }
`;

export const ContainerLogin = styled.form`
  width: 90%;
  height: 461px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  h3 {
    margin: 16px 312px 19px 19px;
    text-align: left;
    color: var(--gray-scale-600);
    font-size: var(--font-size-heading3);
    font-weight: var(--font-w-bold);

    @media screen and (min-width: 1024px) {
      margin: 21px 424px 24px 14px;
    }
  }

  input {
    width: 90%;
    height: var(--input-mobile-height);
    margin-bottom: 25px;
    padding: 15px 20px;
    border-radius: var(--input-mobile-borderradius);
    border: none;
    background-color: var(--gray-scale-0);
    font-size: var(--font-size-headline);

    :focus {
      border: 2px solid var(--gray-scale-600);
      background-color: #ffffff;
    }

    ::placeholder {
      color: var(--gray-scale-300);
    }

    @media screen and (min-width: 500px) {
      width: var(--input-mobile-width);
    }

    @media screen and (min-width: 1024px) {
      width: var(--input-desktop-width);
    }
  }
  button {
    height: var(--input-mobile-height);
    width: 90%;
    margin-bottom: 19px;
    font-size: var(--font-size-headline);
    font-weight: var(--font-w-semibold);
    color: #ffffff;
    background-color: var(--color-primary);
    border-radius: var(--input-mobile-borderradius);
    border: none;
    cursor: pointer;

    @media screen and (min-width: 500px) {
      width: var(--input-mobile-width);
    }

    @media screen and (min-width: 1024px) {
      width: var(--input-desktop-width);
    }

    :hover {
      background-color: #93d7af;
    }
  }

  .cadastrar {
    margin-top: 19px;

    color: var(--gray-scale-300);
    background-color: var(--gray-scale-100);

    :hover {
      color: var(--gray-scale-100);
      background-color: var(--gray-scale-300);
    }
  }

  p {
    height: 38px;
    width: 250px;
    line-height: 19px;
    font-size: var(--font-size-body-600);
    font-weight: var(--font-w-regular);
    color: var(--gray-scale-300);
  }

  @media screen and (min-width: 500px) {
    width: 380px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 227px;
  margin: 0 auto;

  h1 {
    margin: 53px 0px 30px 0px;

    color: var(--gray-scale-600);

    text-align: left;
    font-size: 35px;
    font-weight: var(--font-w-bold);

    @media screen and (min-width: 1024px) {
      margin-left: 33px;
    }

    span {
      font-size: 27px;
      color: var(--color-secondary);
    }
  }

  @media screen and (min-width: 1024px) {
    width: 439px;
    height: 300px;
    margin: 20px auto 0px;
  }
`;

export const MessageCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 95px;
  background-color: #fff;
  border: 1px solid var(--gray-scale-100);
  border-radius: 5px;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

  div {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background-color: rgba(39, 174, 96, 0.1);
    position: relative;

    img {
      position: absolute;
      left: 30px;
      top: 18px;
      transform: translate(-50%);
    }
  }

  p {
    width: 70%;
    height: 85px;
    color: var(--gray-scale-300);
    line-height: 20px;
    text-align: left;
    font-size: 15px;

    span {
      color: var(--gray-scale-600);
      font-weight: var(--font-w-semibold);
    }
  }
  @media screen and (min-width: 600px) {
    width: 379px;
    p {
      width: 261px;
      height: 64px;
      line-height: 21px;
      font-size: 14px;
    }
  }
`;
