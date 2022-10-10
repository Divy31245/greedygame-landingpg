import MidSection from "../Components/MidSection/MidSection";
import RhomepgComp from "../Components/RightHomepg/RhomepgComp";
import Form from "../Components/Form/Form";
import Header from "../Components/Header/Header";
import styles from "../styles/Home.module.css";
import CompanySec from "../Components/CompanySec/CompanySec";
import ClientSec from "../Components/ClientSec/ClientSec";
import ClientDesc from "../Components/ClientDesc/ClientDesc";
import Footer from "../Components/Footer/Footer";
// import icon1 from "../assets/first/i1.svg"
// import icon2 from "../assets/first/i2.svg"
// import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.container1}>
        <div className={styles.icon2}></div>

        <RhomepgComp />

        <Form />
        <div className={styles.icon1}></div>
        <MidSection />
        <CompanySec />
        <ClientSec />
        <ClientDesc />
        <Footer />
      </div>
        <div className={styles.btmFix}>
          <div className={styles.btmPara}>Get a Call back from us</div>
          <button className={styles.btmbutton}>Get Started</button>
        </div>
    </>
  );
}
