import Gallery from "../Gallery/Gallery";
import ProductViewer from "../ProductViewer/ProductViewer";
import About from "../About/About";

function ProductSection({
  products,
  selectedProduct,
  onSelectProduct,
  view,
}) {
  return (
    <>
      <Gallery
        products={products}
        selectedProduct={view === "products" ? selectedProduct : null}
        onSelectProduct={onSelectProduct}
      />

      {view === "products" ? (
        <ProductViewer product={selectedProduct} />
      ) : (
        <About />
      )}
    </>
  );
}

export default ProductSection;