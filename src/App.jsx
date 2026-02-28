/* React refactored from Vanilla JS */
import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll header and active section
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <div className="logo">Portfolio.</div>
          <ul className="nav-links">
            <li>
              <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section hidden">
          <div className="hero-content">
            <p className="greeting">안녕하세요, 저는</p>
            <h1 className="title">웹 개발자<br /><span className="gradient-text">홍길동</span>입니다.</h1>
            <p className="subtitle">React와 Vite를 사용한 현대적인 포트폴리오입니다.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn primary-btn">프로젝트 보기</a>
              <a href="#contact" className="btn secondary-btn">연락하기</a>
            </div>
          </div>
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </section>

        <section id="about" className="about-section hidden">
          <h2 className="section-title">About Me</h2>
          <div className="about-container">
            <div className="about-text">
              <p>안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다. React의 강력함을 활용해 유지보수하기 쉬운 컴포넌트 기반 아키텍처를 설계합니다.</p>
              <div className="skills">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3 (Grid/Flexbox)</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Node.js / npm</span>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Profile Image</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section hidden">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img placeholder-1"></div>
              <div className="project-info">
                <h3>OOTD 추천 앱 (React)</h3>
                <p>Node.js와 NPM 생태계를 기반으로 최신 React 문법을 활용하여 개발한 라이프스타일 웹 앱입니다.</p>
                <a href="#" className="project-link">자세히 보기 &rarr;</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img placeholder-2"></div>
              <div className="project-info">
                <h3>개인 일정 관리 서비스</h3>
                <p>Grid와 Flexbox를 적극 사용하여 반응형 UI를 완벽하게 구현한 생산성 관리 도구입니다.</p>
                <a href="#" className="project-link">자세히 보기 &rarr;</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img placeholder-3"></div>
              <div className="project-info">
                <h3>브랜드 랜딩 페이지</h3>
                <p>인터랙티브한 웹 경험을 제공하기 위해 다양한 CSS 애니메이션과 React Hooks를 도입했습니다.</p>
                <a href="#" className="project-link">자세히 보기 &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section hidden">
          <h2 className="section-title">Contact</h2>
          <div className="contact-container">
            <p>새로운 기회와 흥미로운 프로젝트 제안을 언제나 환영합니다!</p>
            <a href="mailto:hello@example.com" className="btn primary-btn">이메일 보내기</a>
            <div className="social-links">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
