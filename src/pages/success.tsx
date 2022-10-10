import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageContente, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string
  product: {
    name: string;
    imageUrl: string;
  };
  productsImages: string[];
}

export default function Success({ customerName, product, productsImages }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>

        <ImageContainer>
          {productsImages.map((image, i) => (
            <ImageContente key={i}>
              <Image src={image} width={120} height={110} alt=""/>
            </ImageContente>
          ))}
        </ImageContainer>

        <h1>Comprar efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, 
          sua compra de <strong>{`${productsImages.length} Camisetas`} </strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return product.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};