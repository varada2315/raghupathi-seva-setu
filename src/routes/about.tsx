import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
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
          <h1 className="fade in">{t("About Our Trust", "हमारे ट्रस्ट के बारे में")}</h1>
          <div className="hi-title fade in">
            {t("A legacy of service since inception", "स्थापना से ही सेवा की विरासत")}
          </div>
          <div className="ornament fade in"></div>
        </div>
      </header>

      <section className="block">
        <div className="container">
          <div className="two-col fade in">
            <div>
              <img
                className="about-image"
                src="/img-community.jpg"
                alt="Trust members serving the community"
                loading="lazy"
                width="1024"
                height="768"
              />
              <h2 style={{ color: "var(--green)", marginBottom: "1rem" }}>
                {t("Our Story", "हमारी कहानी")}
              </h2>
              <p>
                {t(
                  "Pandit Raghunath Prasad Charitable Trust was founded with a single conviction: that quality healthcare and human dignity must reach every village, every household, and every individual — regardless of means. Named in honour of Pandit Raghunath Prasad, whose life was dedicated to selfless service, the Trust carries forward that vision through structured medical, educational and welfare programmes.",
                  "पंडित रघुनाथ प्रसाद चैरिटेबल ट्रस्ट की स्थापना एक ही दृढ़ विश्वास से हुई — कि गुणवत्तापूर्ण स्वास्थ्य सेवा और मानव गरिमा हर गाँव, हर परिवार और हर व्यक्ति तक पहुँचनी चाहिए। पंडित रघुनाथ प्रसाद जी, जिनका जीवन निःस्वार्थ सेवा को समर्पित था, उनके नाम पर ट्रस्ट उसी दृष्टि को आगे बढ़ा रहा है।"
                )}
              </p>
              <p style={{ marginTop: "1rem" }}>
                {t(
                  "Today, the Trust operates from offices in Alwar (Rajasthan) and New Delhi, with active programmes across Delhi NCR and Rajasthan. We are fully registered under all major statutory frameworks and certified to ISO 9001:2015 quality standards.",
                  "आज, ट्रस्ट अलवर (राजस्थान) और नई दिल्ली स्थित कार्यालयों से संचालित होता है, तथा दिल्ली NCR व राजस्थान में सक्रिय कार्यक्रम चलाता है। हम सभी प्रमुख सांविधिक ढाँचों के अंतर्गत पूर्णतः पंजीकृत और ISO 9001:2015 गुणवत्ता मानकों के अनुरूप प्रमाणित हैं।"
                )}
              </p>
            </div>
            <div>
              <div className="info-card">
                <h4>
                  <i className="fa-solid fa-building"></i>{" "}
                  <span>{t("Registered Office", "पंजीकृत कार्यालय")}</span>
                </h4>
                <p>{t("Kathumar, Alwar, Rajasthan 321605", "कठूमर, अलवर, राजस्थान 321605")}</p>
              </div>
              <div className="info-card">
                <h4>
                  <i className="fa-solid fa-city"></i>{" "}
                  <span>{t("Branch Office", "शाखा कार्यालय")}</span>
                </h4>
                <p>{t("A4 Paschim Vihar, New Delhi", "A4 पश्चिम विहार, नई दिल्ली")}</p>
              </div>
              <div className="info-card">
                <h4>
                  <i className="fa-brands fa-whatsapp"></i> <span>{t("WhatsApp", "व्हाट्सऐप")}</span>
                </h4>
                <p>
                  <a href="https://wa.me/919782222919">+91 9782222919</a>
                </p>
              </div>
              <div className="info-card">
                <h4>
                  <i className="fa-solid fa-envelope"></i> <span>{t("Email", "ईमेल")}</span>
                </h4>
                <p>
                  <a href="mailto:Panditraghunathofficial@gmail.com">
                    Panditraghunathofficial@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="iso-banner fade in">
            <div className="seal">
              ISO
              <br />
              9001:2015
            </div>
            <h3>{t("ISO 9001:2015 Registered Organisation", "ISO 9001:2015 पंजीकृत संगठन")}</h3>
            <p style={{ opacity: 0.92, marginTop: ".5rem" }}>
              {t(
                "Our processes, governance and service delivery meet international quality management standards.",
                "हमारी प्रक्रियाएँ, शासन और सेवा वितरण अंतरराष्ट्रीय गुणवत्ता प्रबंधन मानकों के अनुरूप हैं।"
              )}
            </p>
          </div>

          <div className="two-col fade in" style={{ marginTop: "1rem" }}>
            <div className="card" style={{ textAlign: "left", borderTopColor: "var(--green)" }}>
              <div className="icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3>{t("Our Vision", "हमारी दृष्टि")}</h3>
              <p>
                {t(
                  "A society where every person — regardless of geography, gender or economic background — has access to dignified healthcare and the opportunity to live a healthy, empowered life.",
                  "एक ऐसा समाज जहाँ प्रत्येक व्यक्ति को — चाहे उसका क्षेत्र, लिंग या आर्थिक पृष्ठभूमि कुछ भी हो — सम्मानजनक स्वास्थ्य सेवा और स्वस्थ, सशक्त जीवन जीने का अवसर प्राप्त हो।"
                )}
              </p>
            </div>
            <div className="card" style={{ textAlign: "left", borderTopColor: "var(--saffron)" }}>
              <div className="icon" style={{ color: "var(--saffron)" }}>
                <i className="fa-solid fa-hands-holding-circle"></i>
              </div>
              <h3>{t("Our Values", "हमारे मूल्य")}</h3>
              <p>
                {t(
                  "Compassion, transparency, accountability, inclusivity and respect — for the people we serve, the partners who support us, and the colleagues who make our work possible.",
                  "करुणा, पारदर्शिता, उत्तरदायित्व, समावेशिता और सम्मान — उन लोगों के लिए जिनकी हम सेवा करते हैं, उन साझेदारों के लिए जो हमारा समर्थन करते हैं, और उन सहयोगियों के लिए जो हमारे कार्य को संभव बनाते हैं।"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
