import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MathZone by Ela</h3>
            <p>Platforma më e mirë për të mësuar matematikë në gjuhën shqipe</p>
          </div>
          <div className="footer-section">
            <h4>Lidhje të Shpejta</h4>
            <ul>
              <li><a href="/kurse">Kurse</a></li>
              <li><a href="/ushtrime">Ushtrime</a></li>
              <li><a href="/lojera">Lojëra</a></li>
              <li><a href="/testime">Testime</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>Email: info@matematikashqip.al</p>
            <p>Tel: +355 XX XXX XXXX</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MathZone by Ela. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

