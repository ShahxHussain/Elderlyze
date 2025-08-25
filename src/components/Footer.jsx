import React from 'react';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="brand">Elderlyze</div>
          <p>Compassionate technology for mental wellness, companionship, and safety.</p>
          <div className="social">
            <a aria-label="Twitter" href="#">Twitter</a>
            <a aria-label="Facebook" href="#">Facebook</a>
            <a aria-label="Instagram" href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-right">
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Elderlyze</div>
    </footer>
  );
}

export default Footer;


