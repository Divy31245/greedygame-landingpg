import styles from './RhomepgComp.module.css'

const RhomepgComp = () =>{
        return(
            <div className={styles.main}>
                {/* first div containing title and img */}
                <div className={styles.cont1}>
                 {/* title mate */}
                    <div className={styles.title}>Result-oriented</div>
                    {/* img mate */}
                    <div className={styles.btimage}></div>
                </div>
                <div className={styles.cont2}>
                performance campaigns for every objective
                </div>
                <div className={styles.cont3}>
                    <div className={styles.parentBlock}>
                    <div className={styles.block}>
                        <div className={styles.blockimg1}></div>
                        <div className={styles.blockpara}>Self-serve platform with CPI starting at INR 1</div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.blockimg2}></div>
                        <div className={styles.blockpara}>Access to premium inventory and exposure to 5K+ apps</div>
                    </div>
                    </div>
                    <div className={styles.parentBlock}>
                    <div className={styles.block}>
                        <div className={styles.blockimg3}></div>
                        <div className={styles.blockpara}>Comprehensive reporting and insights into campaign performance</div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.blockimg4}></div>
                        <div className={styles.blockpara}>Campaigns for every need - clicks, installs, impressions, and more</div>
                    </div>
                    </div>
                    
                </div>

            </div>
        )
}

export default RhomepgComp;