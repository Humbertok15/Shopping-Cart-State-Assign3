import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img className="product-image" src={image} alt={name} />
      </div>

      <div className="product-card-content">
        <span className="product-badge">Featured</span>
        <h3>{name}</h3>
        <p>{description}</p>

        <div className="product-card-footer">
          <span className="product-price">{price}</span>
          <button type="button" className="product-button">
            View Product
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
