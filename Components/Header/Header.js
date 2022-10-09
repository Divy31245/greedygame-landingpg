// import headerIcon from '../../assets/header/header-icon.svg'
// import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';

import styles from './Header.module.css';
const Header = () =>{
    return(
        <div className={styles.headerMain}>
            <div className={styles.mobileicon} ><MenuIcon /></div>
            <div className={styles.icon} />
        </div>
    )
}

export default Header;