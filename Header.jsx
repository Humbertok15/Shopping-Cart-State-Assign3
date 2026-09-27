import './Header.css';

function Header({ storeName }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${storeName} home`}>
        <span className="brand-mark">C</span>
        <span>{storeName}</span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
