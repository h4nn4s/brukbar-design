import styles from "./ProductViewer.module.css";

function ProductViewer({ product }) {
  return (
    <section className={styles.viewer}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.image}
      />

      <div className={styles.info}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </section>
  );
}

export default ProductViewer;