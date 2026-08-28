import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Gallery.module.css";

function Gallery({ products, selectedProduct, onSelectProduct }) {
  const galleryRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    setCanScrollLeft(gallery.scrollLeft > 0);

    setCanScrollRight(
      gallery.scrollLeft <
        gallery.scrollWidth - gallery.clientWidth - 1
    );
  };

  useEffect(() => {
    updateScrollButtons();
  }, [products]);

  return (
    <section className={styles.galleryWrapper}>
      <button
        className={`${styles.arrow} ${!canScrollLeft ? styles.hidden : ""}`}
        onClick={() =>
          galleryRef.current.scrollBy({
            left: -galleryRef.current.clientWidth * 0.7,
            behavior: "smooth",
          })
        }
      >
        ❮
      </button>

      <section
        ref={galleryRef}
        className={styles.gallery}
        onScroll={updateScrollButtons}
      >
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

      <button
        className={`${styles.arrow} ${!canScrollRight ? styles.hidden : ""}`}
        onClick={() =>
          galleryRef.current.scrollBy({
            left: galleryRef.current.clientWidth * 0.7,
            behavior: "smooth",
          })
        }
      >
        ❯
      </button>

    </section>
  );
}

export default Gallery;