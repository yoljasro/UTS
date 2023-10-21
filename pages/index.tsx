import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import type { NextPage, GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { Header } from '../components/Header';
import { ClientBased } from '../components/ClientBased';
import { Branding } from '../components/Branding';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';


const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ClientBased/>
      <Branding/>
      <Portfolio/>
      <Contact/>
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