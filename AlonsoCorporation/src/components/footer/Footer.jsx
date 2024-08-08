import React from 'react';
import './Footer.css'; 
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>AlonsoCorporation</h2>
          <p>Somos un pequeño grupo de freelances especializados en aplicaciones web, móviles y de escritorio.</p>
        </div>
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <ul>
            <li><a href="mailto:alonsocorporationdb@gmail.com">alonsocorporationdb@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/AlonsoCorpotationDB" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
           
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AlonsoCorporation. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
