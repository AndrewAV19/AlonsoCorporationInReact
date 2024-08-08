import React from 'react';
import './Servicios.css';
import webImage from '../../../public/images/navegador.png';
import mobileImage from '../../../public/images/telefono-inteligente.png';
import desktopImage from '../../../public/images/ordenador-personal.png';
import htmlLogo from '../../../public/images/html-5.png';
import cssLogo from '../../../public/images/css-3.png';
import jsLogo from '../../../public/images/js.png';
import reactLogo from '../../../public/images/react-icon-512x512-u6e60ayf.png';
import androidLogo from '../../../public/images/androide.png';
import javaLogo from '../../../public/images/java.png';
import pythonLogo from '../../../public/images/piton.png';
import csharpLogo from '../../../public/images/csharp.webp';

const Servicios = () => {
  return (
    <div className="servicios">
      <div className="servicio">
        <h2>Web</h2>
        <img src={webImage} alt="Web Development" />
        <ul className="tech-list">
          <li><img src={htmlLogo} alt="HTML5" className="tech-logo small-logo" /> HTML5</li>
          <li><img src={cssLogo} alt="CSS3" className="tech-logo small-logo" /> CSS3</li>
          <li><img src={jsLogo} alt="JavaScript" className="tech-logo small-logo" /> JavaScript</li>
          <li><img src={reactLogo} alt="React" className="tech-logo small-logo" /> React</li>
        </ul>
      </div>
      <div className="servicio">
        <h2>Mobile</h2>
        <img src={mobileImage} alt="Mobile Development" />
        <ul className="tech-list">
          <li><img src={androidLogo} alt="Android Studio" className="tech-logo small-logo" /> Android Studio</li>
        </ul>
      </div>
      <div className="servicio">
        <h2>Desktop</h2>
        <img src={desktopImage} alt="Desktop Development" />
        <ul className="tech-list">
          <li><img src={javaLogo} alt="Java" className="tech-logo small-logo" /> Java</li>
          <li><img src={pythonLogo} alt="Python" className="tech-logo small-logo" /> Python</li>
          <li><img src={csharpLogo} alt="C#" className="tech-logo small-logo" /> C#</li>
        </ul>
      </div>
    </div>
  );
};

export default Servicios;
