import Card from "../Card/Card";
import CardCart from "../CardCart/CardCart";
import { useCart } from "./../../Provider/Cart/index";

export const ListCard = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Opções de compra</h2>
      <ul>
        {cart.map((itemProduct) => (
          <Card
            key={itemProduct.id}
            id={itemProduct.id}
            title={itemProduct.title}
            image={itemProduct.image}
            price={itemProduct.price}
            product={itemProduct}
          />
        ))}
      </ul>
      <h4>Cart</h4>
      <ul>
        {cart &&
          cart.map((itemProduct) => (
            <CardCart
              key={itemProduct.id}
              id={itemProduct.id}
              title={itemProduct.title}
              image={itemProduct.image}
              price={itemProduct.price}
              product={itemProduct}
            />
          ))}
      </ul>
    </div>
  );
};

export default ListCard;
