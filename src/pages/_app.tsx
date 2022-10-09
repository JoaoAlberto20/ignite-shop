import { AppProps } from "next/app";
import Image from "next/future/image";
import logoImg from '../assets/logo.svg';
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} /> 
    </Container>
  )
}
