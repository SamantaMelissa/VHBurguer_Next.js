// Tudo que você colocar aqui vai existir em todas as telas.
// O que normalmente vai aqui:
// CSS global
// Layout padrão (header, footer)
// import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
