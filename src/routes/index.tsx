import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"en" | "hi">("en");

  useEffect(() => {
    const saved = localStorage.getItem("prpct-lang") as "en" | "hi";
    if (saved) setLang(saved);
  }, []);

  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);

  return (
    <>
      <header className="hero hero-bg">
        <div className="hero-bg-overlay" aria-hidden="true"></div>
        <div className="hero-inner">
          <h1 className="fade in">
            {t("Pandit Raghunath Prasad Charitable Trust", "पंडित रघुनाथ प्रसाद चैरिटेबल ट्रस्ट")}
          </h1>
          <div className="hi-title fade in">
            {t("Serving Humanity Through Healthcare", "स्वास्थ्य सेवा के माध्यम से मानवता की सेवा")}
          </div>
          <div className="ornament fade in" aria-hidden="true"></div>
          <p className="tagline fade in">
            {t(
              "A registered, ISO 9001:2015 certified charitable trust working across Rajasthan and Delhi NCR — providing affordable healthcare, community outreach and empowerment programmes for those who need them most.",
              "एक पंजीकृत, ISO 9001:2015 प्रमाणित चैरिटेबल ट्रस्ट जो राजस्थान और दिल्ली NCR में कार्यरत है — सुलभ स्वास्थ्य सेवा, सामुदायिक पहुँच और महिला सशक्तिकरण कार्यक्रम संचालित करता है।"
            )}
          </p>
          <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap" }} className="fade in">
            <Link to="/about" className="btn">
              {t("Our Story", "हमारी कहानी")}
            </Link>
            <Link to="/donate" className="btn btn-outline btn-on-dark">
              {t("Partner With Us", "साझेदार बनें")}
            </Link>
          </div>
        </div>
      </header>

      <section className="block">
        <div className="container">
          <div className="section-title fade in">
            <h2>{t("Our Mission", "हमारा मिशन")}</h2>
            <div className="hi">
              {t("Compassionate care, dignified service", "करुणामय देखभाल, सम्मानजनक सेवा")}
            </div>
            <div className="underline"></div>
          </div>
          <div className="cards">
            <div className="card fade in">
              <img
                className="card-image"
                src="/img-health.jpg"
                alt="Doctor examining a child at health camp"
                loading="lazy"
                width="1024"
                height="768"
              />
              <div className="icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3>{t("Health Services", "स्वास्थ्य सेवाएँ")}</h3>
              <span className="hi">{t("Camps, clinics, awareness", "शिविर, क्लिनिक, जागरूकता")}</span>
              <p>
                {t(
                  "Free medical camps, diagnostic drives and access to qualified nursing staff for under-served communities.",
                  "वंचित समुदायों के लिए निःशुल्क चिकित्सा शिविर, जाँच अभियान और योग्य नर्सिंग स्टाफ की उपलब्धता।"
                )}
              </p>
            </div>
            <div className="card fade in">
              <img
                className="card-image"
                src="/img-community.jpg"
                alt="Volunteers distributing supplies in a village"
                loading="lazy"
                width="1024"
                height="768"
              />
              <div className="icon" style={{ color: "var(--saffron)" }}>
                <i className="fa-solid fa-people-roof"></i>
              </div>
              <h3>{t("Community Outreach", "सामुदायिक पहुँच")}</h3>
              <span className="hi">{t("Villages, schools, families", "गाँव, विद्यालय, परिवार")}</span>
              <p>
                {t(
                  "Door-to-door programmes for hygiene, nutrition, sanitation and preventive health across rural Rajasthan and Delhi NCR.",
                  "ग्रामीण राजस्थान और दिल्ली NCR में स्वच्छता, पोषण और निवारक स्वास्थ्य के लिए घर-घर कार्यक्रम।"
                )}
              </p>
            </div>
            <div className="card fade in">
              <img
                className="card-image"
                src="/img-women.jpg"
                alt="Women at a community empowerment workshop"
                loading="lazy"
                width="1024"
                height="768"
              />
              <div className="icon" style={{ color: "var(--gold)" }}>
                <i className="fa-solid fa-venus"></i>
              </div>
              <h3>{t("Women Empowerment", "महिला सशक्तिकरण")}</h3>
              <span className="hi">{t("Skills, health, livelihood", "कौशल, स्वास्थ्य, आजीविका")}</span>
              <p>
                {t(
                  "Skill-building, maternal health, and livelihood support designed with and for women in our service areas.",
                  "हमारे सेवा क्षेत्रों की महिलाओं के साथ और उनके लिए कौशल विकास, मातृ स्वास्थ्य व आजीविका सहायता।"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="badges-strip">
        <div className="container">
          <div className="section-title fade in">
            <h2>{t("Fully Registered & Compliant", "पूर्ण रूप से पंजीकृत और अनुपालक")}</h2>
            <div className="hi">{t("Eight government certifications", "आठ सरकारी प्रमाणन")}</div>
            <div className="underline"></div>
          </div>
          <div className="badges-grid fade in">
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-scroll"></i>
              </div>
              <div className="name">{t("Trust Deed", "ट्रस्ट डीड")}</div>
              <span className="verified">✓ Registered</span>
            </div>
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-id-card"></i>
              </div>
              <div className="name">{t("PAN Card", "पैन कार्ड")}</div>
              <span className="verified">✓ Registered</span>
            </div>
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="name">{t("Niti Aayog", "नीति आयोग")}</div>
              <span className="verified">✓ Registered</span>
            </div>
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <div className="name">{t("CSR", "सीएसआर")}</div>
              <span className="verified">✓ Registered</span>
            </div>
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <div className="name">{t("ISO 9001:2015", "आईएसओ 9001:2015")}</div>
              <span className="verified">✓ Certified</span>
            </div>
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-file-shield"></i>
              </div>
              <div className="name">{t("12A", "12A")}</div>
              <span className="verified">✓ Registered</span>
            </div>
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-percent"></i>
              </div>
              <div className="name">{t("80G", "80G")}</div>
              <span className="verified">✓ Registered</span>
            </div>
            <div className="badge">
              <div className="icon">
                <i className="fa-solid fa-industry"></i>
              </div>
              <div className="name">{t("MSME", "एमएसएमई")}</div>
              <span className="verified">✓ Registered</span>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link to="/registrations" className="btn btn-outline">
              {t("View All Registrations", "सभी पंजीकरण देखें")}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
