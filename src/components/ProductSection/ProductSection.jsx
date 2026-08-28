import Gallery from "../Gallery/Gallery";
import ProductViewer from "../ProductViewer/ProductViewer";
import About from "../About/About";
import LandingPage from "../LandingPage/LandingPage";

function ProductSection({
  products,
  selectedProduct,
  onSelectProduct,
  view,
  setView,
}) {
  return (
  <>
    {view === "home" ? (
      <LandingPage onExplore={() => setView("products")} />
    ) : (
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
    )}
  </>
);

}

export default ProductSection;