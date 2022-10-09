import styles from "./CompanySec.module.css";

const CompanySec = () => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Our Top Partners</h1>
        <div className={styles.companyGrid}>
          <div className={styles.img1}></div>
          <div className={styles.img2}></div>
          <div className={styles.img3}></div>
          <div className={styles.img4}></div>
          <div className={styles.img5}></div>
          <div className={styles.img6}></div>
        </div>
      </div>
    </>
  );
};

export default CompanySec;
