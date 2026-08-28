import ContentPanel from "../ContentPanel/ContentPanel";

function ProductViewer({ product }) {
  return (
    <ContentPanel
      image={product.image}
      title={product.name}
    >
      <p>{product.description}</p>
    </ContentPanel>
  );
}

export default ProductViewer;