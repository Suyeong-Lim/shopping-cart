import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "src/styles/GlobalStyles";
import theme from "src/styles/theme";
import Gnb from "src/components/gnb/Gnb";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "src/components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
