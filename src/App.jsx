import { useEffect } from 'react';

export default function App() {
  // Matrix background effect (subtle)
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    const letters = Array(256).join('1').split('');
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    let drops = Array.from({ length: columns }, () => 1);
    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.22)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0,255,0,0.10)';
      ctx.font = fontSize + 'px Fira Code';
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    const interval = setInterval(draw, 33);
    window.addEventListener('resize', resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas id="matrix" className="matrix-canvas"></canvas>
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
            </div>
            <div className="hero-right">
              <img className="photo-placeholder" src="https://www.getmecoding.com/wp-content/uploads/2017/10/GMC_blog_IsWebDevelopmentCoding_resize.jpg" alt="Web development" />
            </div>
          </section>
          <section className="intro-section">
            <div className="intro-left">
              <h2>Rozwijam swoje umiejętności programistyczne i tworzę własne projekty</h2>
            </div>
            <div className="intro-right">
              <p>Cześć! Mam na imię Radek i uczę się w Technikum nr 19 w Poznaniu.<br /><br />
                Uczę się języków programowania takich jak Java, Python oraz React. Interesuję się tworzeniem nowoczesnych stron i aplikacji internetowych.<br /><br />
                Zapraszam do zapoznania się z moimi umiejętnościami poniżej!
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
        </main>
      </div>
    </>
  );
}
