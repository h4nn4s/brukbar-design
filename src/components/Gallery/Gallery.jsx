import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Gallery.module.css";

function Gallery({ products, selectedProduct, onSelectProduct }) {
  const galleryRef = useRef(null);

  // håller koll på om galleriet går att scrolla åt vänster eller höger
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // uppdaterar pilarna så att bar amöjliga scrollriktningar visas
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
        className={`${styles.arrow} ${styles.left} ${!canScrollLeft ? styles.hidden : ""}`}
        onClick={() =>
          galleryRef.current.scrollBy({
            left: -galleryRef.current.clientWidth * 0.7,
            behavior: "smooth",
          })
        }
      >
        ❮
      </button>

      {/* produkter visas i ett horisontellt scrollbarrt galleri för att hålla sidan kompakt */}
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
        className={`${styles.arrow} ${styles.right} ${!canScrollRight ? styles.hidden : ""}`}
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