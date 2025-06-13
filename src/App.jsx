import { useEffect } from 'react';

export default function App() {
  // Efekt świetlnej kuli podążającej za kursorem
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-light';
    document.body.appendChild(cursor);

    const updateCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <>
      <div className="portfolio-root">
        <header className="portfolio-header">
          <nav>
            <ul>
              <li><a href="#about">O mnie</a></li>
              <li><a href="#experience">Doświadczenie</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
            <div className="header-icons">
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </nav>
        </header>
        <main className="portfolio-main">
          <section className="hero-section" id="about">
            <div className="hero-left">
              <h1>
                Radek Michalski<br />
              </h1>
              <p className="subtitle">Uczę się programowania</p>
            </div>
            <div className="hero-right">
              <img className="hero-image" src="https://www.getmecoding.com/wp-content/uploads/2017/10/GMC_blog_IsWebDevelopmentCoding_resize.jpg" alt="Web development" />
            </div>
          </section>
          <section className="intro-section">
            <div className="intro-left">
              <h2>Rozwijam umiejętności i tworzę pierwsze projekty</h2>
            </div>
            <div className="intro-right">
              <p>Cześć! Mam na imię Radek i uczę się w Technikum nr 19 w Poznaniu.<br /><br />
                Uczę się języków programowania takich jak Java, Python oraz React. Interesuję się tworzeniem nowoczesnych stron i aplikacji internetowych.<br /><br />
                Zapraszam do zapoznania się z moimi projektami i umiejętnościami poniżej!
              </p>
            </div>
          </section>
          <section className="badges-section">
            <div className="badge">💡 Python</div>
            <div className="badge">☕ Java</div>
            <div className="badge">🌐 HTML</div>
            <div className="badge">🎨 CSS</div>
            <div className="badge">⚛️ React</div>
            <div className="badge">🖥️ Web</div>
          </section>
          <section className="contact-section" id="contact">
            <h2>Kontakt</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-info">
                  <h3>Email</h3>
                  <a href="mailto:radek4604@gmail.com">radek4604@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🎮</div>
                <div className="contact-info">
                  <h3>Discord</h3>
                  <span>radziu__</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-info">
                  <h3>Telefon</h3>
                  <a href="tel:123456789">123 456 789</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
