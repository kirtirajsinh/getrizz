import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Clout from "@/components/Clout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Rizz check</title>
        <meta
          name="description"
          content="A chat-based game where your goal is to befriend AI Celebs,and ask them for a Date💕. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rizz check" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rizzcheck.vercel.app/" />
      </Head>
      <main>
        <Header />
        <Clout />
      </main>
    </>
  );
}
