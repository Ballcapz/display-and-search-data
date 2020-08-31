import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Display and Filter Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/todos">
          <a>See Todo Items</a>
        </Link>
      </main>

      <footer className={styles.footer}>Zach Johnson</footer>
    </div>
  );
}
