import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "src/styles/GlobalStyles";
import theme from "src/styles/theme";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Gnb from "src/components/gnb/Gnb";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Gnb />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
