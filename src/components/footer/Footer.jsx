import "./footer.css";
import { Link } from "react-router-dom";

// Functional component for the footer
const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Render footer component
  return (
    <footer>
      <div className="footer-content">
        <Link to={"/react-portfolio"}>
          &copy; {currentYear} Adrian Tut - Portfolio
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
