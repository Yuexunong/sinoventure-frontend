// SinoVenture — Home Page
// Design: Dark Gold Luxury | Art Deco Modernism
// Colors: Ink Black #0A0E17, Gold #B8965A/#D4AF72, White #FFFFFF
// Fonts: Cormorant Garamond (display) + Inter (body) + Noto Sans SC (CJK)

import { useEffect, useRef, useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const gold = "#B8965A";
const gold2 = "#D4AF72";
const ink = "#0A0E17";
const ink2 = "#131929";
const line = "rgba(184,150,90,0.3)";

// ─── HERO SLIDES DATA ────────────────────────────────────────────────────────
const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1800&q=85&auto=format",
    city: "Shanghai · 上海",
  },
  {
    bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=85&auto=format",
    city: "Shenzhen · 深圳",
  },
  {
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&auto=format",
    city: "Beijing · 北京",
  },
  {
    bg: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1800&q=85&auto=format",
    city: "Guangzhou · 广州",
  },
];

// ─── SERVICES DATA ───────────────────────────────────────────────────────────
const SERVICES = [
  {
    num: "01",
    icon: "🏢",
    title: "Company Registration",
    desc: "Full WFOE, Joint Venture, or Representative Office registration including name approval, business scope filing, capital verification, and business license issuance.",
  },
  {
    num: "02",
    icon: "📍",
    title: "Registered Address",
    desc: "Government-approved virtual and physical registered addresses in Shanghai, Beijing, Shenzhen, and Guangzhou. All mail forwarding and official correspondence handled.",
  },
  {
    num: "03",
    icon: "🛂",
    title: "Work Visa Processing",
    desc: "Full preparation and submission of Z-visa, M-visa, and R-visa applications. Our bilingual legal team reviews every document — 98% first-attempt approval.",
  },
  {
    num: "04",
    icon: "📋",
    title: "Document Audit & Review",
    desc: "Thorough pre-submission review of all legal documents, corporate filings, and visa materials. We identify errors, missing items, and compliance issues before they cause delays.",
  },
  {
    num: "05",
    icon: "⚖️",
    title: "Licenses & Permits",
    desc: "Industry-specific licensing for retail, trading, technology, food & beverage, and manufacturing. We identify which permits apply to your exact business model and obtain them.",
  },
  {
    num: "06",
    icon: "🏦",
    title: "Corporate Bank Account",
    desc: "Complete support for RMB and foreign-currency corporate account opening at major Chinese banks. We prepare all KYC documentation and accompany you through the process.",
  },
];

// ─── PROCESS STEPS ───────────────────────────────────────────────────────────
const STEPS = [
  {
    n: "1",
    title: "Free Consultation",
    desc: "Discuss your business model, target city, and team composition. We recommend the optimal structure and visa pathway for your specific situation.",
  },
  {
    n: "2",
    title: "Document Preparation",
    desc: "We provide a precise, personalised document checklist. Every document is reviewed by our legal team for completeness and accuracy before submission.",
  },
  {
    n: "3",
    title: "Government Filing",
    desc: "We file on your behalf with SAMR, local PSB, and other relevant authorities. You receive real-time updates at every stage of the review process.",
  },
  {
    n: "4",
    title: "Activation & Beyond",
    desc: "Your business license, seals, and visa are issued. We guide you through tax registration, bank account opening, and ongoing compliance requirements.",
  },
];

// ─── WHY US POINTS ───────────────────────────────────────────────────────────
const WHY_POINTS = [
  {
    title: "Bilingual Legal Expertise",
    desc: "All client-facing advisors are fully fluent in English and Mandarin. No translation gaps, no middlemen — direct communication throughout your case.",
  },
  {
    title: "Regulatory Intelligence",
    desc: "Our team continuously monitors SAMR, MOFCOM, and PSB policy updates. Clients receive proactive alerts when rules affecting their business change.",
  },
  {
    title: "Nationwide Coverage",
    desc: "Offices and established relationships in Shanghai, Beijing, Shenzhen, Guangzhou, Chengdu, Hangzhou, and 15 additional cities.",
  },
  {
    title: "Transparent Fixed Pricing",
    desc: "A complete cost breakdown before you sign anything. No hidden government fees, no unexpected surcharges at the end of the process.",
  },
];

