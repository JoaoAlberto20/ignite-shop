import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { formatCurrency } from '../../utils/formateCurrency'
import { CardCart } from '../CardCart'
import { ButtonClose, ButtonFinishCart, CartContainer, CartContent, CartContentInfo, CartPriceContent, CartQuantityContent } from './styles'

export function Cart() {
  const { itemProduct, totalPrice, removeProductCart, itemProductDuplicated } = useContext(ShopContext)
 
  const cartQuantity = itemProductDuplicated.length

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const handleCheckout = async ()  => {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: itemProduct,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Dialog.Portal>

      <CartContainer>
        <ButtonClose>
          <X weight='bold' />
        </ButtonClose>
        <Dialog.Title>Sacola de compras</Dialog.Title>


        <CartContent>
          {itemProduct.length <= 0 && <span>Parece que seu carrinho está vazio : (</span>}
          {itemProduct.map((product) => (
            <CardCart
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              id={product.id}
              removeProductCart={removeProductCart}
            />
          ))}
        </CartContent>

        <CartContentInfo >
          <CartQuantityContent>
            <p>Quantidade</p>
            <span>{`${cartQuantity} itens`}</span>
          </CartQuantityContent>
          <CartPriceContent>
            <p>Valor total</p>
            <strong>{formatCurrency.format(totalPrice)}</strong>
          </CartPriceContent>
        </CartContentInfo>

        <ButtonFinishCart
          type='button'
          onClick={handleCheckout}
          disabled={isCreatingCheckoutSession || cartQuantity <= 0}
        >
          Finalizar Compra
        </ButtonFinishCart>
      </CartContainer>


    </Dialog.Portal>
  )
}