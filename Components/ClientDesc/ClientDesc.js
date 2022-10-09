import styles from "./ClientDesc.module.css";
import Image from "next/image";
// import d11 from "../../assets/Clients/1.png";
const ClientDesc = () => {
  return (
    <div className={styles.main}>
      <div className={styles.quote}>
        <h1 className={styles.title}>Here It from Clients</h1>
        <div className={styles.descgrid}>
          <div className={styles.logo}>{/* <Image src={d11} alt="" /> */}</div>
          <div className={styles.para1}>
            22.4 Mn minutes of branding results in 25k high-quality
            registrations
          </div>
          <div className={styles.para2}>
            The placement of clickable units natively placed on the main menu,
            gameplay screen and pause screen ensured high engagement,
            registrations and transactions.
          </div>
          <div className={styles.para3}>Read Casestudy</div>
        </div>
      </div>
    </div>
  );
};

export default ClientDesc;
