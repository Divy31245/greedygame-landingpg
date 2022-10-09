// import headerIcon from '../../assets/header/header-icon.svg'
// import Image from 'next/image'


import styles from './Header.module.css';
const Header = () =>{
    return(
        <div className={styles.headerMain}>
            <div className={styles.mobileicon} ></div>
            <div className={styles.icon} />
        </div>
    )
}

export default Header;