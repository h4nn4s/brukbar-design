import styles from "./ProductCard.module.css";

function ProductCard({ product, selected, onClick }) {
  return (
    <button
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={onClick}
      type="button"
    >
      <img src={product.image} alt={product.name} />
    </button>
  );
}

export default ProductCard;