// ─── VISA TYPES ──────────────────────────────────────────────────────────────
const VISAS = [
  {
    badge: "Z",
    title: "Work Visa",
    desc: "For foreigners employed by Chinese entities. Requires work permit notification letter, employment contract, and authenticated educational qualifications.",
  },
  {
    badge: "M",
    title: "Business Visit Visa",
    desc: "For commercial activities, trade negotiations, contract signings, or market investigation. Multiple-entry options available up to 10 years.",
  },
  {
    badge: "R",
    title: "Talent Visa",
    desc: "Priority processing for high-end foreign experts in government-identified fields. Extended validity and simplified application requirements.",
  },
  {
    badge: "F",
    title: "Exchange Visa",
    desc: "For cultural, scientific, or invited business exchange visits. Flexible single and multiple entry configurations with adjustable durations.",
  },
];

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    av: "S",
    text: '"SinoVenture registered our Shanghai trading company in ten working days. The whole process was handled remotely — documents, address, everything. Outstanding."',
    name: "Sarah Okonkwo",
    role: "Director · AfriTrade Imports, Nigeria",
  },
  {
    av: "A",
    text: '"My Z-visa had been rejected twice before I contacted SinoVenture. They identified the errors in minutes and secured approval on the very first attempt."',
    name: "Aleksei Volkov",
    role: "Operations Manager · Russia",
  },
  {
    av: "J",
    text: '"From WFOE structure selection to our first invoice — they guided every single step. Genuinely a one-stop service. I could not have done this without them."',
    name: "Julien Moreau",
    role: "Founder · TechVenture SAS, France",
  },
];

// ─── CITIES ──────────────────────────────────────────────────────────────────
const CITIES = [
  {
    bg: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&q=80&auto=format",
    en: "Shanghai",
    zh: "上海",
  },
  {
    bg: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80&auto=format",
    en: "Beijing",
    zh: "北京",
  },
  {
    bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format",
    en: "Shenzhen",
    zh: "深圳",
  },
  {
    bg: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600&q=80&auto=format",
    en: "Guangzhou",
    zh: "广州",
  },
  {
    bg: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80&auto=format",
    en: "Hangzhou",
    zh: "杭州",
  },
];

// ─── GOLD DIVIDER COMPONENT ──────────────────────────────────────────────────
function GoldDivider({ padded = true }: { padded?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: padded ? "0 5vw" : "0",
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${line})`,
        }}
      />
      <div
        style={{
          width: 8,
          height: 8,
          background: gold,
          transform: "rotate(45deg)",
          margin: "0 16px",
          flexShrink: 0,
        }}
      />
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, ${line}, transparent)`,
        }}
      />
    </div>
  );
}

// ─── SECTION LABEL COMPONENT ─────────────────────────────────────────────────
function SectionLabel({
  text,
  center = false,
}: {
  text: string;
  center?: boolean;
}) {
  return (
    <div
      data-reveal
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 16,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      {center && (
        <div style={{ width: 32, height: 1, background: gold }} />
      )}
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: gold,
          fontWeight: 400,
        }}
      >
        {text}
      </span>
      {!center && <div style={{ width: 32, height: 1, background: gold }} />}
      {center && (
        <div style={{ width: 32, height: 1, background: gold }} />
      )}
    </div>
  );
}

