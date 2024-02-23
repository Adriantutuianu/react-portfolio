import "./footer.css";

// Functional component for the footer
const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Render footer component
  return (
    <footer>
      <div className="footer-content">
        <a href="https://adriantutuianu.github.io/react-portfolio/">
          &copy; {currentYear} Adrian Tut - Portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
