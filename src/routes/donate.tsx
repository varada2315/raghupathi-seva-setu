import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/donate")({
  component: Donate,
});

function Donate() {
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
          <h1 className="fade in">{t("Partner With Us", "हमारे साथ जुड़ें")}</h1>
          <div className="hi-title fade in">
            {t(
              "Together we extend healthcare to those who need it most",
              "मिलकर हम स्वास्थ्य सेवा उन तक पहुँचाते हैं जिन्हें इसकी सबसे अधिक आवश्यकता है"
            )}
          </div>
          <div className="ornament fade in"></div>
          <p className="tagline fade in">
            {t(
              "Your contribution — whether financial, professional, or in-kind — directly funds medical camps, nursing programmes and community outreach across Rajasthan and Delhi NCR. Every partnership is acknowledged with full transparency and a tax-deductible receipt under 80G.",
              "आपका योगदान — चाहे वह आर्थिक हो, व्यावसायिक हो, या वस्तु रूप में — सीधे राजस्थान और दिल्ली NCR में चिकित्सा शिविरों, नर्सिंग कार्यक्रमों और सामुदायिक सेवा को निधि देता है। प्रत्येक साझेदारी पूर्ण पारदर्शिता और 80G के अंतर्गत कर-कटूठी योग्य रसीद के साथ स्वीकार की जाती है।"
            )}
          </p>
        </div>
      </header>

      <section className="block">
        <div className="container">
          <div className="section-title fade in">
            <h2>{t("Bank Details", "बैंक विवरण")}</h2>
            <div className="hi">{t("Direct contributions", "प्रत्यक्ष योगदान")}</div>
            <div className="underline"></div>
          </div>
          <div className="bank-grid fade in">
            <div className="bank-card">
              <h4>
                <i className="fa-solid fa-building-columns"></i> Federal Bank
              </h4>
              <div className="row">
                <strong>{t("A/C Name", "खाता धारक")}</strong>
                <span>PANDIT RAGHUNATH PRASAD CHARITABLE TRUST</span>
              </div>
              <div className="row">
                <strong>{t("A/C Number", "खाता संख्या")}</strong>
                <span>24520100015006</span>
              </div>
              <div className="row">
                <strong>IFSC</strong>
                <span>FDRL0002452</span>
              </div>
              <div className="row">
                <strong>UPI</strong>
                <span>pandit15006qr@fbl</span>
              </div>
            </div>
            <div className="bank-card" style={{ borderTopColor: "var(--green)" }}>
              <h4 style={{ color: "var(--saffron)" }}>
                <i className="fa-solid fa-building-columns"></i> SBI Bank
              </h4>
              <div className="row">
                <strong>{t("A/C Name", "खाता धारक")}</strong>
                <span>PANDIT RAGHUNATH PRASAD CHARITABLE TRUST</span>
              </div>
              <div className="row">
                <strong>{t("A/C Number", "खाता संख्या")}</strong>
                <span>42277875408</span>
              </div>
              <div className="row">
                <strong>IFSC</strong>
                <span>SBIN0064392</span>
              </div>
            </div>
          </div>

          <div className="qr-box fade in">
            <img
              src="/qr-federal-bank.png"
              alt="Federal Bank UPI QR Code"
              style={{ maxWidth: "280px" }}
            />
            <p>{t("Scan & Pay with any UPI App", "किसी भी UPI ऐप से स्कैन करें और भुगतान करें")}</p>
            <small style={{ color: "#666" }}>pandit15006qr@fbl</small>
          </div>

          <div className="feature-banner fade in" style={{ marginTop: "3rem" }}>
            <img
              src="/img-women.jpg"
              alt="Women in our community programmes"
              loading="lazy"
              width="1024"
              height="768"
            />
            <div className="overlay">
              <div>
                <h3>{t("Every contribution reaches a real life", "हर योगदान एक वास्तविक जीवन तक पहुँचता है")}</h3>
                <p>
                  {t(
                    "From rural Rajasthan to Delhi NCR — your partnership funds healthcare, training and dignity.",
                    "ग्रामीण राजस्थान से दिल्ली NCR तक — आपकी साझेदारी स्वास्थ्य, प्रशिक्षण और गरिमा को निधि देती है।"
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="cta-grid fade in" style={{ marginTop: "3rem" }}>
            <div className="cta-block">
              <h3>{t("CSR Partnership", "सीएसआर साझेदारी")}</h3>
              <p>
                {t(
                  "We are MCA CSR-1 registered. Corporates can partner on flagship healthcare and women empowerment programmes with structured impact reporting and full statutory compliance.",
                  "हम MCA CSR-1 पंजीकृत हैं। कॉर्पोरेट संरचित प्रभाव रिपोर्टिंग और पूर्ण सांविधिक अनुपालन के साथ प्रमुख स्वास्थ्य और महिला सशक्तिकरण कार्यक्रमों में साझेदारी कर सकते हैं।"
                )}
              </p>
              <a
                href="mailto:Panditraghunathofficial@gmail.com?subject=CSR%20Partnership%20Enquiry"
                className="btn"
              >
                {t("Discuss CSR Collaboration", "सीएसआर पर चर्चा करें")}
              </a>
            </div>
            <div className="cta-block alt">
              <h3>{t("Volunteer With Us", "स्वयंसेवक बनें")}</h3>
              <p>
                {t(
                  "Doctors, nurses, social workers, students and community members — your time is the most valuable contribution. Join our medical camps and outreach programmes.",
                  "डॉक्टर, नर्स, सामाजिक कार्यकर्ता, छात्र और समुदाय के सदस्य — आपका समय सबसे मूल्यवान योगदान है। हमारे चिकित्सा शिविरों और सेवा कार्यक्रमों में शामिल हों।"
                )}
              </p>
              <a href="https://wa.me/919782222919?text=I%20want%20to%20volunteer" className="btn">
                {t("Sign Up to Volunteer", "स्वयंसेवक के रूप में पंजीकरण करें")}
              </a>
            </div>
          </div>

          <div className="iso-banner fade in" style={{ marginTop: "3rem" }}>
            <h3>{t("80G Tax Benefit", "80G कर लाभ")}</h3>
            <p style={{ opacity: 0.92, marginTop: ".5rem" }}>
              {t(
                "All contributions to the Trust are eligible for tax deduction under Section 80G of the Income Tax Act. Receipts are issued via email.",
                "ट्रस्ट को दिए गए सभी योगदान आयकर अधिनियम की धारा 80G के अंतर्गत कर कटौती के लिए पात्र हैं। रसीदें ईमेल द्वारा जारी की जाती हैं।"
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
