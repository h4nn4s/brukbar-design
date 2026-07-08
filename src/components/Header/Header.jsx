import styles from "./Header.module.css";
import logo from "../../assets/images/logo.jpg";

function Header({ view, setView }) {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Brukbar Design"
        className={styles.logo}
      />

      <button
        className={
            view === "about"
                ? `${styles.navButton} ${styles.active}`
                : styles.navButton
            }
            onClick={() => setView("about")}
      >
        Om Brukbar Design
      </button>
    </header>
  );
}

export default Header;