import React from "react";
import { AppProps } from "next/app";
import "remixicon/fonts/remixicon.css";
import { Layout } from "../components/Layout";
import { ThemeProvider } from "../contexts/ThemeContext";
import "../styles/globals.css";
import "../styles/project.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
