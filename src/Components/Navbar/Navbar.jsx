import { useState } from "react";
import styles from "./Navbar.module.css";
import { useSmoothScroll } from "../../Hooks/useSmoothScroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={styles.logo}>ankitBareth.dev</div>
      <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`${isMenuOpen ? styles.active : ""}`}>
        <li>
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
