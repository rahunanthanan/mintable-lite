import '@aws-amplify/ui-react/styles.css';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";
import Layout from "../components/layout";

Amplify.configure({ ...awsconfig, ssr: true });

function MintableLiteApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Authenticator.Provider>
  );
}

export default MintableLiteApp;
