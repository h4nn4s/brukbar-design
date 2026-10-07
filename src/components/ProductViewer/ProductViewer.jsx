import { useState } from "react";
import styles from "./ProductViewer.module.css";

function ProductViewer({ product }) {
  const images = product.images || [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className={styles.viewer}>
      <div className={styles.images}>
        <img
          key={selectedImage}
          src={selectedImage}
          alt={product.name}
          className={styles.mainImage}
        />

        <div className={styles.thumbnails}>
          {images.map((image) => (
            <button
              key={image}
              type="button"
              className={image === selectedImage ? styles.selected : ""}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={product.name} />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.info}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </section>
  );
}

export default ProductViewer;