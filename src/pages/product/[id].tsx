import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetail } from "../../styles/pages/product"
interface ProductsProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductsProps) {
  const [isCreatingCheckoutSession, serIsCreatingCheckoutSession] = useState(false);

  const handleBuyProduct = async () => {
    try {
      serIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (DataDog / Sentry)
      serIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <title>{product.name} Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer >
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetail>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleBuyProduct}>Comprar Agora</button>
        </ProductDetail>
      </ProductContainer>
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}


export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // Hour,  
  }
}
