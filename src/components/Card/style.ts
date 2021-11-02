import styled from "styled-components";

export const ItemLiContainer = styled.li`
  position: relative;

  width: 300px;
  height: 346px;
  margin: 0 auto 50px;

  text-align: center;
  font-size: 22px;

  border: 2px solid var(--gray-scale-100);
  border-radius: 5px;

  :hover {
    border: 2px solid var(--color-primary);

    button {
      background-color: var(--color-primary);
    }
  }

  div {
    width: 100%;
    height: 150px;

    background-color: var(--gray-scale-0);
  }

  img {
    width: 170px;
    height: 150px;

    object-fit: cover;
  }

  h3 {
    position: absolute;
    bottom: 136px;
    left: 20px;

    width: 260px;
    height: 40px;

    color: var(--gray-scale-600);

    text-align: left;
    font-size: 18px;
    font-weight: var(--font-w-bold);
    line-height: 40px;
  }

  h5 {
    position: absolute;
    bottom: 111px;
    left: 20px;

    width: 260px;
    height: 20px;

    color: var(--gray-scale-300);

    text-align: left;
    font-size: 12px;
    font-weight: var(--font-w-regular);
    line-height: 20px;
  }

  p {
    position: absolute;
    bottom: 77px;
    left: 20px;

    width: 260px;
    height: 24px;

    color: var(--color-primary);

    text-align: left;
    font-size: 14px;
    font-weight: var(--font-w-semibold);
    line-height: 24px;
  }

  button {
    position: absolute;
    bottom: 23px;
    left: 20px;

    width: var(--button-medium-width);
    height: var(--button-medium-height);

    background-color: var(--gray-scale-100);
    color: #fff;
    border: none;
    border-radius: var(--button-medium-borderradius);

    font-size: 14px;
    font-weight: var(--font-w-semibold);

    cursor: pointer;
  }
`;
