import styles from "./LandingPage.module.css";

function LandingPage({ onExplore }) {
  return (
    <section className={styles.landing}>
      <div className={styles.content}>
        <h1>Brukbar Design</h1>

        <p>
          Brukbar Design utvecklar och tillverkar lösningar med
          fokus på funktion, kvalitet och tidlös formgivning.
        </p>
        <button
          className={styles.button}
          onClick={onExplore}
        >
          Utforska produkter
        </button>
        
      </div>
    </section>
  );
}

export default LandingPage;