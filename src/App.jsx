import { useState } from "react";

import Layout from "./components/Layout/Layout";
import ProductSection from "./components/ProductSection/ProductSection";

import products from "./data/products";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Layout>
      <ProductSection
        products={products}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />
    </Layout>
  );
}

export default App;