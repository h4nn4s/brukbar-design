import styles from "./Layout.module.css";
import Header from "../Header/Header";

function Layout({ children, view, setView }) {
  // samlar sidans gemensamma delar så att header och footer kan återanvändas i alla vyer
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
          <p>ida@brukbardesign.se</p>
          <p>kristina@brukbardesign.se</p>

        </div>
      </footer>
    </div>
  );
}

export default Layout;