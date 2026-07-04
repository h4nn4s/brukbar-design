import Gallery from "../Gallery/Gallery";
import ProductViewer from "../ProductViewer/ProductViewer";

function ProductSection({
  products,
  selectedProduct,
  onSelectProduct,
}) {
  return (
    <>
      <Gallery
        products={products}
        selectedProduct={selectedProduct}
        onSelectProduct={onSelectProduct}
      />

      <ProductViewer product={selectedProduct} />
    </>
  );
}

export default ProductSection;