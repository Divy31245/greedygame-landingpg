import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.div1}>
        Acquire&nbsp; {" "}
        <span className={styles.footerSpan}>
           quality users,&nbsp; <div className={styles.footerlogo}></div>
        </span>{" "}
         not just installs
      </div>
      <div className={styles.div2}>
        Talk to us today and start creating mobile marketing campaigns that
        deliver results.
      </div>
      
    </div>
    <div className={styles.btmfooter}>
    ©2022 GreedyGame, Inc. All rights reserved.
    </div></>
  );
};

export default Footer;
