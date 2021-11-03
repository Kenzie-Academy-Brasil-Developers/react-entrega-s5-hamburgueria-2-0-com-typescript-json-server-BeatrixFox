import { createContext, useContext, useState, ReactNode } from "react";
import api from "../../services/api";
import { useAuth } from "../auth/index";
import { GetCartFormat, MenuItemFormat } from "../../interfaces/interfaces";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface CartProps {
  children: ReactNode;
}

interface CartData {
  cart: GetCartFormat[];
  handleAddToCart: (data: MenuItemFormat) => void;
  handleQuantitiesItemInCart: (
    id: number,
    quantity: number,
    subtract: boolean
  ) => void;
  deleteItemInCart: (id: number) => void;
  deleteAllItemsInCart: () => void;
}

const CartContext = createContext<CartData>({} as CartData);

export const CartProvider = ({ children }: CartProps) => {
  const { userId, authToken } = useAuth();
  const [cart, setCart] = useState<GetCartFormat[]>([] as GetCartFormat[]);

  const getItemCart = () => {
    api
      .get(`/cart?userId=${userId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => setCart(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getItemCart();
  }, []);

  useEffect(() => {
    getItemCart();
  }, [userId, cart]);

  const notifyAlreadyAdded = () =>
    toast(
      <>
        Produto já está no carrinho! Para alterar quantidade, altere no
        carrinho!
      </>,
      {
        icon: "🛑",
        id: "1",
        style: {
          backgroundColor: "var(--feedback-palette-warning)",
        },
      }
    );

  const errorUnlogged = () => {
    toast.error("Faça o login para adicionar itens ao carrinho");
  };

  const successAddedToCart = () => {
    toast.success("Produto adicionado ao carrinho!");
  };

  const handleAddToCart = (data: MenuItemFormat) => {
    const { name, price } = data;
    const isItemAlreadyAdded = cart.some((item) => item.name === name);

    if (cart.length === 0 || isItemAlreadyAdded === false) {
      api
        .post(
          `/cart`,
          {
            name: name,
            price: price,
            quantity: 1,
            userId: userId,
          },
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((response) => {
          successAddedToCart();
        })
        .catch((e) => errorUnlogged());
    } else {
      notifyAlreadyAdded();
    }
  };

  const handleQuantitiesItemInCart = (
    id: number,
    quantity: number,
    subtract: boolean
  ) => {
    let newQuantity = 0;
    if (subtract === true) {
      newQuantity = quantity - 1;
    } else {
      newQuantity = quantity + 1;
    }

    if (newQuantity === 0) {
      deleteItemInCart(id);
    } else {
      api
        .patch(
          `/cart/${id}`,
          {
            quantity: newQuantity,
            userId: userId,
          },
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => console.log(e.response.data.message));
    }
  };

  const deleteItemInCart = (id: number) => {
    api
      .delete(`/cart/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        toast.success("Item removido com sucesso");
      })
      .catch((e) => console.log(e.response.data.message));
  };

  const deleteAllItemsInCart = () => {
    cart.map((item) => deleteItemInCart(item.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleQuantitiesItemInCart,
        deleteItemInCart,
        deleteAllItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
