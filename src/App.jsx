import { useState } from "react";

import Layout from "./components/Layout/Layout";
import ProductSection from "./components/ProductSection/ProductSection";

import products from "./data/products";

import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
  <Layout>
    <Routes>
      <Route
        path="/"
        element={
          <ProductSection
            products={products}
            selectedProduct={selectedProduct}
            onSelectProduct={setSelectedProduct}
          />
        }
      />

      <Route path="/about" element={<About />} />
    </Routes>
  </Layout>
  );
}

export default App;