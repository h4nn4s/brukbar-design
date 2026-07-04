import styles from "./Header.module.css";
import logo from "../../assets/images/logo.jpg";

function Header() {
    return (
        <header className= {styles.header}>
            <img 
            src={logo}
            alt="Brukbar Design"
            className={styles.logo}
            />

            <nav>
                <a href="#" className={styles.navLink}>
                    Om oss
                </a>
            </nav>
        </header>
    );
}

export default Header;
