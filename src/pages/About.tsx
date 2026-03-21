import FloatingCharacter from '../components/Common/FloatingCharacter';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <FloatingCharacter emoji="💬" position="top-left" />
      <FloatingCharacter emoji="⭐" position="top-right" />
      <FloatingCharacter emoji="🎯" position="bottom-left" />
      <FloatingCharacter emoji="💎" position="bottom-right" />
      <div className="container">
        <div className="about-hero">
          <h1 className="page-title">Rreth Nesh</h1>
          <p className="hero-subtitle">
            Platforma më e besueshme për mësimin e matematikës në gjuhën shqipe
          </p>
        </div>

        <div className="about-content">
          <section className="mission">
            <div className="section-icon">🎯</div>
            <h2>Misioni Ynë</h2>
            <p>
              MathZone by Ela është një platformë edukative e dedikuar për të 
              bërë mësimin e matematikës më të lehtë dhe më argëtues për studentët 
              shqiptarë. Ne ofrojmë materiale cilësore në gjuhën shqipe për të 
              gjitha nivelet, nga fillestari deri te i avancuari.
            </p>
            <p>
              Misioni ynë është të demokratizojmë edukimin e matematikës dhe të 
              bëjmë të mundur që çdo student shqiptar të ketë akses në materiale 
              edukative të cilësisë së lartë, pavarësisht nga vendndodhja ose 
              mundësitë financiare.
            </p>
          </section>

          <section className="vision">
            <div className="section-icon">👁️</div>
            <h2>Vizioni Ynë</h2>
            <p>
              Ne duam të bëhemi platforma kryesore edukative për matematikë në 
              Shqipëri dhe në komunitetin shqiptar në mbarë botën. Vizioni ynë 
              është të krijojmë një komunitet të fortë studentësh, mësuesish dhe 
              prindërve që bashkëpunojnë për të përmirësuar cilësinë e edukimit 
              matematikor.
            </p>
            <p>
              Ne parashikojmë një të ardhme ku çdo student shqiptar ka akses në 
              mjete moderne dhe interaktive për të mësuar matematikë, duke u 
              motivuar dhe duke arritur potencialin e plotë të tyre.
            </p>
          </section>

          <section className="values">
            <div className="section-icon">💎</div>
            <h2>Vlerat Tona</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">📚</div>
                <h3>Cilësia</h3>
                <p>Ne ofrojmë vetëm materiale të cilësisë më të lartë, të krijuara nga ekspertë në fushën e edukimit.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <h3>Aksesueshmëria</h3>
                <p>Platforma jonë është e disponueshme për të gjithë, me materiale falas dhe opsione premium të arsyeshme.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Bashkëpunimi</h3>
                <p>Ne besojmë në fuqinë e bashkëpunimit midis studentëve, mësuesve dhe prindërve.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🚀</div>
                <h3>Inovacioni</h3>
                <p>Ne përdorim teknologjinë më të fundit për të krijuar një përvojë mësimi unike dhe efektive.</p>
              </div>
            </div>
          </section>

          <section className="what-we-offer">
            <div className="section-icon">✨</div>
            <h2>Çfarë Ofrojmë</h2>
            <div className="offer-list">
              <div className="offer-item">
                <span className="offer-icon">📖</span>
                <div>
                  <h3>Kurse të Plota</h3>
                  <p>Kurse të strukturuara për të gjitha nivelet, nga klasa e parë deri te universiteti, me video, ushtrime dhe materiale shtesë.</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-icon">✏️</span>
                <div>
                  <h3>Ushtrime Interaktive</h3>
                  <p>Mijëra ushtrime me zgjidhje të detajuara dhe feedback të menjëhershëm për të ndihmuar studentët të mësojnë në kohë reale.</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-icon">🎮</span>
                <div>
                  <h3>Lojëra Edukative</h3>
                  <p>Lojëra argëtuese që e bëjnë mësimin më të lehtë dhe më të këndshëm, duke kombinuar argëtimin me edukimin.</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-icon">📝</span>
                <div>
                  <h3>Testime dhe Vlerësime</h3>
                  <p>Sistemi i plotë i testimeve për të vlerësuar njohuritë dhe për të gjurmuar progresin e studentëve.</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-icon">📊</span>
                <div>
                  <h3>Gjurmim i Progresit</h3>
                  <p>Raporte të detajuara për progresin e studentëve, që ndihmojnë në identifikimin e zonave që kanë nevojë për përmirësim.</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-icon">📄</span>
                <div>
                  <h3>Fletë Pune</h3>
                  <p>Fletë pune të shkarkueshme për praktikim shtesë, të krijuara nga mësues ekspertë.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="achievements">
            <div className="section-icon">🏆</div>
            <h2>Arritjet Tona</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-number">10,000+</div>
                <div className="achievement-label">Vizitorë Aktivë</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">500+</div>
                <div className="achievement-label">Kurse</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">5,000+</div>
                <div className="achievement-label">Ushtrime</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">1,000+</div>
                <div className="achievement-label">Studentë të Kënaqur</div>
              </div>
            </div>
          </section>

          <section className="why-choose-us">
            <div className="section-icon">⭐</div>
            <h2>Pse Të Na Zgjidhni</h2>
            <ul className="why-list">
              <li>
                <strong>Materiale në Gjuhën Shqipe:</strong> Të gjitha materialet tona janë në gjuhën shqipe, 
                duke e bërë më të lehtë për studentët shqiptarë të kuptojnë dhe të mësojnë.
              </li>
              <li>
                <strong>Përmbajtje e Përditësuar:</strong> Ne përditësojmë rregullisht përmbajtjen tonë për 
                të siguruar që është e përditësuar dhe në linjë me standardet më të larta edukative.
              </li>
              <li>
                <strong>Ndërfaqe e Lehtë:</strong> Platforma jonë është e lehtë për t'u përdorur, me një 
                ndërfaqe intuitive që bën mësimin më të këndshëm.
              </li>
              <li>
                <strong>Mbështetje e Plotë:</strong> Ne ofrojmë mbështetje të plotë për studentët dhe 
                mësuesit, me përgjigje të shpejta për çdo pyetje ose problem.
              </li>
              <li>
                <strong>Çmime të Arsyeshme:</strong> Ne ofrojmë materiale falas dhe opsione premium 
                me çmime të arsyeshme që janë të arritshme për të gjithë.
              </li>
            </ul>
          </section>

          <section className="reviews">
            <div className="section-icon">💬</div>
            <h2>Çfarë Thonë Përdoruesit Tanë</h2>
            <p className="reviews-intro">
              Lexoni çfarë thonë studentët, mësuesit dhe prindërit që përdorin platformën tonë
            </p>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👤</div>
                  <div className="review-author">
                    <h3>Arben K.</h3>
                    <p className="review-role">Student, Klasa 10</p>
                  </div>
                </div>
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Platforma më ka ndihmuar shumë në përgatitjen për provimet. Materialet janë shumë 
                  të qarta dhe ushtrimet interaktive më kanë bërë mësimin shumë më të lehtë. 
                  Rekomandoj me zemër!"
                </p>
                <p className="review-date">Janar 2024</p>
              </div>

              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👩‍🏫</div>
                  <div className="review-author">
                    <h3>Mësuese Elona</h3>
                    <p className="review-role">Mësuese Matematike</p>
                  </div>
                </div>
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Si mësuese, gjej që materialet janë shumë profesionale dhe të strukturuara mirë. 
                  Studentët e mi kanë përmirësuar shumë rezultatet e tyre falë kësaj platforme. 
                  Mbështetja teknike është e shkëlqyer!"
                </p>
                <p className="review-date">Shkurt 2024</p>
              </div>

              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👨‍👩‍👧</div>
                  <div className="review-author">
                    <h3>Prindërit e Sara-s</h3>
                    <p className="review-role">Prindër</p>
                  </div>
                </div>
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Vajza jonë ka filluar të pëlqejë matematikën falë kësaj platforme. Lojërat 
                  edukative janë fantastike dhe e kanë bërë mësimin shumë më argëtues. Faleminderit 
                  për gjithë punën e shkëlqyer!"
                </p>
                <p className="review-date">Mars 2024</p>
              </div>

              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👤</div>
                  <div className="review-author">
                    <h3>Dritan H.</h3>
                    <p className="review-role">Student Universiteti</p>
                  </div>
                </div>
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Kurse të shkëlqyera për nivelin e lartë! Materialet për matematikën e avancuar 
                  janë shumë të detajuara dhe më kanë ndihmuar shumë në studimet universitare. 
                  Platforma është e organizuar mirë dhe e lehtë për t'u përdorur."
                </p>
                <p className="review-date">Prill 2024</p>
              </div>

              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👩</div>
                  <div className="review-author">
                    <h3>Ana M.</h3>
                    <p className="review-role">Student, Klasa 8</p>
                  </div>
                </div>
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Më pëlqen shumë që mund të praktikoj sa herë që dua. Ushtrimet kanë zgjidhje 
                  të detajuara që më ndihmojnë të kuptoj gabimet e mia. Notat e mia janë përmirësuar 
                  shumë!"
                </p>
                <p className="review-date">Maj 2024</p>
              </div>

              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👨</div>
                  <div className="review-author">
                    <h3>Besnik L.</h3>
                    <p className="review-role">Student, Klasa 12</p>
                  </div>
                </div>
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Përgatitja për maturën është bërë shumë më e lehtë me këtë platformë. Testimet 
                  dhe ushtrimet janë shumë të dobishme. Raportet e progresit më tregojnë saktësisht 
                  ku duhet të fokusohem më shumë."
                </p>
                <p className="review-date">Qershor 2024</p>
              </div>
            </div>
          </section>

          <section className="contact">
            <div className="section-icon">📧</div>
            <h2>Kontakt</h2>
            <p>Jemi këtu për t'ju ndihmuar! Mos hezitoni të na kontaktoni nëse keni pyetje, sugjerime ose nevojë për mbështetje.</p>
            <div className="contact-info">
              <p><strong>📧 Email:</strong> info@matematikashqip.al</p>
              <p><strong>📱 Telefon:</strong> +355 XX XXX XXXX</p>
              <p><strong>📍 Adresa:</strong> Tiranë, Shqipëri</p>
              <p><strong>🕒 Orari:</strong> E Hënë - E Premte: 9:00 - 18:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

