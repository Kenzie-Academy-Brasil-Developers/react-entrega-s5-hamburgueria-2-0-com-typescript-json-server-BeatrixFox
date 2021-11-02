import styled from "styled-components";

export const MainContainerRegisterPage = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 414px;
  height: 756px;
  margin: 0 auto;

  background-color: #ffffff;
  border-radius: 5px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 1023px;
    height: 527px;
    margin: 100px auto 0px;
  }
`;

export const ContainerRegister = styled.form`
  position: relative;

  width: 380px;
  height: 527px;
  margin: 0 auto;

  border-radius: 5px;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 461px;
  }

  h3 {
    margin: 33px 0px 32px 18px;
    text-align: left;

    color: var(--gray-scale-600);

    font-size: var(--font-size-heading3);
    font-weight: var(--font-w-bold);

    @media screen and (min-width: 1024px) {
      /* margin: 28px 0px 32px 18px; */
    }
  }

  p {
    width: 141px;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    color: var(--gray-scale-300);
    text-decoration: underline;
    position: absolute;
    top: 33px;
    right: 19px;
  }

  input {
    height: var(--input-mobile-height);
    width: var(--input-mobile-width);
    margin-bottom: 25px;
    padding: 15px 20px;

    border-radius: var(--input-mobile-borderradius);
    border: none;

    /* outline: red; */

    background-color: var(--gray-scale-0);

    font-size: var(--font-size-headline);

    :focus {
      border: 2px solid var(--gray-scale-600);
      background-color: #ffffff;
    }

    ::placeholder {
      color: var(--gray-scale-300);
    }

    @media screen and (min-width: 1024px) {
      width: var(--input-desktop-width);
    }
  }
  button {
    height: var(--input-mobile-height);
    width: var(--input-mobile-width);

    font-size: var(--font-size-headline);
    font-weight: var(--font-w-semibold);

    color: var(--gray-scale-300);
    background-color: var(--gray-scale-100);

    border-radius: var(--input-mobile-borderradius);
    border: none;

    cursor: pointer;

    @media screen and (min-width: 1024px) {
      width: var(--input-desktop-width);
    }

    :hover {
      color: var(--gray-scale-100);
      background-color: var(--gray-scale-300);
    }
  }
`;

export const TitleContainer = styled.div`
  width: 380px;
  height: 227px;
  margin: 0 auto;

  h1 {
    text-align: left;
    font-size: 35px;
    margin: 53px 0px 30px 0px;

    color: var(--gray-scale-600);

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

  width: 379px;
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
    width: 261px;
    height: 64px;
    line-height: 21px;

    text-align: left;
    font-size: 14px;
    color: var(--gray-scale-300);

    span {
      color: var(--gray-scale-600);
      font-weight: var(--font-w-semibold);
    }
  }
`;
