import { ItemLiContainer } from "./style";
import { MenuItemFormat } from "../../interfaces/interfaces";
import { useCart } from "../../providers/cart";

interface CardProps {
  item: MenuItemFormat;
}

export const Card = ({ item }: CardProps) => {
  const { name, section, price, img } = item;

  const { handleAddToCart } = useCart();

  const handleAdd = (item: MenuItemFormat) => {
    handleAddToCart(item);
  };

  return (
    <ItemLiContainer>
      <div>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <h5>{section}</h5>
      <p>R$ {price.toFixed(2)}</p>

      <button onClick={() => handleAdd(item)}>Adicionar</button>
    </ItemLiContainer>
  );
};
