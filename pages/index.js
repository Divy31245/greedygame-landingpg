import Head from "next/head";

import Form from "../Components/Form/Form";
import Header from "../Components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Header />
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
      </Head>
      
        <Form />
      
    </div>
    </>
  );
}
