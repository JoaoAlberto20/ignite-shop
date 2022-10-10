import { createContext, ReactNode, useState } from "react";


export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
  quantity?: number, 
}

console.log('test');

interface ShopContextProps {
  addCart: (product: IProduct) => void
  removeProductCart: (productId: string) => void
  itemProductDuplicated: IProduct[]
  itemProduct: IProduct[]
  totalPrice: number
}


export const ShopContext = createContext({} as ShopContextProps)

interface ShopProviderProps {
  children: ReactNode
}

export function ShopProvider({children}: ShopProviderProps) {
  const [ itemProductDuplicated, setItemProductDuplicated] = useState<IProduct[]>([])

  const addCart = (product: IProduct) => {
    setItemProductDuplicated((prevState) => [...prevState, product])
  }


  const removeProductCart = (productId: string) => {
    setItemProductDuplicated((state) => state.filter((product) => product.id !== productId))
  }

  const totalPrice = itemProductDuplicated
  .reduce((prevState, product) =>  prevState + product.numberPrice ,0)

  const itemProduct = itemProductDuplicated.filter(
    (product, index) => itemProductDuplicated.indexOf(product) === index,
  ).map((product) => ({
    ...product,
    quantity: itemProductDuplicated
      .reduce((prevState, item) => product.id === item.id ? prevState + 1 : prevState, 0),
  }))

  
  return (
    <ShopContext.Provider value={{addCart, itemProduct, removeProductCart, totalPrice, itemProductDuplicated}}>
      {children}
    </ShopContext.Provider>
  )
}