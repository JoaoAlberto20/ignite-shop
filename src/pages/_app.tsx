import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ShopProvider } from "../context/ShopContext";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ShopProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ShopProvider>
  )
}
