import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Gallery.module.css";

function Gallery({ products, selectedProduct, onSelectProduct }) {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={product.id === selectedProduct.id}
            onClick={() => onSelectProduct(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;