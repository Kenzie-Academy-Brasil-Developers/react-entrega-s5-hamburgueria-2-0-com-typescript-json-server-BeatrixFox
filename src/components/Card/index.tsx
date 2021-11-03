import { ItemLiContainer } from "./style";
import { MenuItemFormat } from "../../interfaces/interfaces";
import { useCart } from "../../providers/cart/index";

interface CardProps {
  item: MenuItemFormat;
}

export const Card = ({ item }: CardProps) => {
  const { name, category, price, image } = item;

  const { handleAddToCart } = useCart();

  return (
    <ItemLiContainer>
      <div>
        <img src={`${image}`} alt={name} />
      </div>
      <h3>{name}</h3>
      <h5>{category}</h5>
      <p>R$ {price}</p>

      <button onClick={() => handleAddToCart(item)}>Adicionar</button>
    </ItemLiContainer>
  );
};
