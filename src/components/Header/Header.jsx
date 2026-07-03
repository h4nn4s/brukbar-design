import styles from "./Header.module.css";

function Header() {
    return (
        <header className= {styles.header}>
            <h1 className={styles.logo}>Brukbar Design</h1>

            <nav>
                <a href="#" className={styles.navLink}>
                    Om oss
                </a>
            </nav>
        </header>
    );
}

export default Header;
