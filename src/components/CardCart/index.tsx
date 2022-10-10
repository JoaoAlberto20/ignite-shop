import Image from "next/future/image";
import { CardCartContainer, CardCartContente, ImageCardCartContainer } from "./styles";


interface CardCartProps {
  id: string;
  name: string;
  price: string
  imageUrl: string;
  removeProductCart: (productId: string) => void
}


export function CardCart({ id, name, price, imageUrl, removeProductCart }: CardCartProps) {

  const handleRemoveCart = () => {
    removeProductCart(id);
  }

  return (
    <CardCartContainer >
      <ImageCardCartContainer>
        <Image src={imageUrl} alt="" width={94} height={90} />
      </ImageCardCartContainer>
      <CardCartContente>
        <p>{name}</p>
        <span>{price}</span>
        <button type="button" onClick={handleRemoveCart} >Remover</button>
      </CardCartContente>
    </CardCartContainer>
  )
}