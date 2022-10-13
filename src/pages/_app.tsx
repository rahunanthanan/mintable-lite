
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState,
} from "@tanstack/react-query";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { AppProps } from "next/app";
import React from "react";
import awsconfig from "../aws-exports";
import Layout from "../components/layout";

Amplify.configure({ ...awsconfig, ssr: true });

export default function MintableLiteApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Authenticator.Provider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </Authenticator.Provider>
  );
}
