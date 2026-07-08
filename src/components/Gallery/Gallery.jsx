import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Gallery.module.css";

function Gallery({ products, selectedProduct, onSelectProduct }) {
  return (
    <section className={styles.galleryWrapper}>
      <section className={styles.gallery}>
        <div className={styles.galleryGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selectedProduct?.id === product.id}
              onClick={() => onSelectProduct(product)}
            />
          ))}
        </div>
      </section>

      <div className={styles.arrow}>❯</div>
    </section>
  );
}

export default Gallery;