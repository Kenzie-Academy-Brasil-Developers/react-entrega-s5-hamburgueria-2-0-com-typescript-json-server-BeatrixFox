import { CardProduct } from "../cardProduct/index";

export const ListCard = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Opções de compra</h2>
      <ul>
        {cart.map((itemProduct) => (
          <CardProduct
            key={itemProduct.id}
            id={itemProduct.id}
            name={itemProduct.title}
            image={itemProduct.image}
            price={itemProduct.price}
            category={itemProduct.category}
            product={itemProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
