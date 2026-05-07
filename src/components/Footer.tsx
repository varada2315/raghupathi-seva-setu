import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Footer() {
  const [lang, setLang] = useState<"en" | "hi">("en");

  useEffect(() => {
    const saved = localStorage.getItem("prpct-lang") as "en" | "hi";
    if (saved) setLang(saved);
  }, []);

  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{t("The Trust", "ट्रस्ट के बारे में")}</h4>
            <p>
              {t(
                "Pandit Raghunath Prasad Charitable Trust — a registered ISO 9001:2015 certified non-profit serving communities across Rajasthan and Delhi NCR.",
                "पंडित रघुनाथ प्रसाद चैरिटेबल ट्रस्ट — एक पंजीकृत ISO 9001:2015 प्रमाणित गैर-लाभकारी संस्था।"
              )}
            </p>
          </div>
          <div>
            <h4>{t("Contact", "संपर्क")}</h4>
            <p>
              <i className="fa-solid fa-location-dot"></i>{" "}
              <span>{t("Kathumar, Alwar, Rajasthan 321605", "कठूमर, अलवर, राजस्थान 321605")}</span>
            </p>
            <p>
              <i className="fa-brands fa-whatsapp"></i>{" "}
              <a href="https://wa.me/919782222919">+91 9782222919</a>
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:Panditraghunathofficial@gmail.com">
                Panditraghunathofficial@gmail.com
              </a>
            </p>
            <div className="social">
              <a href="https://wa.me/919782222919" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:Panditraghunathofficial@gmail.com" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          <div>
            <h4>{t("Quick Links", "त्वरित लिंक")}</h4>
            <p>
              <Link to="/about">{t("About Us", "हमारे बारे में")}</Link>
            </p>
            <p>
              <Link to="/registrations">{t("Registrations", "पंजीकरण")}</Link>
            </p>
            <p>
              <Link to="/donate">{t("Partner With Us", "साझेदार बनें")}</Link>
            </p>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Pandit Raghunath Prasad Charitable Trust.{" "}
          <span>{t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}</span>
        </div>
      </div>
    </footer>
  );
}
