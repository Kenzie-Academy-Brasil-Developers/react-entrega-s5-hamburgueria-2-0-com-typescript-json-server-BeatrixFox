import {
  CardItemChosen,
  CardModalContainer,
  CartInformation,
  GreenTopBar,
  TotalCartInfo,
} from "./style";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../providers/cart";
import shoppingbag from "../../assets/shopping-bag.png";

export const CardModal = () => {
  const {
    cart,
    handleQuantitiesItemInCart,
    deleteItemInCart,
    deleteAllItemsInCart,
  } = useCart();

  // console.log("cart no card modal", cart);
  return (
    <CardModalContainer>
      <GreenTopBar>
        <h2>Carrinho de compras</h2>
      </GreenTopBar>
      <CartInformation>
        {cart.length === 0 && (
          <>
            <h4>Sua sacola está vazia</h4>

            <h6>Adicione itens</h6>
          </>
        )}

        {cart.length !== 0 &&
          cart.map((item) => (
            <CardItemChosen key={item.name}>
              <div className="containerItemImage">
                <img src={shoppingbag} alt="shopbag" />
              </div>

              <div className="containerDescriptionItem">
                <h3>{item.name}</h3>
                <FaTrash onClick={() => deleteItemInCart(item.id)} />
                <div className="quantityContainer">
                  <button
                    onClick={() =>
                      handleQuantitiesItemInCart(item.id, item.quantity, true)
                    }
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      handleQuantitiesItemInCart(item.id, item.quantity, false)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </CardItemChosen>
          ))}

        {cart.length !== 0 && (
          <>
            <TotalCartInfo>
              <p className="total">Total</p>
              <p className="totalNumber">
                R${" "}
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </TotalCartInfo>
            <button onClick={() => deleteAllItemsInCart()}>
              Remover Todos
            </button>
          </>
        )}
      </CartInformation>
    </CardModalContainer>
  );
};
