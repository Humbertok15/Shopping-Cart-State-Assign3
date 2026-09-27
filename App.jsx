import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const products = [
    {
      name: 'Aurora Wireless Headphones',
      price: '$89.99',
      image: 'https://placehold.co/600x400/111827/ffffff?text=Wireless+Headphones',
      description: 'Comfortable wireless headphones with rich sound and all-day battery life.'
    },
    {
      name: 'Pulse Smartwatch',
      price: '$129.99',
      image: 'https://placehold.co/600x400/312e81/ffffff?text=Smartwatch',
      description: 'A modern smartwatch for fitness tracking, notifications, and everyday style.'
    },
    {
      name: 'Nova Mechanical Keyboard',
      price: '$74.99',
      image: 'https://placehold.co/600x400/0f766e/ffffff?text=Mechanical+Keyboard',
      description: 'A responsive mechanical keyboard designed for productivity and gaming.'
    }
  ];

  return (
    <div className="app">
      <Header storeName="ComponentCorner" />

      <main>
        <Hero
          title="Tech that fits your world."
          subtitle="Discover carefully selected gadgets designed for work, play, and everything in between."
          ctaText="Shop Featured Products"
        />

        <section className="products-section" id="products">
          <div className="section-heading">
            <p className="eyebrow">Featured collection</p>
            <h2>Popular Tech Picks</h2>
            <p>Explore our latest favorites, all presented with reusable React components.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
        address="123 Component Ave, Tech City"
      />
    </div>
  );
}

export default App;
