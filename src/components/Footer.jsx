export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#" className="footer-logo">
          <img src="/logo.png" alt="BleedBlock" className="footer-logo-img" />
        </a>
        <p className="footer-text">
          © {new Date().getFullYear()} BleedBlock. כל הזכויות שמורות.
        </p>
        <ul className="footer-links">
          <li><a href="#product">המוצר</a></li>
          <li><a href="#founder">המייסד</a></li>
          <li><a href="#contact">צור קשר</a></li>
        </ul>
      </div>
    </footer>
  )
}
