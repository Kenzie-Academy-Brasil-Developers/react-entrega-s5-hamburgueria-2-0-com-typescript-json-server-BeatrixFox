import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import { ListContainerHome, MainContainerHome } from "./style";
import { MenuItemFormat } from "../../interfaces/interfaces";
import { useState, useEffect } from "react";
import api from "../../services/api";

const HomePage = () => {
  const [menuList, setMenuList] = useState<MenuItemFormat[]>(
    [] as MenuItemFormat[]
  );

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setMenuList([...response.data]);
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
