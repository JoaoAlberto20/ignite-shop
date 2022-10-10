import useEmblaCarousel from 'embla-carousel-react';

import { GetStaticProps } from 'next';
import Image from "next/future/image";
import Head from 'next/head';
import Link from 'next/link';

import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

import { HomeContainer, Product, SliderContainer } from "../styles/pages/home";


import { Bag } from 'phosphor-react';
import { MouseEvent, useContext } from 'react';
import { IProduct, ShopContext } from '../context/ShopContext';
import { formatCurrency } from '../utils/formateCurrency';

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {

  const {addCart} = useContext(ShopContext)

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  const handleAddCart = (event: MouseEvent<HTMLButtonElement>, product: IProduct ) => {
    event.preventDefault();
    addCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>
      <HomeContainer>
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container" >
            {products.map((product) => {
              return (
                <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                  <Product
                  >
                    <Image src={product.imageUrl} width={520} height={480} alt="" blurDataURL={product.imageUrl} />
                    <footer>
                      <div>
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                      </div>
                      <button 
                        type='button'
                        onClick={(event) => handleAddCart(event ,product)}
                        title='Adicionar ao carinho'
                      >
                        <Bag weight="bold" />
                      </button>
                    </footer>
                  </Product>
                </Link>
              )
            })}
          </SliderContainer>
        </div>
      </HomeContainer>
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatCurrency.format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
};