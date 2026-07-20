import { useState, useEffect, useRef } from "react";
import { storyStages } from "./data/storyData";
import { categoriesData } from "./data/productData";

const renderCategoryTitle = (cat: { id: number; title: string }) => {
  return (
    <h3 
      className="text-left select-none uppercase text-[15px] font-bold tracking-[0.12em] text-[var(--ink)] leading-tight mb-[4px]"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {cat.title}
    </h3>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"en" | "id">("en");

  const videoRef = useRef<HTMLVideoElement>(null);

  // Track window scroll to toggle fixed navigation bar visibility on desktop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu overlay is active
  useEffect(() => {
    if (isFabOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFabOpen]);

  // Handle active video source changes
  const handleLangChange = (lang: "en" | "id") => {
    setActiveLang(lang);
    if (videoRef.current) {
      const isPlaying = !videoRef.current.paused && !videoRef.current.ended;
      videoRef.current.pause();
      videoRef.current.src = `https://arbertools.com/assets/videos/arber_trailer_${lang}.mp4`;
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <>
      {/* FAB MENU (mobile button) */}
      <button
        className={`fab-menu ${isFabOpen ? "open" : ""}`}
        id="fabMenu"
        onClick={() => setIsFabOpen(!isFabOpen)}
        aria-label="Open menu"
        aria-expanded={isFabOpen ? "true" : "false"}
      >
        <span className="fab-icon">{isFabOpen ? "✕" : "☰"}</span>
      </button>

      {/* FAB OVERLAY (mobile menu fullscreen) */}
      <aside className={`fab-overlay ${isFabOpen ? "open" : ""}`} id="fabOverlay">
        <div className="fab-overlay-inner">
          <div className="brand-logo-container mb-6 flex justify-center">
            <img 
              src="assets/images/logo.svg" 
              alt="ARBER TOOLS Logo" 
              className="max-h-20 w-auto object-contain"
              style={{ maxHeight: "80px" }}
            />
          </div>

          <ul className="fab-links">
            <li>
              <a href="#story" onClick={() => setIsFabOpen(false)}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#equipment" onClick={() => setIsFabOpen(false)}>
                Equipment
              </a>
            </li>
            <li>
              <a href="#hydromarket" onClick={() => setIsFabOpen(false)}>
                Hydromarket × ARBER
              </a>
            </li>
            <li>
              <a href="#documentary" onClick={() => setIsFabOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          <div className="fab-lang">
            <button
              className={`fab-lang-btn ${activeLang === "en" ? "active" : ""}`}
              onClick={() => handleLangChange("en")}
            >
              🇬🇧 English
            </button>
            <button
              className={`fab-lang-btn ${activeLang === "id" ? "active" : ""}`}
              onClick={() => handleLangChange("id")}
            >
              🇮🇩 Bahasa
            </button>
          </div>

          <button
            className="fab-close"
            id="fabClose"
            onClick={() => setIsFabOpen(false)}
            aria-label="Close menu"
          >
            ✕ Close
          </button>
        </div>
      </aside>

      {/* TOP NAV (sticky desktop navigation) */}
      <nav className={`topnav ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-brand flex items-center">
            <img 
              src="assets/images/logo.svg" 
              alt="ARBER TOOLS Logo" 
              className="h-10 w-auto object-contain"
              style={{ maxHeight: "40px" }}
            />
          </a>

          <button
            className={`nav-hamburger ${isNavOpen ? "open" : ""}`}
            id="hamburger"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <span className="hamb-icon">☰</span>
          </button>

          <ul className={`nav-links ${isNavOpen ? "open" : ""}`} id="navLinks">
            <li>
              <a href="#story" onClick={() => setIsNavOpen(false)}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#equipment" onClick={() => setIsNavOpen(false)}>
                Equipment
              </a>
            </li>
            <li>
              <a href="#hydromarket" onClick={() => setIsNavOpen(false)}>
                Hydromarket
              </a>
            </li>
            <li>
              <a href="#documentary" onClick={() => setIsNavOpen(false)}>
                Contact
              </a>
            </li>
            <li className="flex items-center gap-1 ml-2">
              <button
                className={`nav-lang-btn ${activeLang === "en" ? "active" : ""}`}
                onClick={() => handleLangChange("en")}
                aria-label="English"
              >
                EN
              </button>
              <button
                className={`nav-lang-btn ${activeLang === "id" ? "active" : ""}`}
                onClick={() => handleLangChange("id")}
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-noise"></div>
        <div className="hero-content">
          <div className="brand-logo-container mb-6 flex justify-center">
            <img 
              src="assets/images/logo.svg" 
              alt="ARBER TOOLS Logo" 
              className="max-h-28 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
              style={{ maxHeight: "112px" }}
            />
          </div>
          <h1 className="hero-title">Since 1898</h1>
          <p className="hero-subtitle">
            Dutch Engineering Heritage
            <br />
            Designed in Rotterdam · Crafted for Indonesia
          </p>
          <div className="hero-buttons">
            <a href="#story" className="hero-cta">
              The Story ↓
            </a>
            <a href="#equipment" className="hero-cta secondary">
              Equipment
            </a>
          </div>
        </div>
        <div className="hero-year">EST. 1898</div>
      </section>

      {/* THE STORY (Brand Timeline) */}
      <section id="story" className="story">
        <div className="container">
          <div className="story-header">
            <span className="eyebrow">The Brand Heritage · 13 Chapters</span>
            <h2>
              From Rotterdam Dockyards
              <br />
              to Indonesian Workshops
            </h2>
            <p className="story-lead">
              In the family of a Rotterdam dock mechanic, a boy was born in 1862.
              His name was Hendrik Cornelis Arber. By the time he was twenty-six,
              he would step onto the pier of Surabaya — and quietly start a story
              that would survive two world wars, four generations, and nearly
              forgotten decades. This is that story.
            </p>
          </div>

          <div className="timeline">
            {storyStages.map((stage, idx) => (
              <article
                key={stage.id}
                className={`stage ${idx % 2 !== 0 ? "reverse" : ""} ${
                  stage.isFinal ? "stage-final" : ""
                }`}
              >
                <div
                  className="stage-image"
                  style={{ backgroundImage: `url('${stage.image}')` }}
                ></div>
                <div>
                  <div className="stage-meta">
                    <span className="stage-roman">{stage.roman}</span>
                    <span className="stage-year">{stage.year}</span>
                  </div>
                  <h3>{stage.title}</h3>
                  {stage.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {stage.isFinal && stage.finalTagline && (
                    <p className="stage-final-tagline">{stage.finalTagline}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE FACTS */}
      <section className="facts">
        <div className="container">
          <div className="facts-grid">
            <div className="fact">
              <span className="fact-num">128</span>
              <span className="fact-label">Years of Heritage</span>
            </div>
            <div className="fact">
              <span className="fact-num">4</span>
              <span className="fact-label">Generations</span>
            </div>
            <div className="fact">
              <span className="fact-num">1898</span>
              <span className="fact-label">Founded in Rotterdam</span>
            </div>
            <div className="fact">
              <span className="fact-num">∞</span>
              <span className="fact-label">Tools made for craftsmen</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTARY VIDEO SECTION */}
      <section id="documentary" className="docu">
        <div className="container">
          <div className="docu-header">
            <span className="eyebrow">A Brand Documentary</span>
            <h2>Watch the 2-Minute Story</h2>
            <p className="docu-lead">
              A short documentary about the brand born in Rotterdam in 1898 and
              returned to Indonesia 128 years later.
            </p>
          </div>
          <div className="lang-switcher">
            <button
              className={`lang-btn ${activeLang === "en" ? "active" : ""}`}
              onClick={() => handleLangChange("en")}
            >
              🇬🇧 English
            </button>
            <button
              className={`lang-btn ${activeLang === "id" ? "active" : ""}`}
              onClick={() => handleLangChange("id")}
            >
              🇮🇩 Bahasa Indonesia
            </button>
          </div>
          <div className="video-frame">
            <video
              ref={videoRef}
              id="docVideo"
              controls
              playsInline
              poster="https://arbertools.com/assets/poster.jpg"
              src="https://arbertools.com/assets/videos/arber_trailer_en.mp4"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* EQUIPMENT CATALOGUE SECTION */}
      <section id="equipment" className="equipment">
        <div className="container">
          <div className="equipment-header">
            <span className="eyebrow">EQUIPMENT LINE</span>
            <h2>
              Powerful Hydraulic Tools
              <br />
              Trusted by Professionals
            </h2>
            <p className="equipment-lead">
              Explore ten categories of professional hydraulic equipment for everyday use in service centers, workshops, construction, transportation, and industrial applications.
            </p>
          </div>

          <div className="equipment-grid">
            {categoriesData.map((cat) => (
              <article key={cat.id} className="cat-card h-full flex flex-col" id={`cat-card-${cat.id}`}>
                {/* Category Title with Custom Typographic Option */}
                {renderCategoryTitle(cat)}

                {/* Centered Product Image (SVG or custom extension like PNG/JPG) */}
                <div className="flex items-center justify-center mt-4 h-48 w-full bg-white/40 rounded-lg p-2 transition-transform duration-300 hover:scale-105">
                  <img
                    src={`assets/images/${cat.code}.${cat.imageExt || 'png'}`}
                    alt={cat.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Green Stock Count aligned right and centered vertically */}
                <div className="flex-grow flex justify-end items-center py-2">
                  <span 
                    className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 font-sans cursor-help"
                    title={cat.products.map(p => `${p.name}: ${p.stock}`).join('\n')}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {cat.products.reduce((acc, p) => acc + p.stock, 0)} {activeLang === "en" ? "in stock" : "tersedia"}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="prod-actions mt-auto" style={{ display: "flex", gap: "8px" }}>
                  <a
                    href={`https://wa.me/6282266400422?text=${encodeURIComponent(`Halo ArberTools! Saya tertarik dengan produk ${cat.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prod-btn primary"
                  >
                    {activeLang === "en" ? "Chat on WhatsApp" : "Chat via WhatsApp"}
                  </a>
                  <a
                    href={cat.shopeeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prod-btn prod-shopee"
                  >
                    {activeLang === "en" ? "Buy on Shopee" : "Beli di Shopee"}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="equipment-footer">
            <p>Looking for a specific spec or bulk order?</p>
            <a
              href="https://hydromarket.co.id/contacts"
              target="_blank"
              rel="noopener noreferrer"
              className="equipment-cta"
            >
              Contact Hydromarket Indonesia →
            </a>
          </div>
        </div>
      </section>

      {/* HYDROMARKET × ARBER PARTNERSHIP SECTION */}
      <section id="hydromarket" className="partnership">
        <div className="container">
          <div className="partnership-header">
            <span className="eyebrow">The Indonesian Home of ARBER</span>
            <h2>Why Hydromarket sells ARBER TOOLS</h2>
          </div>

          <div className="partnership-content">
            <div className="partnership-text">
              <p className="partnership-lead">
                In 2019, the young Indonesian engineer who found the 1928 ARBER
                catalog in a Bandung antique shop wasn't just any enthusiast.
                He was the founder of <strong>Hydromarket Indonesia</strong> — the
                country's leading specialist retailer of hydraulic and pneumatic
                equipment.
              </p>

              <p>
                Hydromarket had been serving Indonesian workshops, plantations, and
                construction sites since the early 2010s. Its founders shared one
                obsession with Hendrik Arber a century earlier:{" "}
                <em>tools that don't fail when the work is hard.</em>
              </p>

              <p>
                When the catalog landed on his desk and the press designs matched
                what was still in service in his uncle's Surabaya workshop, the
                connection was undeniable. He wrote to the Arber family in
                Rotterdam. After a year of conversations, drawings, and prototype
                reviews, the partnership was formalized.
              </p>

              <p>
                Today,{" "}
                <strong>
                  Hydromarket is the exclusive Indonesian distributor of ARBER
                  Tools.
                </strong>{" "}
                The Rotterdam design office sends specifications. Production
                happens at certified Asian partner workshops. Hydromarket handles
                the Indonesian market — Shopee, Instagram, B2B sales
                to industrial accounts, and on-the-ground service from its Jakarta
                hub.
              </p>

              <p>
                It's a partnership that connects two stories — Dutch heritage and
                Indonesian craftsmanship — into one supply chain that serves the
                workshops where the brand was born.
              </p>
            </div>

            <div className="partnership-logos">
              <div className="logo-card">
                <div className="flex justify-center mb-4">
                  <img 
                    src="assets/images/logo.svg" 
                    alt="ARBER TOOLS Logo" 
                    className="h-16 w-auto object-contain"
                    style={{ maxHeight: "64px" }}
                  />
                </div>
                <p className="logo-role">
                  Brand & Engineering
                  <br />
                  <span>Rotterdam · Since 1898</span>
                </p>
              </div>
              <div className="logo-cross">×</div>
              <div className="logo-card">
                <img
                  src="https://arbertools.com/assets/logos/hydromarket.svg"
                  alt="Hydromarket Indonesia"
                  className="hydromarket-logo-img"
                  referrerPolicy="no-referrer"
                />
                <p className="logo-role">
                  Indonesian Distribution
                  <br />
                  <span>Jakarta · Sejak 2010s</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORES / WHERE TO BUY SECTION */}
      <section id="stores" className="stores">
        <div className="container">
          <div className="stores-header">
            <h2>ARBER TOOLS, Available in Indonesia</h2>
          </div>

          {/* STORES LAYOUT CONTAINER */}
          <div className="stores-layout">
            {/* BLOCK 1: BUY DIRECT */}
            <div className="stores-block buy-block">
              <div className="block-header">
                <span className="eyebrow">{activeLang === "en" ? "Buy Direct" : "Beli Langsung"}</span>
              </div>
              <div className="stores-grid-buy">
                <a
                  href="https://shopee.co.id/arbertools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-card"
                >
                  <div className="market-logo">
                    <span>Shopee</span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="market-icon">
                      <rect x="3" y="8" width="18" height="13" rx="2" ry="2" />
                      <path d="M16 8a4 4 0 0 0-8 0" />
                    </svg>
                  </div>
                  <div className="market-meta">
                    <div>Official Store</div>
                    <div>Indonesia</div>
                  </div>
                  <span className="market-cta">Visit Store →</span>
                </a>

                <a
                  href="https://hydromarket.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-card"
                >
                  <div className="market-logo">
                    <span>Hydromarket</span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="market-icon">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div className="market-meta">
                    <div>Direct Distributor</div>
                    <div>B2B</div>
                  </div>
                  <span className="market-cta">hydromarket.co.id →</span>
                </a>
              </div>
            </div>

            {/* BLOCK 2: FOLLOW US */}
            <div className="stores-block follow-block">
              <div className="block-header">
                <span className="eyebrow">{activeLang === "en" ? "Follow Us" : "Ikuti Kami"}</span>
              </div>
              <div className="stores-grid-follow">
                <a
                  href="https://www.instagram.com/arbertools/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-card"
                >
                  <div className="market-logo">
                    <span>Instagram</span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="market-icon">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div className="market-meta">
                    <div>@arbertools</div>
                    <div>{activeLang === "en" ? "Social Feed" : "Media Sosial"}</div>
                  </div>
                  <span className="market-cta">
                    {activeLang === "en" ? "Visit Profile →" : "Kunjungi Profil →"}
                  </span>
                </a>

                <a
                  href="https://www.tiktok.com/@arber.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-card"
                >
                  <div className="market-logo">
                    <span>TikTok</span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="market-icon">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </div>
                  <div className="market-meta">
                    <div>@arber.tools</div>
                    <div>{activeLang === "en" ? "Short Videos" : "Video Pendek"}</div>
                  </div>
                  <span className="market-cta">
                    {activeLang === "en" ? "Visit Profile →" : "Kunjungi Profil →"}
                  </span>
                </a>

                <a
                  href="https://www.youtube.com/@ARBERTools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-card"
                >
                  <div className="market-logo">
                    <span>YouTube</span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="market-icon">
                      <rect x="2" y="4" width="20" height="16" rx="5" />
                      <polygon points="10 9 15 12 10 15 10 9" />
                    </svg>
                  </div>
                  <div className="market-meta">
                    <div>@ARBERTools</div>
                    <div>{activeLang === "en" ? "Video Channel" : "Saluran Video"}</div>
                  </div>
                  <span className="market-cta">
                    {activeLang === "en" ? "Visit Channel →" : "Kunjungi Saluran →"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-brand flex justify-center pb-8 mb-12 border-b border-white/10">
            <div className="bg-white px-12 py-6 inline-flex items-center justify-center rounded-sm shadow-lg max-w-full">
              <img 
                src="assets/images/logo.svg" 
                alt="ARBER TOOLS Logo" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                style={{ maxHeight: "96px" }}
              />
            </div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Heritage</h4>
              <p>
                Designed in Rotterdam
                <br />
                Since 1898
                <br />
                Dutch Engineering
              </p>
            </div>
            <div className="footer-col">
              <h4>Made For</h4>
              <p>
                Indonesia
                <br />
                Jakarta · Surabaya
                <br />
                Hydraulic professionals
              </p>
            </div>
            <div className="footer-col">
              <h4>Social</h4>
              <p>
                <a
                  href="https://www.instagram.com/arbertools/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="https://www.youtube.com/@ARBERTools"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <br />
                <a
                  href="https://www.tiktok.com/@arber.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </p>
            </div>
            <div className="footer-col">
              <div className="footer-subcol">
                <h4>Stores</h4>
                <p>
                  <a
                    href="https://shopee.co.id/arbertools"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shopee
                  </a>
                </p>
              </div>
              <div className="footer-subcol">
                <h4>Distribution</h4>
                <p>
                  <a
                    href="https://hydromarket.co.id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hydromarket Indonesia
                  </a>
                  <br />
                  <span style={{ opacity: 0.65 }}>
                    Exclusive Indonesian distributor
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 1898–2026 ARBER TOOLS · All rights reserved.</span>
            <span>Designed in Rotterdam · Crafted for Indonesia</span>
          </div>
        </div>
      </footer>
    </>
  );
}
