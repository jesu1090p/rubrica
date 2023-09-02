import '../styles/nav-foot.css'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Jesus Oviedo</p>
        <p>R&uacute;brica Corte 1 | Web 2 | CUC 2023-2</p>
        <p>El prop&oacute;sito es mostrar el uso de los Hooks useEffect, useState y el dominio del localStorage para cargar y almacenar datos din&aacute;micamente.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
