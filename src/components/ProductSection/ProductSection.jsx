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
  
  // samlar sidans olika vyer här för att hålla navigationen enkel: startsida, produkter och om oss
  return (
    <>
      {view === "home" ? (
        <LandingPage onExplore={() => setView("products")} />
      ) : (
        <>
          {/* galleriet ligger kvar när man växlar mellan produkter och Om Brukbar Design*/}
          <Gallery
            products={products}
            selectedProduct={view === "products" ? selectedProduct : null}
            onSelectProduct={onSelectProduct}
          />

          {view === "products" ? (
            <ProductViewer
              key={selectedProduct.id}
              product={selectedProduct}
            />
          ) : (
            <About />
          )}
        </>
      )}
    </>
  );

}

export default ProductSection;