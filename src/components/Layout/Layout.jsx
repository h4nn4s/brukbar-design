import styles from "./Layout.module.css";
import Header from "../Header/Header";

function Layout({ children, view, setView }) {
  return (
    <div className={styles.layout}>
      <Header view={view} setView={setView} />

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>Brukbar Design</strong>
        </div>

        <div>
          <p>info@brukbardesign.se</p>
          <p>+46 XX XXX XX XX</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;