import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import type { NextPage, GetStaticProps } from "next";
import { Header } from '../components/Header';
import { ClientBased } from '../components/ClientBased';
import { Branding } from '../components/Branding';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UTS </title>
        <meta
          name="UTS"
          content="Uzbekistan Tech Service"
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/assets/img/logo2.svg" />
      </Head>
      <Navbar />
      <Header />
      <ClientBased />
      <Branding />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

// export async function getStaticPaths() {
//   return {
//     paths: [], // Bu yerda bosh array bo'lishi kerak
//     fallback: 'blocking',
//   };
// }