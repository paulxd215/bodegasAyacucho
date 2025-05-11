import React from 'react';
import "../styles/Footer.css";
const Footer = () =>{

    return(
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="https://images-platform.99static.com/lOPVTIj56GDFPXht6QznO4e-rHc=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/115/115676/attachment_115676550" alt="Bodega T" className="footer-logo" />
          <h3>CONTACTO</h3>
          <p>Av. 28 de Julio 753 Of. 302, Miraflores, Lima</p>
          <h3>SÍGUENOS EN</h3>
          <div className="social-icons">
            <a href="#" className="icon">FB</a>
            <a href="#" className="icon">IG</a>
            <a href="#" className="icon">YT</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>GRUPO AYACUCHO</h3>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>MARCAS</h3>
          <div className="marcas-list">
            <ul>
              <li>Tonderito</li>
              <li>sasaxd</li>
              <li>XD</li>
              <li>SE VENDE MMR</li>
              <li>Alfa Crux Wines</li>
              <li>SE REGALA A MARCEL </li>
              <li>YA SABEN</li>
            </ul>
            <ul>
              <li>XASDASD</li>
              <li>QUIEN SABE</li>
              <li>aRROZ</li>
              <li>YA</li>
              <li>BUENO</li>
              <li>AS</li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h3>ATENCIÓN AL USUARIO</h3>
          <ul>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Cambios y devoluciones</a></li>
          </ul>
          <h3>LIBRO DE RECLAMACIONES</h3>
          <div className="icon-book">📖</div>
        </div>
      </div>
    </footer>
  );
};


export default Footer; 