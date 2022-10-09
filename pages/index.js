import MidSection from "../Components/MidSection/MidSection";
import RhomepgComp from "../Components/RightHomepg/RhomepgComp";
import Form from "../Components/Form/Form";
import Header from "../Components/Header/Header";
import styles from "../styles/Home.module.css";
// import icon1 from "../assets/first/i1.svg"
// import icon2 from "../assets/first/i2.svg"
// import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.first}>
        <div className={styles.container1}>
          {/* <div className={styles.icon2}></div> */}
          
          <RhomepgComp />
          
          <Form />
          <div className={styles.icon1}></div>
          <MidSection/>
        </div>
        
      </div>
    </>
  );
}
