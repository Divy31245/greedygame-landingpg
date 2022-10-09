import styles from './Client.module.css'

const ClientSec = () =>{
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Our Top Clients</h1>
            <div className={styles.Clientgrid}>
            
                <div className={styles.img1}></div>
                <div className={styles.img2}></div>
                <div className={styles.img3}></div>
            </div>
        </div>
    )
}

export default ClientSec;