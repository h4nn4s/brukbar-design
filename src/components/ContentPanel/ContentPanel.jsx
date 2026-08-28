import styles from "./ContentPanel.module.css";

function ContentPanel({ image, title, children }) {
  return (
    <section className={styles.panel}>
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