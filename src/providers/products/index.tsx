import { createContext, ReactNode, useContext, useState } from "react";
import api from "./../../services/api";
import { toast } from "react-toastify";

interface ProductsProps {
  children: ReactNode;
}

interface ProductsProviderData {
  productsList: Array<[string, any]>;
  productsGet: () => void;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [productsList, setProductsList] = useState([]);

  const productsGet = () => {
    api
      .get("/products")
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((err) => toast.error("Problemas na autentificação"));
  };

  return (
    <ProductsContext.Provider value={{ productsList, productsGet }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
