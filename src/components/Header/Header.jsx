import styles from "./Header.module.css";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className= {styles.header}>
            <img 
            src={logo}
            alt="Brukbar Design"
            className={styles.logo}
            />

            <nav className={styles.nav}>
                <Link to="/about" className={styles.navButton}>
                Om oss
                </Link>
            </nav>
        </header>
    );
}

export default Header;
