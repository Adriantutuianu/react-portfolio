import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <a href="https://adriantutuianu.github.io/react-portfolio/">
          &copy; {currentYear} Adrian Tut Portfolio
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
