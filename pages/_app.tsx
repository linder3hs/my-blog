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
        <meta property="og:title" content="Tech Conf" />
        <meta property="og:type" content="web" />
        <meta property="og:url" content="https://conferences-ten.vercel.app/" />
        <meta
          property="og:image"
          content="https://nvpaknjxdglnrkhahnaq.supabase.co/storage/v1/object/sign/images/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby5wbmciLCJpYXQiOjE2NzczNTk5OTIsImV4cCI6MTAwMDAwMDAwMTY3NzM2MDAwMH0.Ypmo1QtdQkwf8R0pwn_hIUozy6RClAsUp4YOOJg1uiA&t=2023-02-25T21%3A19%3A52.608Z"
        />
        <meta
          property="og:description"
          content="Únete a nuestra comunidad y se parte de las mejores charlas de Tech. Encontraras invitados de todo latinoamerica donde nos contaran sus experiencias."
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
