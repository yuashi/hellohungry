import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Hungry</title>
        <meta
          name="description"
          content="Best Pizzeria you could ever find !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />?
    </div>
  );
}
