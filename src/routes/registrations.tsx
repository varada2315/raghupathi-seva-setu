import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/registrations")({
  component: Registrations,
});

function Registrations() {
  const [lang, setLang] = useState<"en" | "hi">("en");

  useEffect(() => {
    const saved = localStorage.getItem("prpct-lang") as "en" | "hi";
    if (saved) setLang(saved);
  }, []);

  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);

  return (
    <>
      <header className="hero" style={{ padding: "3.5rem 0 2.5rem" }}>
        <div className="hero-inner">
          <h1 className="fade in">{t("Certifications & Registrations", "प्रमाणन एवं पंजीकरण")}</h1>
          <div className="hi-title fade in">
            {t("Verified, transparent, accountable", "सत्यापित, पारदर्शी, उत्तरदायी")}
          </div>
          <div className="ornament fade in"></div>
          <p className="tagline fade in">
            {t(
              "We are a fully registered and legally compliant charitable organisation, certified across eight statutory and quality frameworks.",
              "हम एक पूर्ण रूप से पंजीकृत और विधिक रूप से अनुपालक चैरिटेबल संगठन हैं, जो आठ सांविधिक एवं गुणवत्ता ढाँचों के अंतर्गत प्रमाणित है।"
            )}
          </p>
        </div>
      </header>

      <section className="block">
        <div className="container">
          <div className="cert-grid fade in">
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-scroll"></i>
              </div>
              <h4>{t("Trust Deed", "ट्रस्ट डीड")}</h4>
              <span className="hi">{t("Founding legal document", "स्थापना विधिक दस्तावेज")}</span>
              <div className="verified">✓ Registered</div>
            </div>
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-id-card"></i>
              </div>
              <h4>{t("PAN Card", "पैन कार्ड")}</h4>
              <span className="hi">
                {t("Permanent Account Number", "स्थायी खाता संख्या")}
              </span>
              <div className="verified">✓ Registered</div>
            </div>
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <h4>{t("Niti Aayog", "नीति आयोग")}</h4>
              <span className="hi">{t("NGO Darpan listed", "NGO दर्पण पंजीकृत")}</span>
              <div className="verified">✓ Registered</div>
            </div>
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h4>{t("CSR Registration", "सीएसआर पंजीकरण")}</h4>
              <span className="hi">{t("MCA CSR-1 approved", "MCA CSR-1 अनुमोदित")}</span>
              <div className="verified">✓ Registered</div>
            </div>
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-award"></i>
              </div>
              <h4>{t("ISO 9001:2015", "आईएसओ 9001:2015")}</h4>
              <span className="hi">{t("Quality management system", "गुणवत्ता प्रबंधन प्रणाली")}</span>
              <div className="verified">✓ Certified</div>
            </div>
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-file-shield"></i>
              </div>
              <h4>{t("12A", "12A")}</h4>
              <span className="hi">{t("Income tax exemption", "आयकर छूट")}</span>
              <div className="verified">✓ Registered</div>
            </div>
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-percent"></i>
              </div>
              <h4>{t("80G", "80G")}</h4>
              <span className="hi">{t("Donor tax deduction", "दानदाता कर कटौती")}</span>
              <div className="verified">✓ Registered</div>
            </div>
            <div className="cert">
              <div className="seal">
                <i className="fa-solid fa-industry"></i>
              </div>
              <h4>{t("MSME", "एमएसएमई")}</h4>
              <span className="hi">{t("Udyam registered", "उद्यम पंजीकृत")}</span>
              <div className="verified">✓ Registered</div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "2.5rem", color: "#666", fontStyle: "italic" }}>
            {t(
              "Copies of all registration certificates are available on request via email.",
              "सभी पंजीकरण प्रमाणपत्रों की प्रतियाँ ईमेल पर अनुरोध करने पर उपलब्ध हैं।"
            )}
          </p>
        </div>
      </section>
    </>
  );
}
