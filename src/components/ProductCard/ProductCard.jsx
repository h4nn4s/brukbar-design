import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <p>{product.name}</p>
        </div>
    );
}

export default ProductCard;