// ─── MAIN HOME COMPONENT ─────────────────────────────────────────────────────
export default function Home() {
  const [loaderOut, setLoaderOut] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Loader
  useEffect(() => {
    const dismiss = () => setLoaderOut(true);
    const t1 = setTimeout(dismiss, 2500);
    const t2 = setTimeout(dismiss, 3500);
    window.addEventListener("load", () => setTimeout(dismiss, 1200));
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Nav scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Carousel
  const goSlide = (n: number) => {
    setCurrentSlide(n);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrentSlide((c) => (c + 1) % 4),
      5500
    );
  };

  useEffect(() => {
    timerRef.current = setInterval(
      () => setCurrentSlide((c) => (c + 1) % 4),
      5500
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div style={{ background: ink, color: "#fff", minHeight: "100vh" }}>
      {/* ─── LOADER ─── */}
      <div
        id="sv-loader"
        className={loaderOut ? "out" : ""}
        style={{
          position: "fixed",
          inset: 0,
          background: ink,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.8s 0.2s",
          opacity: loaderOut ? 0 : 1,
          pointerEvents: loaderOut ? "none" : "all",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div className="loader-char">誉</div>
          <div className="loader-line-anim" />
        </div>
      </div>

      {/* ─── NAV ─── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5vw",
          height: 76,
          transition: "background 0.4s, box-shadow 0.4s",
          background: navScrolled ? "rgba(10,14,23,0.92)" : "transparent",
          backdropFilter: navScrolled ? "blur(16px)" : "none",
          boxShadow: navScrolled ? `0 1px 0 ${line}` : "none",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: `1px solid ${gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              color: gold,
              position: "relative",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -4,
                left: -4,
                width: 6,
                height: 6,
                border: `1px solid ${gold}`,
                background: ink,
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: -4,
                right: -4,
                width: 6,
                height: 6,
                border: `1px solid ${gold}`,
                background: ink,
              }}
            />
            誉
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "0.06em",
              }}
            >
              SinoVenture
            </div>
            <div
              style={{
                fontSize: 10,
                color: gold,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              Premium Business Services
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            gap: 36,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {["services", "process", "visa", "cities", "contact"].map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 12.5,
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  fontFamily: "'Inter', sans-serif",
                  padding: 0,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = gold2)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                }
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("contact")}
          style={{
            border: `1px solid ${gold}`,
            color: gold,
            padding: "10px 26px",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "transparent",
            transition: "all 0.3s",
            cursor: "pointer",
            whiteSpace: "nowrap",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = gold;
            e.currentTarget.style.color = ink;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = gold;
          }}
          className="hidden md:block"
        >
          Free Consultation
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: `1px solid ${line}`,
            color: gold,
            padding: "8px 12px",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 76,
            left: 0,
            right: 0,
            background: "rgba(10,14,23,0.97)",
            backdropFilter: "blur(16px)",
            zIndex: 799,
            padding: "24px 5vw",
            borderBottom: `1px solid ${line}`,
          }}
        >
          {["services", "process", "visa", "cities", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 0",
                borderBottom: `1px solid rgba(255,255,255,0.05)`,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            style={{
              marginTop: 16,
              width: "100%",
              background: gold,
              color: ink,
              border: "none",
              padding: "14px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Free Consultation
          </button>
        </div>
      )}

      {/* ─── HERO CAROUSEL ─── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Slides */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${slide.bg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === currentSlide ? 1 : 0,
              transition: "opacity 1.4s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(10,14,23,0.82) 0%, rgba(10,14,23,0.55) 50%, rgba(10,14,23,0.3) 100%)",
              }}
            />
          </div>
        ))}

        {/* Hero Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 5vw",
            paddingTop: 76,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 28,
              opacity: 0,
              transform: "translateY(20px)",
              animation: "heroIn 0.9s 1.4s forwards",
            }}
          >
            <div style={{ width: 48, height: 1, background: gold }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: gold2,
                fontWeight: 400,
              }}
            >
              Foreign Business Services · China
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "#fff",
              maxWidth: 780,
              marginBottom: 8,
              opacity: 0,
              transform: "translateY(24px)",
              animation: "heroIn 1s 1.6s forwards",
            }}
          >
            Your Gateway to
            <br />
            <em style={{ color: gold2, fontStyle: "italic" }}>
              Business in China
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(20px, 2.4vw, 30px)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 48,
              letterSpacing: "0.04em",
              opacity: 0,
              transform: "translateY(20px)",
              animation: "heroIn 0.9s 1.8s forwards",
            }}
          >
            Company Registration · Work Visas · Legal Compliance
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: 440,
              marginBottom: 52,
              opacity: 0,
              transform: "translateY(16px)",
              animation: "heroIn 0.9s 2s forwards",
            }}
          >
            We handle every legal, administrative, and regulatory step so you
            can focus on what matters — building your business in one of the
            world's largest markets.
          </p>

          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              flexWrap: "wrap",
              opacity: 0,
              animation: "heroIn 0.9s 2.2s forwards",
            }}
          >
            <button
              onClick={() => scrollTo("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: gold,
                color: ink,
                padding: "16px 40px",
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = gold2;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = gold;
                e.currentTarget.style.transform = "none";
              }}
            >
              Start Your Journey
            </button>
            <button
              onClick={() => scrollTo("services")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                border: "1px solid rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.75)",
                padding: "16px 36px",
                fontSize: 12.5,
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = gold2;
                e.currentTarget.style.color = gold2;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
              }}
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* City Label */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            left: "5vw",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Currently showing
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              fontWeight: 300,
            }}
          >
            {SLIDES[currentSlide].city}
          </span>
        </div>

        {/* Carousel Dots */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            right: "5vw",
            zIndex: 3,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => goSlide(i)}
              style={{
                width: i === currentSlide ? 44 : 24,
                height: 2,
                background:
                  i === currentSlide ? gold : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.4s",
              }}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            borderTop: "1px solid rgba(184,150,90,0.2)",
            background: "rgba(10,14,23,0.75)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {[
            { num: "3,200+", label: "Companies Registered" },
            { num: "58", label: "Countries Served" },
            { num: "98%", label: "Visa Success Rate" },
            { num: "12+", label: "Years of Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: "22px 5vw",
                borderRight:
                  i < 3 ? "1px solid rgba(184,150,90,0.15)" : "none",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 36,
                    fontWeight: 300,
                    color: gold2,
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    lineHeight: 1.5,
                  }}
                  className="hidden sm:block"
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── GOLD DIVIDER ─── */}
      <GoldDivider padded={false} />

      {/* ─── SERVICES ─── */}
      <section
        id="services"
        style={{ padding: "120px 5vw", background: ink }}
      >
        <SectionLabel text="Our Services" />
        <h2
          data-reveal
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Everything You Need to
          <br />
          <em style={{ color: gold2, fontStyle: "italic" }}>
            Operate in China
          </em>
        </h2>
        <p
          data-reveal
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.85,
            maxWidth: 540,
            marginBottom: 60,
          }}
        >
          End-to-end business services for international entrepreneurs and
          executives — from first incorporation to full compliance.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: line,
            border: `1px solid ${line}`,
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} delay={i % 3} />
          ))}
        </div>
      </section>

      {/* ─── GOLD DIVIDER ─── */}
      <GoldDivider />

      {/* ─── PROCESS ─── */}
      <section
        id="process"
        style={{ padding: "120px 5vw", background: ink2 }}
      >
        <SectionLabel text="How It Works" center />
        <h2
          data-reveal
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "#fff",
            textAlign: "center",
            margin: "0 auto 16px",
          }}
        >
          From Inquiry to
          <br />
          <em style={{ color: gold2, fontStyle: "italic" }}>
            Open for Business
          </em>
        </h2>
        <p
          data-reveal
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.85,
            maxWidth: 540,
            textAlign: "center",
            margin: "0 auto 72px",
          }}
        >
          A transparent, structured process designed to minimise delays and
          maximise certainty.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            position: "relative",
          }}
          className="grid-cols-2 lg:grid-cols-4"
        >
          <div
            style={{
              position: "absolute",
              top: 36,
              left: "calc(12.5% + 20px)",
              right: "calc(12.5% + 20px)",
              height: 1,
              background: `linear-gradient(90deg, ${gold}, rgba(184,150,90,0.2), ${gold})`,
              zIndex: 0,
            }}
            className="hidden lg:block"
          />
          {STEPS.map((step, i) => (
            <div
              key={i}
              data-reveal
              data-reveal-delay={i > 0 ? String(i) : undefined}
              style={{
                padding: "0 32px",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  border: `1px solid ${gold}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                  background: ink2,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 300,
                  color: gold2,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 4,
                    borderRadius: "50%",
                    border: "1px solid rgba(184,150,90,0.2)",
                  }}
                />
                {step.n}
              </div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#fff",
                  marginBottom: 12,
                  letterSpacing: "0.03em",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.75,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section style={{ padding: "120px 5vw", background: ink }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <div>
            <SectionLabel text="Why SinoVenture" />
            <h2
              data-reveal
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              We Know What
              <br />
              <em style={{ color: gold2, fontStyle: "italic" }}>
                China Expects
              </em>
            </h2>
            <p
              data-reveal
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.85,
                maxWidth: 540,
                marginBottom: 8,
              }}
            >
              Chinese business regulations change constantly. Our team tracks
              every update so your filings are always current, compliant, and
              bulletproof.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {WHY_POINTS.map((pt, i) => (
                <li
                  key={i}
                  data-reveal
                  data-reveal-delay={i > 0 ? String(i) : undefined}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr",
                    gap: 16,
                    padding: "22px 0",
                    borderBottom:
                      i < WHY_POINTS.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    alignItems: "start",
                  }}
                >
                  <div style={{ color: gold, fontSize: 14, paddingTop: 2 }}>
                    ◆
                  </div>
                  <div>
                    <strong
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#fff",
                        display: "block",
                        marginBottom: 5,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {pt.title}
                    </strong>
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                      }}
                    >
                      {pt.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div data-reveal style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=900&q=85&auto=format')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(10,14,23,0.8))",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: -16,
                left: -16,
                right: 16,
                bottom: 16,
                border: `1px solid ${line}`,
                pointerEvents: "none",
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -24,
                right: -32,
                background: gold,
                color: ink,
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 44,
                  fontWeight: 300,
                  lineHeight: 1,
                  display: "block",
                }}
              >
                98%
              </span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: 4,
                }}
              >
                Visa Approval
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISA TYPES ─── */}
      <section
        id="visa"
        style={{ padding: "120px 5vw", background: ink2 }}
      >
        <SectionLabel text="Visa Services" />
        <h2
          data-reveal
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Every Business
          <br />
          <em style={{ color: gold2, fontStyle: "italic" }}>
            Visa Category
          </em>
        </h2>
        <p
          data-reveal
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.85,
            maxWidth: 540,
            marginBottom: 60,
          }}
        >
          We identify the correct visa category for your situation and prepare
          every document to maximise first-attempt approval.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: line,
            border: `1px solid ${line}`,
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VISAS.map((visa, i) => (
            <VisaCard key={i} visa={visa} delay={i} />
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        style={{
          padding: "120px 5vw",
          background: ink,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 200,
            fontWeight: 300,
            color: "rgba(184,150,90,0.04)",
            letterSpacing: "0.3em",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          TRUST
        </div>

        <SectionLabel text="Client Testimonials" center />
        <h2
          data-reveal
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "#fff",
            textAlign: "center",
            margin: "0 auto 16px",
          }}
        >
          Trusted Across
          <br />
          <em style={{ color: gold2, fontStyle: "italic" }}>58 Countries</em>
        </h2>
        <p
          data-reveal
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.85,
            maxWidth: 540,
            textAlign: "center",
            margin: "0 auto 64px",
          }}
        >
          International entrepreneurs from every continent have built their
          China operations through SinoVenture.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="grid-cols-1 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestiCard key={i} t={t} delay={i} />
          ))}
        </div>
      </section>

      {/* ─── CITIES STRIP ─── */}
      <section id="cities" style={{ background: ink2 }}>
        <SectionLabel
          text="Cities We Serve"
          center
        />
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            borderTop: `1px solid ${line}`,
            borderBottom: `1px solid ${line}`,
          }}
        >
          {CITIES.map((city, i) => (
            <CityItem key={i} city={city} />
          ))}
        </div>
        <div style={{ height: 48 }} />
      </section>

      {/* ─── CTA ─── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0C1525 0%, #131929 100%)",
          padding: "120px 5vw",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${gold})`,
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              background: gold,
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              width: 80,
              height: 1,
              background: `linear-gradient(90deg, ${gold}, transparent)`,
            }}
          />
        </div>
        <h2
          data-reveal
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 5vw, 62px)",
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Ready to Enter
          <br />
          the Chinese Market?
        </h2>
        <p
          data-reveal
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 480,
            margin: "0 auto 52px",
            lineHeight: 1.8,
          }}
        >
          Book a complimentary 30-minute consultation with one of our senior
          advisors. Clear answers, no obligation.
        </p>
        <div
          data-reveal
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: gold,
              color: ink,
              padding: "16px 40px",
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = gold2;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = gold;
              e.currentTarget.style.transform = "none";
            }}
          >
            Book Consultation
          </button>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(255,255,255,0.35)",
              color: "rgba(255,255,255,0.75)",
              padding: "16px 36px",
              fontSize: 12.5,
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = gold2;
              e.currentTarget.style.color = gold2;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.color = "rgba(255,255,255,0.75)";
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        style={{ padding: "120px 5vw", background: ink }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: Info */}
          <div>
            <SectionLabel text="Get In Touch" />
            <h2
              data-reveal
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Request a Free
              <br />
              <em style={{ color: gold2, fontStyle: "italic" }}>
                Consultation
              </em>
            </h2>
            <p
              data-reveal
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.85,
                maxWidth: 540,
                marginBottom: 40,
              }}
            >
              Complete the form and a dedicated advisor will respond within 24
              hours. Urgent visa cases are prioritised.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 32 }}
            >
              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: "enquiries@sinoventure.com",
                  note: "Replies within 24 hours",
                },
                {
                  icon: "💬",
                  label: "WeChat · WhatsApp",
                  value: "+86 138 0000 0000",
                  note: "Mon – Fri, 09:00 – 18:00 CST",
                },
                {
                  icon: "📍",
                  label: "Offices",
                  value: "Shanghai · Beijing · Shenzhen\nGuangzhou · Hangzhou · Chengdu",
                  note: "",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    paddingBottom: 32,
                    borderBottom:
                      i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      border: `1px solid ${line}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 18,
                      color: gold,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: gold,
                        marginBottom: 6,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.value}
                    </div>
                    {item.note && (
                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.3)",
                          marginTop: 4,
                        }}
                      >
                        {item.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div data-reveal>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 0 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1,
                  marginBottom: 1,
                }}
              >
                <FormInput
                  placeholder="First Name"
                  value={formState.firstName}
                  onChange={(v) =>
                    setFormState((s) => ({ ...s, firstName: v }))
                  }
                />
                <FormInput
                  placeholder="Last Name"
                  value={formState.lastName}
                  onChange={(v) =>
                    setFormState((s) => ({ ...s, lastName: v }))
                  }
                />
              </div>
              <FormInput
                placeholder="Email Address"
                type="email"
                value={formState.email}
                onChange={(v) => setFormState((s) => ({ ...s, email: v }))}
                style={{ marginBottom: 1 }}
              />
              <FormInput
                placeholder="WhatsApp / WeChat / Phone"
                value={formState.contact}
                onChange={(v) => setFormState((s) => ({ ...s, contact: v }))}
                style={{ marginBottom: 1 }}
              />
              <div style={{ marginBottom: 1 }}>
                <select
                  value={formState.service}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, service: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    background: ink2,
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    color:
                      formState.service
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.4)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13.5,
                    outline: "none",
                    WebkitAppearance: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled>
                    — Select Service Required —
                  </option>
                  {[
                    "Company Registration (WFOE)",
                    "Company Registration (JV)",
                    "Registered Address Rental",
                    "Work Visa (Z-Visa)",
                    "Business Visa (M-Visa)",
                    "Document Review & Audit",
                    "Multiple Services",
                  ].map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      style={{ background: ink2, color: "#fff" }}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 1 }}>
                <textarea
                  placeholder="Describe your business and any specific questions…"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    background: ink2,
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13.5,
                    outline: "none",
                    minHeight: 120,
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  marginTop: 2,
                  background: formSubmitted ? "#1a7a4a" : gold,
                  color: formSubmitted ? "#fff" : ink,
                  padding: "18px 40px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  width: "100%",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!formSubmitted)
                    e.currentTarget.style.background = gold2;
                }}
                onMouseLeave={(e) => {
                  if (!formSubmitted)
                    e.currentTarget.style.background = gold;
                }}
              >
                {formSubmitted
                  ? "✓ Received — we will be in touch within 24 hours"
                  : "Send Enquiry →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: ink2,
          padding: "64px 5vw 32px",
          borderTop: `1px solid ${line}`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            marginBottom: 28,
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: `1px solid ${gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  color: gold,
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -4,
                    left: -4,
                    width: 6,
                    height: 6,
                    border: `1px solid ${gold}`,
                    background: ink2,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: -4,
                    right: -4,
                    width: 6,
                    height: 6,
                    border: `1px solid ${gold}`,
                    background: ink2,
                  }}
                />
                誉
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.06em",
                  }}
                >
                  SinoVenture
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: gold,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Premium Business Services
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.8,
                marginTop: 16,
                maxWidth: 260,
              }}
            >
              Professional foreign affairs and business setup services for
              international entrepreneurs in China. Licensed, experienced,
              results-driven.
            </p>
          </div>

          {[
            {
              title: "Services",
              links: [
                "Company Registration",
                "Registered Address",
                "Work Visa (Z)",
                "Document Review",
                "Business Permits",
                "Bank Account",
              ],
            },
            {
              title: "Cities",
              links: [
                "Shanghai",
                "Beijing",
                "Shenzhen",
                "Guangzhou",
                "Hangzhou",
                "Chengdu",
              ],
            },
            {
              title: "Company",
              links: [
                "About Us",
                "Our Team",
                "Blog & Guides",
                "WFOE Guide",
                "Visa FAQ",
                "Contact",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h5
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: gold,
                  marginBottom: 20,
                  fontWeight: 400,
                }}
              >
                {col.title}
              </h5>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    marginBottom: 11,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = gold2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© 2025 SinoVenture. All rights reserved.</span>
          <span style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function ServiceCard({
  svc,
  delay,
}: {
  svc: (typeof SERVICES)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-reveal
      data-reveal-delay={delay > 0 ? String(delay) : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#111827" : ink2,
        padding: "48px 40px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${gold}, ${gold2})`,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s",
        }}
      />
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 64,
          fontWeight: 300,
          color: hovered ? "rgba(184,150,90,0.18)" : "rgba(184,150,90,0.1)",
          position: "absolute",
          top: 24,
          right: 28,
          lineHeight: 1,
          pointerEvents: "none",
          transition: "color 0.3s",
        }}
      >
        {svc.num}
      </div>
      <span style={{ fontSize: 28, marginBottom: 24, display: "block" }}>
        {svc.icon}
      </span>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          fontWeight: 400,
          color: "#fff",
          marginBottom: 14,
          letterSpacing: "0.02em",
        }}
      >
        {svc.title}
      </h3>
      <p
        style={{
          fontSize: 13.5,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.8,
          marginBottom: 28,
        }}
      >
        {svc.desc}
      </p>
      <a
        href="#contact"
        style={{
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: gold,
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "gap 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.gap = "14px")}
        onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
      >
        Enquire Now →
      </a>
    </div>
  );
}

