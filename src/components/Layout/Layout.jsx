import styles from "./Layout.module.css";
import Header from "../Header/Header";

function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    );
}

export default Layout