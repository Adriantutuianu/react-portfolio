import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ProjectRoutes from "./components/projects/ProjectsRoutes";

function App() {
  return (
    <>
      <Router basename="/react-portfolio">
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projects/*" element={<ProjectRoutes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
