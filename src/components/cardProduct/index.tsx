import { useCart } from "../../Provider/Cart/index";

interface ProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductsProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  product: ProductData;
}

export const CardProduct = ({
  id,
  name,
  category,
  image,
  price,
  product,
}: ProductsProps) => {
  const { addProduct } = useCart();

  return (
    <div>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>
        Price : <span>R$ {price}</span>
      </p>
      <button onClick={() => addProduct(product)}>Adicionar Produto</button>
    </div>
  );
};

export default CardProduct;
