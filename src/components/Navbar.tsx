import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "hi">("en");

  useEffect(() => {
    const saved = localStorage.getItem("prpct-lang") as "en" | "hi";
    if (saved) {
      setLang(saved);
      document.documentElement.lang = saved;
      document.body.classList.toggle("lang-hi", saved === "hi");
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "hi" : "en";
    setLang(newLang);
    localStorage.setItem("prpct-lang", newLang);
    document.documentElement.lang = newLang;
    document.body.classList.toggle("lang-hi", newLang === "hi");
    window.location.reload(); // Simplest way to re-render all bilingual content for now if we use a global state
  };

  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);

  return (
    <>
      <div className="top-strip"></div>
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="brand">
            <div className="brand-mark">ॐ</div>
            <div className="brand-text">
              <span className="en">{t("Pandit Raghunath Prasad", "पंडित रघुनाथ प्रसाद")}</span>
              <span className="hi">{t("Charitable Trust", "चैरिटेबल ट्रस्ट")}</span>
            </div>
          </Link>
          <button 
            className="menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link to="/" activeProps={{ className: "active" }}>{t("Home", "मुख्य पृष्ठ")}</Link>
            <Link to="/about" activeProps={{ className: "active" }}>{t("About", "परिचय")}</Link>
            <Link to="/registrations" activeProps={{ className: "active" }}>{t("Registrations", "पंजीकरण")}</Link>
            <Link to="/donate" activeProps={{ className: "active" }}>{t("Partner With Us", "साझेदार बनें")}</Link>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === "hi" ? "EN" : "हिन्दी"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
