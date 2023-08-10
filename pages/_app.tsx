import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Linder Hassinger - Software Developer</title>
        <meta
          name="description"
          content="Linder Hassinger - Software Developer"
        />
        <meta
          name="keywords"
          content="Linder Hassinger, Software Developer, Instructor de Software, JavaScript, TypeScript, RectJS, NextJS"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="Linder Hassinger" />
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content="Linder Anderson Hassinger" />
        <meta property="og:type" content="web" />
        <meta property="og:url" content="https://conferences-ten.vercel.app/" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/20673011?v=4"
        />
        <meta
          property="og:description"
          content="Soy instructor de software, me gusta enseñar y aprender de los demás."
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
