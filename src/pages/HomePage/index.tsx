import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import { ListContainerHome, MainContainerHome } from "./style";
import { MenuItemFormat } from "../../interfaces/interfaces";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [menuList, setMenuList] = useState<MenuItemFormat[]>(
    [] as MenuItemFormat[]
  );

  useEffect(() => {
    axios
      .get(" https://apihamburgueria-raissalst.herokuapp.com/menulist")
      .then((response) => {
        setMenuList([...response.data]);
        // console.log(response);
      })
      .catch(() => console.log("erro"));
  }, []);

  return (
    <>
      <NavBar />
      <MainContainerHome>
        <ListContainerHome>
          {menuList.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </ListContainerHome>
      </MainContainerHome>
    </>
  );
};

export default HomePage;
