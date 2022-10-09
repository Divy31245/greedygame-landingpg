import styles from "./MidSection.module.css";

const MidSection = () => {
  return (
    
      <div className={styles.bgimg}>
        <div className={styles.div1}>
          <div className={styles.div2}>
            300+ <span className={styles.div2Span}>Affiliates</span>{" "}
          </div>
          <div className={styles.div2}>
            5K+ <span className={styles.div2Span}>Apps Inventory</span>
          </div>
          <div className={styles.div2}>
            1M+ <span className={styles.div2Span}>App Installs</span>
          </div>
          <div className={styles.div2}>
            3K+ <span className={styles.div2Span}>Active Campaigns</span>
          </div>
        </div>
      </div>
    
  );
};

export default MidSection;
