import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import Header from "../components/Header";
import Head from "next/head";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdks Custom Dashboard Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdks example repository to showcase how to use web3sdks's deployer to dynamically deploy any of web3sdks's pre-built smart contracts"
        />
        <meta
          name="keywords"
          content="web3sdks, web3sdks deployer, web3sdks sdk deploy contract, web3sdks sdk, web3sdks react, web3sdks typescript"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Web3sdksProvider>
  );
}

export default MyApp;
