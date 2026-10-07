import styles from "./ContentPanel.module.css";

function ContentPanel({ image, title, children, variant = "" }) {
  // återanvänds för både produkter och Om Brukbar Design för att hålla samma struktur och utseende

  return (
    <section className={`${styles.panel} ${variant ? styles[variant] : ""}`}>
      <img
        src={image}
        alt={title}
        className={styles.image}
      />

      <div className={styles.info}>
        <h2>{title}</h2>

        {children}
      </div>
    </section>
  );
}

export default ContentPanel;