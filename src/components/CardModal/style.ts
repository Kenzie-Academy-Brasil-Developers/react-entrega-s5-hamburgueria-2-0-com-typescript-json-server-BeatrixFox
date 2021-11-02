import styled from "styled-components";

export const CardModalContainer = styled.div`
  /* position: relative; */

  width: 375px;
  min-height: 212px;
  max-height: 500px;
  margin: 80px auto;

  border-radius: 5px;

  scroll-behavior: smooth;
  overflow-y: scroll;

  @media screen and (min-width: 1024px) {
    width: 500px;
    min-height: 158px;
  }
`;

export const GreenTopBar = styled.div`
  position: relative;

  width: 100%;
  height: 54px;

  border-radius: 5px 5px 0px 0px;
  background-color: var(--color-primary);

  h2 {
    position: absolute;
    top: 13px;
    left: 22px;

    width: 335px;
    height: 28px;

    text-align: left;
    line-height: 28px;
    font-size: 18px;
    font-weight: var(--font-w-bold);
    color: #fff;
  }
`;

export const CartInformation = styled.div`
  position: relative;

  width: 100%;
  min-height: 158px;

  text-align: center;
  background-color: #fff;
  border-radius: 0px 0px 5px 5px;
  border: 1px solid #fff;

  h4 {
    position: absolute;
    top: 50px;
    left: 20px;

    width: 342px;
    height: 40px;

    text-align: center;
    line-height: 40px;
    font-size: 18px;
    font-weight: var(--font-w-bold);
    color: var(--gray-scale-600);

    @media screen and (min-width: 1024px) {
      left: 80px;
    }
  }

  h6 {
    position: absolute;
    top: 90px;
    left: 20px;

    width: 345px;
    height: 18px;

    text-align: center;
    line-height: 14px;
    font-size: 14px;
    font-weight: var(--font-w-bold);
    color: var(--gray-scale-300);

    @media screen and (min-width: 1024px) {
      left: 78px;
    }
  }

  button {
    height: 60px;
    width: 330px;
    margin: 14px auto 20px;

    font-size: 16px;
    font-weight: var(--font-w-semibold);

    color: var(--gray-scale-300);
    background-color: var(--gray-scale-100);

    border-radius: 8px;
    border: none;

    cursor: pointer;

    @media screen and (min-width: 1024px) {
      width: 450px;
    }

    :hover {
      color: var(--gray-scale-100);
      background-color: var(--gray-scale-300);
    }
  }
`;

export const CardItemChosen = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  width: 330px;
  height: 80px;
  margin: 20px auto;

  background-color: #fff;

  @media screen and (min-width: 1024px) {
    width: 450px;
  }

  .containerItemImage {
    position: relative;
    width: 80px;
    height: 80px;

    border-radius: 5px;
    background-color: var(--gray-scale-100);
  }

  .containerItemImage img {
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%);

    width: 55px;
    height: 55px;

    object-fit: cover;
  }

  .containerDescriptionItem {
    position: relative;

    width: 250px;
    height: 80px;

    background-color: #fff;
    border: none;

    @media screen and (min-width: 1024px) {
      width: 370px;
    }
    h3 {
      position: absolute;
      top: 0;
      left: 8px;

      height: 18px;

      text-align: left;
      line-height: 18px;
      color: var(--gray-scale-600);
      font-size: 18px;
      font-weight: var(--font-w-bold);
    }

    svg {
      position: absolute;
      top: 5px;
      right: 8px;

      color: var(--gray-scale-300);

      cursor: pointer;
    }
    .quantityContainer {
      position: absolute;
      bottom: 0px;
      left: 10px;

      direction: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;

      width: 110px;
      height: 35px;

      line-height: 1;
    }

    .quantityContainer button {
      width: 30px;
      height: 35px;
      margin: 0;
      padding: 0;

      background-color: var(--gray-scale-0);
      border: none;
      color: var(--color-secondary);
    }

    .quantityContainer p {
      display: inline;

      max-width: 50px;
      height: 35px;
      flex-grow: 2;
      padding: 0px 20px;

      text-align: center;
      line-height: 35px;
      font-size: 12px;
      color: var(--gray-scale-600);
      font-weight: var(--font-w-regular);
    }
  }
`;

export const TotalCartInfo = styled.div`
  width: 330px;
  height: 30px;

  background-color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  text-align: left;
  font-size: 14px;
  font-weight: var(--font-w-semibold);

  @media screen and (min-width: 1024px) {
    width: 450px;
  }

  .total {
    margin: 0;
    color: var(--gray-scale-600);
  }

  .totalNumber {
    margin: 0;
    color: var(--gray-scale-300);
  }
`;
