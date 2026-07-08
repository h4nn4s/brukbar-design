import { useState } from "react";
import Layout from "./components/Layout/Layout";
import ProductSection from "./components/ProductSection/ProductSection";
import products from "./data/products";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [view, setView] = useState("products");

  return (
    <Layout 
    view={view}
    setView={setView}
    >
      <ProductSection
        products={products}
        selectedProduct={selectedProduct}
        view={view}
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setView("products");
        }}
      />
    </Layout>
  );
}

export default App;