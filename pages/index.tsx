import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import type { NextPage, GetStaticProps } from "next";
import { Header } from '../components/Header';
import { ClientBased } from '../components/ClientBased';
import { Branding } from '../components/Branding';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useTranslations } from 'next-intl';



const Home: NextPage = () => {
  const t = useTranslations();

  return (
    <div>
      <Head>
        <title>UTS - Uzbekistan Tech Service</title>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />

        <meta name="author" content="Uzbekistantechservice" />

        <meta name="keywords" content="UTS, Uzbekistantechservice, Uzbekistan Tech service, UTS-Uzbekistan" />

        <meta name="description" content={t("header.information")}></meta>
        <meta
          name="UTS"
          content="Uzbekistan Tech Service"
        />
        <meta
          name="google-site-verification"
          content="3oyXX3xez8fYAergAhV4wdCEhYXCV8a4DT1yJDp3Qjw"
        />
        <meta name="yandex-verification" content="5ae15a0c9ccd5ef5" />

        <meta property="og:title" content="UTS - Uzbekistan Tech Service" />
        <meta property="og:description" content={t("header.information")}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://Uzbekistantechservice.uz/"></meta>
        <meta property="og:site_name" content="Uzbekistantechservice.uz" />

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


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
export default Home