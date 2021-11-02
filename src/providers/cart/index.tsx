import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useAuth } from "../auth/index";

interface CartProps {
  children: ReactNode;
}

interface Product {
  id: number;
  name: string;
  category: string;
  quant: number;
  price: number;
  image: string;
  userId: number;
}

interface UserData {
  id: number;
  email: string;
  password: string;
}

interface CartProviderData {
  cart: Product[];

  authToken: string;

  addProductToCart: (product: Product) => void;

  attProduct: (product: Product) => void;

  deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [checkMove, setCheckMove] = useState(false);
  const { authToken } = useAuth();
  const [numQ , setNumQ] = useState<Product>({product.quant});


  const addQuant = ({quant}: Product) => {
	if(quant < 10){
		setNumQ(numQ + 1)
	} 
	setNumQ(numQ) 
  }

  const subQuant = () => {
	if(quant > 0){
		setNumQ(quant - 1)
	} 
	setNumQ(quant) 
  }

  const getCart = (id: UserData) => {
    api
      .get(`/cart?userId=${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setCart(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const addProductToCart = (product: Product) => {
    api
      .post(
        "/cart",
        {
          name: product.name,
          category: product.category,
          price: product.price,
          quant: product.quant,
          image: product.image,
          userId: product.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err, product, authToken));
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    api
      .delete(`/cart/${productToBeDeleted.id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setCheckMove(!checkMove);
        toast.success("Produto removido com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  const attProduct = ({id, quant} : Product) => {
    api
      .patch(
        `/cart/${id}/`,{ 
		headers: {
          Authorization: `Bearer ${authToken}`,
        },},
        {
          quant: quant < 10 && quant + 1
        })
      .then((response) => {
        setCheckMove(!checkMove);
        if (!response.data.achieved) {
          toast.success("Hábito atualizado com sucesso!");
        } else {
          toast.error("Hábito já concluído!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

/*
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import api from "../../services/api";
import { useUser } from "../user/index";

interface CartProviderProps {
    children: ReactNode;
}

interface ProductTypes {
    name: string;
    category: string;
    price: number;
    image: string;
    userId: number;
}

interface CartProviderData {
    getCartFromApi: () => void;
    addItemToCart: (product: ProductTypes) => void;
    delItenFromCart: (productId: number) => void;
    cartItems: any;
    
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
    const { accessToken } = useUser();
    const [ cartItems, setCartItems ] = useState<ProductTypes[]>([])

    const getCartFromApi = () => {
        api.get("/cart", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
                setCartItems(response.data)    
                console.log(response.data)
            })
            .catch((err) => console.log(err));
    };

    const addItemToCart = ({ ...product }: ProductTypes) => {
        api.post(
            "/cart",
            {
                name: product.name,
                category: product.category,
                price: product.price,
                image: product.image,
                userId: product.userId,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err, product, accessToken));
    };

    const delItenFromCart = (productId: number) => {
        
        api.delete(`/cart/${productId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => setCartItems([]))
            .catch((err) => console.log(err, accessToken));
    };

    

    return (
        <CartContext.Provider
            value={{ getCartFromApi, addItemToCart, delItenFromCart, cartItems  }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
*/
