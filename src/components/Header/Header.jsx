import styles from "./Header.module.css";
import logo from "../../assets/images/logo.jpg";

function Header({ view, setView }) {
  return (
    <header className={styles.header}>
      <button
        className={styles.logoButton}
        onClick={() => setView("home")}
      >
        <img
          src={logo}
          alt="Brukbar Design"
          className={styles.logo}
        />
      
      </button>
      
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