function VisaCard({
  visa,
  delay,
}: {
  visa: (typeof VISAS)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-reveal
      data-reveal-delay={delay > 0 ? String(delay) : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#111827" : ink2,
        padding: "40px 32px",
        transition: "background 0.3s",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "inline-block",
          border: `1px solid ${gold}`,
          color: gold,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: "0.04em",
          padding: "8px 16px",
          marginBottom: 24,
        }}
      >
        {visa.badge}
      </div>
      <h4
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 19,
          fontWeight: 400,
          color: "#fff",
          marginBottom: 12,
        }}
      >
        {visa.title}
      </h4>
      <p
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.75,
        }}
      >
        {visa.desc}
      </p>
    </div>
  );
}

function TestiCard({
  t,
  delay,
}: {
  t: (typeof TESTIMONIALS)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-reveal
      data-reveal-delay={delay > 0 ? String(delay) : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? line : "rgba(255,255,255,0.06)"}`,
        padding: "40px 36px",
        background: ink2,
        position: "relative",
        transition: "border-color 0.3s, transform 0.3s",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 80,
          lineHeight: 1,
          color: gold,
          opacity: 0.4,
          position: "absolute",
          top: 24,
          right: 32,
        }}
      >
        "
      </div>
      <div
        style={{
          color: gold2,
          fontSize: 12,
          letterSpacing: 4,
          marginBottom: 20,
        }}
      >
        ★★★★★
      </div>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 17,
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.75,
          marginBottom: 28,
        }}
      >
        {t.text}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 24,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            border: `1px solid ${gold}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 18,
            color: gold2,
            flexShrink: 0,
          }}
        >
          {t.av}
        </div>
        <div>
          <div
            style={{ fontSize: 13.5, fontWeight: 500, color: "#fff" }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
              marginTop: 2,
            }}
          >
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

function CityItem({ city }: { city: (typeof CITIES)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: 0,
        position: "relative",
        height: 220,
        overflow: "hidden",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${city.bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.8s",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(180deg, rgba(10,14,23,0.1) 0%, rgba(10,14,23,0.5) 100%)"
            : "linear-gradient(180deg, rgba(10,14,23,0.3) 0%, rgba(10,14,23,0.7) 100%)",
          transition: "background 0.4s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 24,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontWeight: 300,
            color: "#fff",
          }}
        >
          {city.en}
        </div>
        <div
          style={{
            fontSize: 11,
            color: gold2,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: 2,
          }}
        >
          {city.zh}
        </div>
      </div>
    </div>
  );
}

function FormInput({
  placeholder,
  type = "text",
  value,
  onChange,
  style: extraStyle,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  style?: React.CSSProperties;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative", ...extraStyle }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "18px 20px",
          background: focused ? "#111827" : ink2,
          border: "none",
          borderBottom: `1px solid ${focused ? gold : "rgba(255,255,255,0.08)"}`,
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          fontSize: 13.5,
          outline: "none",
          transition: "border-color 0.3s, background 0.3s",
        }}
      />
    </div>
  );
}
