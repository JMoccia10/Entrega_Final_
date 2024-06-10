import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footer.css';

const Footer: React.FC = () => {
  const [scriptCargado, setScriptCargado] = useState<boolean>(false);
  const [copiado, setCopiado] = useState<boolean>(false);

  useEffect(() => {
    const scriptId = 'google-maps-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC0NSDbtaXlG2UZc0_vq1ufUsMkmEwyEsM&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = () => setScriptCargado(true);

      document.head.appendChild(script);
    } else {
      setScriptCargado(true);
    }

    return () => {
      if (document.getElementById(scriptId)) {
        document.head.removeChild(document.getElementById(scriptId) as HTMLScriptElement);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptCargado) {
      initMap();
    }
  }, [scriptCargado]);

  const initMap = () => {
    const miTienda = { lat: -34.6041, lng: -58.3827 };
    const mapElement = document.getElementById('map-container');

    if (mapElement) {
      const mapa = new window.google.maps.Map(mapElement, {
        center: miTienda,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: miTienda,
        map: mapa,
        title: 'Mi marcador',
      });
    } else {
      console.error('El elemento con id "map-container" no se encontró en el DOM.');
    }
  };

  const copiarEmail = () => {
    const email = 'info_recordstore@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }).catch((error) => {
      console.error('Error al copiar el correo al portapapeles:', error);
    });
  };

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container-footer">
        <div className="row">
          <div className="col-md-3 mb-4">
            <a href="/" className="d-flex align-items-center text-light text-decoration-none">
              <span className="ms-3 h5 font-weight-bold">Record Store</span>
            </a>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Nosotros</a></li>
              <li><a href="/" className="footer-link">Legales</a></li>
              <li><a href="/" className="footer-link">Términos y condiciones</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <p className="my-3">
              ¡Seguinos!
            </p>
            <div className="d-flex">
              <div className="social-icons-container">
                <div>
                  <a href="https://facebook.com" className="btn btn-light" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" className="btn btn-light" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" className="btn btn-light" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div>
                  <a href="https://ar.linkedin.com/" className="btn btn-light" aria-label="Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://web.telegram.org/k/" className="btn btn-light" aria-label="Telegram">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href="https://www.youtube.com/" className="btn btn-light" aria-label="Youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 contact-info">
            <h5 className="font-weight-bold">Contáctanos:</h5>
            <p>Dirección: Av. Corrientes 1218, CABA.</p>
            <p>Teléfono: 011-234-5678</p>
            <p>Email: <a href="#" className="footer-link" onClick={copiarEmail}>info_recordstore@gmail.com</a></p>
            {copiado && <small style={{ color: '#0f0' }}>¡Email copiado en el portapaleles!</small>}
          </div>
          <div className="col-md-3 mb-4 d-flex align-items-center">
            {scriptCargado && <div id="map-container" className="w-100" style={{ height: '150px' }}></div>}
          </div>
        </div>
        <div className="footer-bottom text-center mt-4">
          <small>Todos los derechos reservados &copy; 2024 Record Store</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;