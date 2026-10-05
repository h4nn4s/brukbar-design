import { useState } from "react";
import Layout from "./components/Layout/Layout";
import ProductSection from "./components/ProductSection/ProductSection";
import products from "./data/products";

// appen är uppdelad i återanvändbara komponenter där Layout hanterar sidans gemensamma delar
// och ProductSection hanterar innehållet och de olika vyerna

function App() {
  // eftersom sidan är liten räcker det att hålla aktuell vy i state istället för att använda routing
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [view, setView] = useState("home");

  return (
    <Layout 
    view={view}
    setView={setView}
    >
      <ProductSection
        products={products}
        selectedProduct={selectedProduct}
        view={view}
        setView={setView}
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setView("products");
        }}
      />
    </Layout>
  );
}

export default App;