// BridgeChina — Home Page
// Design: Dark Gold Luxury | Art Deco Modernism
// Brand: BridgeChina | Located at Alibaba Global Cross-border Center, Hangzhou
// Colors: Ink Black #0A0E17, Gold #B8965A/#D4AF72
// i18n: Full EN/ZH bilingual support via useLang hook

import { useEffect, useRef, useState } from "react";
import { t, tx, type Lang } from "@/lib/i18n";

const gold = "#B8965A";
const gold2 = "#D4AF72";
const ink = "#0A0E17";
const ink2 = "#131929";
const line = "rgba(184,150,90,0.3)";

// Brand assets — all WebP for maximum compression without quality loss
const LOGO = "/manus-storage/bridgechina-logo-transparent_9d98e64f.webp";
const ALIBABA_LOGO = "/manus-storage/alibaba-logo_a1c0e8fa.webp";
// Responsive campus images: mobile=44KB, desktop=131KB
const ALIBABA_IMG_MOBILE = "/manus-storage/alibaba-campus-mobile_62ad74a1.webp";  // 44KB
const ALIBABA_IMG_DESK   = "/manus-storage/alibaba-campus-desk_5049eb4e.webp";    // 131KB
const ALIBABA_IMG2_MOBILE = "/manus-storage/alibaba-campus2-mobile_d7d650ab.webp"; // 27KB
// LQIP — 40px blurred placeholder, inline base64, loads instantly
const ALIBABA_LQIP = "data:image/webp;base64,UklGRu4AAABXRUJQVlA4IOIAAACwBgCdASooABsAPzmUulavKyWjqrgMAeAnCWMAsPAIAUAFpDLg/hj7TCHQyvEFXdSd8JZTL6aECmFMwevkAAD30XfjDGbU61yA9Zkh5WV3XQq3eidP8wwCZokjfveG6epyucWe5u8nj/0/hKFXsm5xy/LwGKX++lfQgqgJe6FeqtB1euW12ungtxV+eQVqX53JNRmvBv5DJeNIjZS0efYnqgcS+iYLqYXG1+WLBXyzCUAsAtYQuXb4A/JYj1foNi4u8kyL8gG+oaHNPIuVxq/tpCNf9b1I2dfy5QUOm9RifgAA";

// Unsplash helper — always request WebP at correct responsive size
const unsplash = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fm=webp&w=${w}&q=${q}&fit=crop`;

// Google Maps link — Alibaba Binjiang Campus Building 5, Hangzhou
const MAP_LINK = "https://maps.google.com/?q=阿里巴巴滨江园区五号楼,杭州市滨江区,浙江省";

// Hero slides — mobile uses 480px images for fast load, desktop 1200px
const SLIDES = [
  { bg: unsplash("photo-1538428494232-9c0d8a3ab403", 1200, 75), bgMobile: unsplash("photo-1538428494232-9c0d8a3ab403", 480, 65), city: "Shanghai · 上海" },
  { bg: unsplash("photo-1508804185872-d7badad00f7d", 1200, 75), bgMobile: unsplash("photo-1508804185872-d7badad00f7d", 480, 65), city: "Beijing · 北京" },
  { bg: unsplash("photo-1474181487882-5abf3f0ba6c2", 1200, 75), bgMobile: unsplash("photo-1474181487882-5abf3f0ba6c2", 480, 65), city: "Guangzhou · 广州" },
  { bg: unsplash("photo-1566552881560-0be862a7c445", 1200, 75), bgMobile: unsplash("photo-1566552881560-0be862a7c445", 480, 65), city: "Hangzhou · 杭州" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// Language preference hook — persists to localStorage
function useLang(): [Lang, () => void] {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem("bc_lang") as Lang) || "en"; } catch { return "en"; }
  });
  const toggle = () => setLang(prev => {
    const next: Lang = prev === "en" ? "zh" : "en";
    try { localStorage.setItem("bc_lang", next); } catch {}
    return next;
  });
  return [lang, toggle];
}

function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${line})` }} />
      <div style={{ width: 8, height: 8, background: gold, transform: "rotate(45deg)", margin: "0 16px", flexShrink: 0 }} />
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${line}, transparent)` }} />
    </div>
  );
}

function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div data-reveal style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, justifyContent: center ? "center" : "flex-start" }}>
      <div style={{ width: 28, height: 1, background: gold }} />
      <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: gold, fontWeight: 400 }}>{text}</span>
      {center && <div style={{ width: 28, height: 1, background: gold }} />}
    </div>
  );
}

function BrandLogo({ size = 40 }: { size?: number }) {
  return (
    <img src={LOGO} alt="BridgeChina" style={{ width: size * 1.8, height: size, objectFit: "contain", objectPosition: "left center", background: "transparent", flexShrink: 0 }} />
  );
}

// Language toggle button — EN / 中
function LangToggle({ lang, onToggle, isMobile }: { lang: Lang; onToggle: () => void; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={lang === "en" ? "切换为中文" : "Switch to English"}
      style={{
        display: "flex", alignItems: "center", gap: 0,
        border: `1px solid ${hovered ? gold2 : line}`,
        background: "transparent", cursor: "pointer",
        fontFamily: "'Inter',sans-serif", overflow: "hidden",
        transition: "border-color 0.25s",
        flexShrink: 0,
        height: isMobile ? 32 : 34,
      }}
    >
      {(["en", "zh"] as Lang[]).map((l) => (
        <span key={l} style={{
          padding: isMobile ? "0 10px" : "0 12px",
          height: "100%", display: "flex", alignItems: "center",
          fontSize: isMobile ? 10 : 11,
          fontWeight: lang === l ? 600 : 400,
          letterSpacing: "0.06em",
          color: lang === l ? ink : "rgba(255,255,255,0.5)",
          background: lang === l ? gold : "transparent",
          transition: "all 0.25s",
          textTransform: "uppercase" as const,
        }}>
          {l === "en" ? "EN" : "中"}
        </span>
      ))}
    </button>
  );
}

export default function Home() {
  const [lang, toggleLang] = useLang();
  const [loaderOut, setLoaderOut] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", contact: "", service: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();

  // ── Loader: fixed 1.5s brand animation, NO image waiting ──
  useEffect(() => {
    const t = setTimeout(() => setLoaderOut(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goSlide = (n: number) => {
    setCurrentSlide(n);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrentSlide((c) => (c + 1) % SLIDES.length), 5500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrentSlide((c) => (c + 1) % SLIDES.length), 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]); // re-observe when language changes (DOM may re-render)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const secPad = isMobile ? "72px 20px" : "120px 5vw";
  const secH: React.CSSProperties = { fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 32 : "clamp(32px,4vw,54px)", fontWeight: 300, lineHeight: 1.15, color: "#fff", marginBottom: 16 };
  const secP: React.CSSProperties = { fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: isMobile ? 36 : 56 };

  // Nav items with translations
  const NAV_ITEMS = [
    { id: "services", label: tx(t.nav.services, lang) },
    { id: "process",  label: tx(t.nav.process,  lang) },
    { id: "visa",     label: tx(t.nav.visa,      lang) },
    { id: "cities",   label: tx(t.nav.cities,    lang) },
    { id: "contact",  label: tx(t.nav.contact,   lang) },
  ];

  return (
    <div style={{ background: ink, color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ─── LOADER ─── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.8s", opacity: loaderOut ? 0 : 1, pointerEvents: loaderOut ? "none" : "all", overflow: "hidden" }}>
        {/* LQIP base64 loads instantly — no network request needed */}
        <div style={{ position: "absolute", inset: 0, background: ink }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${ALIBABA_LQIP}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(12px)", transform: "scale(1.05)" }} />
        {/* Full-res loads in background, visible after blur */}
        <img src={isMobile ? ALIBABA_IMG_MOBILE : ALIBABA_IMG_DESK} alt="" loading="eager" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,14,23,0.72)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,14,23,0.85) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{ width: isMobile ? 220 : 300, height: isMobile ? 88 : 120, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
            <img src={LOGO} alt="BridgeChina" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.6)) brightness(1.05)" }} />
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 28 : 38, fontWeight: 300, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" as const, lineHeight: 1 }}>BridgeChina</div>
          <div style={{ fontSize: isMobile ? 10 : 11, color: gold, letterSpacing: "0.22em", textTransform: "uppercase" as const, marginTop: 6, marginBottom: 28 }}>
            {tx(t.loader.tagline, lang)}
          </div>
          <div className="loader-line-anim" style={{ width: isMobile ? 100 : 140 }} />
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12, border: `1px solid ${line}`, padding: "10px 20px", background: "rgba(10,14,23,0.65)", backdropFilter: "blur(8px)" }}>
            <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 80, height: "auto", objectFit: "contain" }} />
            <div style={{ width: 1, height: 28, background: line, flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", lineHeight: 1.6, whiteSpace: "pre-line" as const }}>
              {tx(t.loader.alibadge, lang)}
            </span>
          </div>
        </div>
      </div>

      {/* ─── NAV ─── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 800, display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "0 16px" : "0 5vw", height: isMobile ? 64 : 76, transition: "background 0.4s, box-shadow 0.4s", background: navScrolled || mobileMenuOpen ? "rgba(10,14,23,0.96)" : "transparent", backdropFilter: navScrolled ? "blur(16px)" : "none", boxShadow: navScrolled ? `0 1px 0 ${line}` : "none" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <BrandLogo size={isMobile ? 36 : 44} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 17 : 20, fontWeight: 600, color: "#fff", letterSpacing: "0.06em" }}>BridgeChina</div>
            <div style={{ fontSize: isMobile ? 8 : 10, color: gold, letterSpacing: "0.14em", textTransform: "uppercase" as const }}>{tx(t.nav.tagline, lang)}</div>
          </div>
        </a>

        {!isMobile && (
          <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase" as const, cursor: "pointer", fontFamily: "'Inter',sans-serif", padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = gold2} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LangToggle lang={lang} onToggle={toggleLang} isMobile={isMobile} />
          {!isMobile && (
            <button onClick={() => scrollTo("contact")} style={{ border: `1px solid ${gold}`, color: gold, padding: "9px 22px", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, background: "transparent", cursor: "pointer", fontFamily: "'Inter',sans-serif", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.color = ink; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = gold; }}>
              {tx(t.nav.cta, lang)}
            </button>
          )}
          {isMobile && (
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: `1px solid ${line}`, color: gold, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, cursor: "pointer" }}>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", top: 64, left: 0, right: 0, bottom: 0, background: "rgba(10,14,23,0.98)", zIndex: 799, padding: "24px 20px", overflowY: "auto" as const }}>
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{ display: "block", width: "100%", textAlign: "left" as const, background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "18px 0", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{ marginTop: 24, width: "100%", background: gold, color: ink, border: "none", padding: "16px", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, cursor: "pointer" }}>
            {tx(t.nav.cta, lang)}
          </button>
          <div style={{ marginTop: 28, padding: "16px", border: `1px solid ${line}`, background: "rgba(184,150,90,0.05)", display: "flex", alignItems: "center", gap: 12 }}>
            <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 72, height: "auto", objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: 10, color: gold, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>{tx(t.mobile.locLabel, lang)}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{tx(t.mobile.location, lang)}</div>
            </div>
          </div>
        </div>
      )}

      {/* ─── HERO ─── */}
      <div style={{ position: "relative", width: "100%", height: isMobile ? "100svh" : "100vh", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: ink, zIndex: 0 }} />
        {SLIDES.map((slide, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, opacity: i === currentSlide ? 1 : 0, transition: i === 0 ? "none" : "opacity 1.4s ease", zIndex: 1 }}>
            <img
              src={isMobile ? slide.bgMobile : slide.bg}
              srcSet={`${slide.bgMobile} 480w, ${slide.bg} 1200w`}
              sizes="100vw"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding={i === 0 ? "async" : "async"}
            />
            <div style={{ position: "absolute", inset: 0, background: isMobile ? "rgba(10,14,23,0.72)" : "linear-gradient(to right, rgba(10,14,23,0.82) 0%, rgba(10,14,23,0.55) 50%, rgba(10,14,23,0.3) 100%)" }} />
          </div>
        ))}

        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column" as const, justifyContent: "center", padding: isMobile ? "0 20px" : "0 5vw", paddingTop: isMobile ? 64 : 76 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, opacity: 0, animation: "heroIn 0.9s 1.2s forwards" }}>
            <div style={{ width: 36, height: 1, background: gold }} />
            <span style={{ fontSize: isMobile ? 10 : 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: gold2 }}>{tx(t.hero.eyebrow, lang)}</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? "clamp(36px,10vw,52px)" : "clamp(48px,7vw,96px)", fontWeight: 300, lineHeight: 1.05, color: "#fff", marginBottom: 10, opacity: 0, animation: "heroIn 1s 1.4s forwards" }}>
            {tx(t.hero.h1a, lang)}<br />
            <em style={{ color: gold2, fontStyle: "italic" }}>{tx(t.hero.h1b, lang)}</em>
          </h1>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 16 : "clamp(18px,2.4vw,28px)", fontWeight: 300, color: "rgba(255,255,255,0.55)", marginBottom: isMobile ? 20 : 40, letterSpacing: "0.03em", opacity: 0, animation: "heroIn 0.9s 1.6s forwards" }}>
            {tx(t.hero.sub, lang)}
          </p>

          {!isMobile && (
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 440, marginBottom: 44, opacity: 0, animation: "heroIn 0.9s 1.8s forwards" }}>
              {tx(t.hero.body, lang)}
            </p>
          )}

          <div style={{ display: "flex", gap: isMobile ? 12 : 20, flexWrap: "wrap" as const, opacity: 0, animation: "heroIn 0.9s 2s forwards" }}>
            <button onClick={() => scrollTo("contact")} style={{ background: gold, color: ink, padding: isMobile ? "14px 28px" : "16px 40px", fontSize: isMobile ? 12 : 12.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
              {tx(t.hero.ctaPrimary, lang)}
            </button>
            <button onClick={() => scrollTo("services")} style={{ border: "1px solid rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.8)", padding: isMobile ? "14px 24px" : "16px 36px", fontSize: isMobile ? 12 : 12.5, fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase" as const, background: "transparent", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
              {tx(t.hero.ctaSecondary, lang)}
            </button>
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: "absolute", bottom: 100, left: "5vw", zIndex: 3, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" }}>{tx(t.hero.showing, lang)}</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "rgba(255,255,255,0.75)", fontWeight: 300 }}>{SLIDES[currentSlide].city}</span>
          </div>
        )}

        <div style={{ position: "absolute", bottom: isMobile ? 100 : 100, right: isMobile ? 20 : "5vw", zIndex: 3, display: "flex", gap: 8, alignItems: "center" }}>
          {SLIDES.map((_, i) => (
            <div key={i} onClick={() => goSlide(i)} style={{ width: i === currentSlide ? 36 : 20, height: 2, background: i === currentSlide ? gold : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "all 0.4s" }} />
          ))}
        </div>

        {/* Stats bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, borderTop: "1px solid rgba(184,150,90,0.2)", background: "rgba(10,14,23,0.85)", backdropFilter: "blur(12px)", display: "flex" }}>
          {[
            { num: "3,200+", label: tx(t.stats.companies, lang) },
            { num: "58",     label: tx(t.stats.countries, lang) },
            { num: "98%",    label: tx(t.stats.visaSuccess, lang) },
            { num: "12+",    label: tx(t.stats.yearsExp, lang) },
          ].map((stat, i) => (
            <div key={i} style={{ flex: 1, padding: isMobile ? "14px 8px" : "20px 5vw", borderRight: i < 3 ? "1px solid rgba(184,150,90,0.15)" : "none", textAlign: "center" as const }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 22 : 34, fontWeight: 300, color: gold2, lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: isMobile ? 9 : 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <GoldDivider />

      {/* ─── ALIBABA ENDORSEMENT BANNER ─── */}
      <section style={{ background: ink2, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}`, padding: isMobile ? "48px 20px" : "64px 5vw", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${ALIBABA_IMG_MOBILE}')`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center" as const, marginBottom: isMobile ? 32 : 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${line}`, padding: "6px 16px", marginBottom: 20 }}>
              <div style={{ width: 6, height: 6, background: gold, borderRadius: "50%" }} />
              <span style={{ fontSize: 10, color: gold, letterSpacing: "0.18em", textTransform: "uppercase" as const }}>{tx(t.alibaba.eyebrow, lang)}</span>
            </div>
            <h2 data-reveal style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 26 : "clamp(28px,3.5vw,46px)", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: 12, whiteSpace: "pre-line" as const }}>
              {tx(t.alibaba.h2, lang)}
            </h2>
            <p data-reveal style={{ fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.45)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
              {tx(t.alibaba.sub, lang)}
            </p>
          </div>

          {/* Three pillars */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 16 : 24 }}>
            {[
              { icon: "🏛️", title: tx(t.alibaba.card1title, lang), desc: tx(t.alibaba.card1desc, lang) },
              { icon: "🌐", title: tx(t.alibaba.card2title, lang), desc: tx(t.alibaba.card2desc, lang) },
              { icon: "🤝", title: tx(t.alibaba.card3title, lang), desc: tx(t.alibaba.card3desc, lang) },
            ].map((item, i) => (
              <div key={i} data-reveal data-reveal-delay={i > 0 ? String(i) : undefined} style={{ background: ink2, padding: isMobile ? "24px 20px" : "36px 32px", border: isMobile ? `1px solid ${line}` : "none" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 17 : 19, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{item.title}</h4>
                <p style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Campus image strip */}
          <div data-reveal style={{ marginTop: isMobile ? 24 : 32, position: "relative", overflow: "hidden" }}>
            <img
              src={isMobile ? ALIBABA_IMG_MOBILE : ALIBABA_IMG_DESK}
              srcSet={`${ALIBABA_IMG_MOBILE} 600w, ${ALIBABA_IMG_DESK} 1000w`}
              sizes="(max-width:768px) 100vw, 80vw"
              alt="Alibaba Global Cross-border Center, Hangzhou Binjiang"
              style={{ width: "100%", height: isMobile ? 180 : 260, objectFit: "cover", objectPosition: "center 40%", display: "block" }}
              loading="lazy"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,14,23,0.7) 0%, transparent 40%, transparent 60%, rgba(10,14,23,0.7) 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(10,14,23,0.8))", padding: isMobile ? "16px 16px" : "20px 32px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 10, color: gold, letterSpacing: "0.14em", textTransform: "uppercase" as const }}>{tx(t.contact.info.officeLabel, lang)}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 14 : 17, color: "#fff", marginTop: 3 }}>
                  {lang === "zh" ? "阿里巴巴滨江园区五号楼 · 杭州，浙江" : "Alibaba Binjiang Campus, Bldg. 5 · Hangzhou, Zhejiang"}
                </div>
              </div>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${gold}`, color: gold, padding: "8px 14px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", flexShrink: 0 }}>
                📍 {lang === "zh" ? "查看地图" : "View on Map"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ─── SERVICES ─── */}
      <section id="services" style={{ padding: secPad, background: ink }}>
        <SectionLabel text={tx(t.services.eyebrow, lang)} />
        <h2 data-reveal style={secH}>
          {lang === "zh" ? "全流程商务\n落地服务" : "End-to-End Business\nSetup Services"}
        </h2>
        <p data-reveal style={secP}>{tx(t.services.sub, lang)}</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 1, background: line, border: `1px solid ${line}` }}>
          {t.services.items.map((svc, i) => (
            <ServiceCard key={i} svc={{ num: String(i + 1).padStart(2, "0"), icon: ["🏢","📍","🛂","📋","⚖️","🏦"][i], title: tx(svc.title, lang), desc: tx(svc.desc, lang) }} delay={isMobile ? 0 : i % 3} isMobile={isMobile} enquireLabel={lang === "zh" ? "立即咨询 →" : "Enquire Now →"} />
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* ─── PROCESS ─── */}
      <section id="process" style={{ padding: secPad, background: ink2 }}>
        <SectionLabel text={tx(t.process.eyebrow, lang)} center />
        <h2 data-reveal style={{ ...secH, textAlign: "center" as const, margin: "0 auto 14px" }}>
          {lang === "zh" ? "四步完成\n在华落地" : "Four Steps to\nOperating in China"}
        </h2>
        <p data-reveal style={{ ...secP, textAlign: "center" as const, maxWidth: 500, margin: "0 auto" + (isMobile ? " 36px" : " 60px") }}>{tx(t.process.sub, lang)}</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 24 : 0 }}>
          {t.process.steps.map((step, i) => (
            <div key={i} data-reveal data-reveal-delay={i > 0 ? String(Math.min(i, 3)) : undefined} style={{ padding: isMobile ? "0 8px" : "0 24px", textAlign: "center" as const }}>
              <div style={{ width: isMobile ? 56 : 72, height: isMobile ? 56 : 72, border: `1px solid ${gold}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", background: ink2, fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 22 : 26, fontWeight: 300, color: gold2 }}>{i + 1}</div>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 16 : 18, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{tx(step.title, lang)}</h4>
              <p style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{tx(step.desc, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section style={{ padding: secPad, background: ink }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>
          <div>
            <SectionLabel text={tx(t.why.eyebrow, lang)} />
            <h2 data-reveal style={secH}>
              {lang === "zh" ? "在华外资商务\n服务标准" : "The Standard for\nForeign Business in China"}
            </h2>
            <p data-reveal style={secP}>{tx(t.why.sub, lang)}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.why.points.map((pt, i) => (
                <li key={i} data-reveal data-reveal-delay={i > 0 ? String(Math.min(i, 3)) : undefined} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 14, padding: "18px 0", borderBottom: i < t.why.points.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ color: gold, fontSize: 12, paddingTop: 2 }}>◆</div>
                  <div>
                    <strong style={{ fontSize: isMobile ? 14 : 15, fontWeight: 500, color: "#fff", display: "block", marginBottom: 4 }}>{tx(pt.title, lang)}</strong>
                    <span style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{tx(pt.desc, lang)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ position: "relative" }}>
            <img
            src={isMobile ? ALIBABA_IMG_MOBILE : ALIBABA_IMG_DESK}
            srcSet={`${ALIBABA_IMG_MOBILE} 600w, ${ALIBABA_IMG_DESK} 1000w`}
            sizes="(max-width:768px) 100vw, 50vw"
            alt="Alibaba Global Cross-border Center"
            style={{ width: "100%", height: isMobile ? 240 : "auto", aspectRatio: isMobile ? undefined : "4/5", objectFit: "cover", objectPosition: "center", display: "block" }}
            loading="lazy"
          />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(10,14,23,0.7))" }} />
            {!isMobile && <div style={{ position: "absolute", top: -16, left: -16, right: 16, bottom: 16, border: `1px solid ${line}`, pointerEvents: "none", zIndex: -1 }} />}
            <div style={{ position: "absolute", bottom: isMobile ? 12 : -24, right: isMobile ? 12 : -32, background: gold, color: ink, padding: isMobile ? "16px 14px" : "24px 20px", textAlign: "center" as const }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 28 : 40, fontWeight: 300, lineHeight: 1, display: "block" }}>98%</span>
              <span style={{ fontSize: isMobile ? 9 : 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, display: "block", marginTop: 4 }}>{lang === "zh" ? "签证通过率" : "Visa Approval"}</span>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "rgba(10,14,23,0.75)" }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{tx(t.contact.info.officeLabel, lang)}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>阿里巴巴滨江园区五号楼 · 杭州</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISA ─── */}
      <section id="visa" style={{ padding: secPad, background: ink2 }}>
        <SectionLabel text={tx(t.visa.eyebrow, lang)} />
        <h2 data-reveal style={secH}>
          {lang === "zh" ? "每种签证类型\n专业办理" : "Every Visa Type,\nHandled Correctly"}
        </h2>
        <p data-reveal style={secP}>{tx(t.visa.sub, lang)}</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 1, background: line, border: `1px solid ${line}` }}>
          {t.visa.types.map((visa, i) => (
            <VisaCard key={i} visa={{ badge: visa.badge, title: tx(visa.title, lang), desc: tx(visa.desc, lang) }} delay={isMobile ? 0 : i} isMobile={isMobile} />
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: secPad, background: ink, position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Cormorant Garamond',serif", fontSize: 160, fontWeight: 300, color: "rgba(184,150,90,0.04)", letterSpacing: "0.3em", pointerEvents: "none", whiteSpace: "nowrap" }}>TRUST</div>
        )}
        <SectionLabel text={tx(t.testimonials.eyebrow, lang)} center />
        <h2 data-reveal style={{ ...secH, textAlign: "center" as const, margin: "0 auto 14px" }}>
          {lang === "zh" ? "我们的客户\n取得的成果" : "Trusted Across\n58 Countries"}
        </h2>
        <p data-reveal style={{ ...secP, textAlign: "center" as const, maxWidth: 480, margin: "0 auto" + (isMobile ? " 36px" : " 56px") }}>
          {lang === "zh" ? "来自各大洲的国际创业者通过 BridgeChina 建立了他们的中国业务。" : "International entrepreneurs from every continent have built their China operations through BridgeChina."}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 16 : 24 }}>
          {t.testimonials.items.map((item, i) => (
            <TestiCard key={i} testi={{ av: item.name[0], text: tx(item.text, lang), name: item.name, role: tx(item.role, lang) }} delay={isMobile ? 0 : i} isMobile={isMobile} />
          ))}
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section id="cities" style={{ background: ink2 }}>
        <div style={{ padding: isMobile ? "36px 20px 20px" : "48px 5vw 28px" }}>
          <SectionLabel text={tx(t.cities.eyebrow, lang)} center />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5,1fr)", borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
          {[
            { bg: unsplash("photo-1538428494232-9c0d8a3ab403", 600, 75), en: "Shanghai", zh: "上海" },
            { bg: unsplash("photo-1508804185872-d7badad00f7d", 600, 75), en: "Beijing",  zh: "北京" },
            { bg: unsplash("photo-1486325212027-8081e485255e", 600, 75), en: "Shenzhen", zh: "深圳" },
            { bg: unsplash("photo-1474181487882-5abf3f0ba6c2", 600, 75), en: "Guangzhou",zh: "广州" },
            { bg: unsplash("photo-1566552881560-0be862a7c445", 600, 75), en: "Hangzhou", zh: "杭州" },
          ].map((city, i) => <CityItem key={i} city={city} isMobile={isMobile} lang={lang} />)}
        </div>
        <div style={{ height: isMobile ? 32 : 48 }} />
      </section>

      {/* ─── CTA ─── */}
      <div style={{ background: "linear-gradient(135deg,#0C1525 0%,#131929 100%)", padding: isMobile ? "64px 20px" : "120px 5vw", textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${gold},transparent)` }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${gold},transparent)` }} />
        <h2 data-reveal style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 30 : "clamp(32px,5vw,62px)", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
          {lang === "zh" ? "准备好进入\n中国市场了吗？" : "Ready to Enter\nthe Chinese Market?"}
        </h2>
        <p data-reveal style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.5)", maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.8 }}>
          {lang === "zh" ? "预约与我们资深顾问的30分钟免费咨询，获得清晰解答，无任何义务。" : "Book a complimentary 30-minute consultation with one of our senior advisors. Clear answers, no obligation."}
        </p>
        <div data-reveal style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
          <button onClick={() => scrollTo("contact")} style={{ background: gold, color: ink, padding: isMobile ? "14px 28px" : "16px 40px", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
            {lang === "zh" ? "预约咨询" : "Book Consultation"}
          </button>
          <a href="https://wa.me/17757447058" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.75)", padding: isMobile ? "14px 24px" : "16px 36px", fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>
            {lang === "zh" ? "WhatsApp 联系" : "WhatsApp Us"}
          </a>
        </div>
      </div>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ padding: secPad, background: ink }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
          <div>
            <SectionLabel text={tx(t.contact.eyebrow, lang)} />
            <h2 data-reveal style={secH}>
              {lang === "zh" ? "开启您的\n中国商务之旅" : "Start Your China\nBusiness Journey"}
            </h2>
            <p data-reveal style={secP}>{tx(t.contact.sub, lang)}</p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: 24, marginBottom: 36 }}>
              {[
                { icon: "✉", label: tx(t.contact.info.emailLabel, lang), value: "ylsg19971102@gmail.com", note: lang === "zh" ? "24小时内回复" : "Replies within 24 hours", href: "mailto:ylsg19971102@gmail.com" },
                { icon: "💬", label: `${tx(t.contact.info.wechatLabel, lang)} · WhatsApp`, value: "+1 775 744 7058", note: "WeChat / WhatsApp: 17757447058", href: "https://wa.me/17757447058" },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: 16, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}>
                  <div style={{ width: 40, height: 40, border: `1px solid ${line}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, color: gold }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: gold, marginBottom: 5 }}>{item.label}</div>
                    <div style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{item.value}</div>
                    {item.note && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 3 }}>{item.note}</div>}
                  </div>
                </a>
              ))}

              {/* Office — map linked */}
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: 16, textDecoration: "none", cursor: "pointer" }}>
                <div style={{ width: 40, height: 40, border: `1px solid ${line}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, color: gold }}>📍</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: gold, marginBottom: 5 }}>{tx(t.contact.info.officeLabel, lang)}</div>
                  <div style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, whiteSpace: "pre-line" as const }}>
                    {tx(t.contact.info.officeVal, lang)}
                  </div>
                  <div style={{ fontSize: 11, color: gold, marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
                    <span>{lang === "zh" ? "在 Google 地图中查看 →" : "View on Google Maps →"}</span>
                  </div>
                </div>
              </a>

              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8 }}>
                <div style={{ width: 40, height: 40, border: `1px solid ${line}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, color: gold }}>🕐</div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: gold, marginBottom: 5 }}>{tx(t.contact.info.hoursLabel, lang)}</div>
                  <div style={{ fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.6)" }}>{tx(t.contact.info.hoursVal, lang)}</div>
                </div>
              </div>
            </div>

            {/* Alibaba endorsement image */}
            <div data-reveal style={{ position: "relative", overflow: "hidden", border: `1px solid ${line}` }}>
              <img
                src={isMobile ? ALIBABA_IMG_MOBILE : ALIBABA_IMG_DESK}
                srcSet={`${ALIBABA_IMG_MOBILE} 600w, ${ALIBABA_IMG_DESK} 1000w`}
                sizes="(max-width:768px) 100vw, 50vw"
                alt="Alibaba Global Cross-border Center"
                style={{ width: "100%", height: isMobile ? 160 : 200, objectFit: "cover", objectPosition: "center 40%", display: "block" }}
                loading="lazy"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(10,14,23,0.85))" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 64, height: "auto", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: 10, color: gold, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>{tx(t.footer.aliLabel, lang)}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>阿里巴巴全球跨境中心 · 杭州滨江</div>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                <FormInput placeholder={tx(t.contact.form.firstName, lang)} value={formState.firstName} onChange={v => setFormState(s => ({ ...s, firstName: v }))} />
                <FormInput placeholder={tx(t.contact.form.lastName, lang)} value={formState.lastName} onChange={v => setFormState(s => ({ ...s, lastName: v }))} />
              </div>
              <FormInput placeholder={tx(t.contact.form.email, lang)} type="email" value={formState.email} onChange={v => setFormState(s => ({ ...s, email: v }))} />
              <FormInput placeholder={tx(t.contact.form.contact, lang)} value={formState.contact} onChange={v => setFormState(s => ({ ...s, contact: v }))} />
              <select value={formState.service} onChange={e => setFormState(s => ({ ...s, service: e.target.value }))} style={{ width: "100%", padding: "16px 18px", background: ink2, border: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", color: formState.service ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif", fontSize: 13, outline: "none", WebkitAppearance: "none" as any, cursor: "pointer" }}>
                <option value="" disabled>{lang === "zh" ? "— 请选择所需服务 —" : "— Select Service Required —"}</option>
                {t.contact.form.options.map((opt, i) => (
                  <option key={i} value={opt.en} style={{ background: ink2, color: "#fff" }}>{tx(opt, lang)}</option>
                ))}
              </select>
              <textarea placeholder={tx(t.contact.form.messagePh, lang)} value={formState.message} onChange={e => setFormState(s => ({ ...s, message: e.target.value }))} style={{ width: "100%", padding: "16px 18px", background: ink2, border: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontFamily: "'Inter',sans-serif", fontSize: 13, outline: "none", minHeight: 110, resize: "vertical" as const }} />
              <button type="submit" style={{ background: formSubmitted ? "#1a7a4a" : gold, color: formSubmitted ? "#fff" : ink, padding: "17px", border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, width: "100%", transition: "background 0.3s", marginTop: 2 }}>
                {formSubmitted ? `✓ ${tx(t.contact.form.success, lang)}` : tx(t.contact.form.submit, lang)}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: ink2, padding: isMobile ? "48px 20px 24px" : "64px 5vw 32px", borderTop: `1px solid ${line}` }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? 32 : 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.05)", marginBottom: 24 }}>
          <div style={{ gridColumn: isMobile ? "1 / -1" : undefined }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <BrandLogo size={44} />
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: "#fff", letterSpacing: "0.06em" }}>BridgeChina</div>
                <div style={{ fontSize: 9, color: gold, letterSpacing: "0.14em", textTransform: "uppercase" as const }}>{tx(t.footer.tagline, lang)}</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, marginTop: 14, maxWidth: 260 }}>{tx(t.footer.desc, lang)}</p>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, border: `1px solid ${line}`, padding: "8px 12px", textDecoration: "none" }}>
              <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 60, height: "auto", objectFit: "contain" }} />
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>{tx(t.footer.aliLabel, lang)}</span>
            </a>
          </div>
          {t.footer.cols.map((col, ci) => (
            <div key={ci}>
              <h5 style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: gold, marginBottom: 16, fontWeight: 400 }}>{tx(col.heading, lang)}</h5>
              {col.links.map((link, li) => (
                <a key={li} href="#" style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none", marginBottom: 10 }}
                  onMouseEnter={e => e.currentTarget.style.color = gold2} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                  {tx(link, lang)}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "rgba(255,255,255,0.2)", flexWrap: "wrap" as const, gap: 8 }}>
          <span>© 2025 {tx(t.footer.copyright, lang)}</span>
          <span style={{ display: "flex", gap: 16 }}>
            {tx(t.footer.legal, lang).split(" · ").map(link => (
              <a key={link} href="#" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>{link}</a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function ServiceCard({ svc, delay, isMobile, enquireLabel }: { svc: { num: string; icon: string; title: string; desc: string }; delay: number; isMobile: boolean; enquireLabel: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div data-reveal data-reveal-delay={delay > 0 ? String(delay) : undefined} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "#111827" : "#131929", padding: isMobile ? "28px 20px" : "44px 36px", position: "relative", overflow: "hidden", transition: "background 0.3s" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,#B8965A,#D4AF72)`, transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
      {!isMobile && <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 56, fontWeight: 300, color: "rgba(184,150,90,0.1)", position: "absolute", top: 20, right: 24, lineHeight: 1, pointerEvents: "none" }}>{svc.num}</div>}
      <span style={{ fontSize: isMobile ? 24 : 28, marginBottom: 18, display: "block" }}>{svc.icon}</span>
      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 18 : 21, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{svc.title}</h3>
      <p style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 20 }}>{svc.desc}</p>
      <a href="#contact" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#B8965A", textDecoration: "none" }}>{enquireLabel}</a>
    </div>
  );
}

function VisaCard({ visa, delay, isMobile }: { visa: { badge: string; title: string; desc: string }; delay: number; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div data-reveal data-reveal-delay={delay > 0 ? String(delay) : undefined} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "#111827" : "#131929", padding: isMobile ? "24px 16px" : "36px 28px", transition: "background 0.3s" }}>
      <div style={{ display: "inline-block", border: `1px solid #B8965A`, color: "#B8965A", fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 24 : 28, fontWeight: 300, padding: "6px 14px", marginBottom: 18 }}>{visa.badge}</div>
      <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 16 : 18, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{visa.title}</h4>
      <p style={{ fontSize: isMobile ? 11 : 12.5, color: "rgba(255,255,255,0.42)", lineHeight: 1.7 }}>{visa.desc}</p>
    </div>
  );
}

function TestiCard({ testi, delay, isMobile }: { testi: { av: string; text: string; name: string; role: string }; delay: number; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div data-reveal data-reveal-delay={delay > 0 ? String(delay) : undefined} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ border: `1px solid ${hovered ? "rgba(184,150,90,0.3)" : "rgba(255,255,255,0.06)"}`, padding: isMobile ? "24px 20px" : "36px 32px", background: "#131929", position: "relative", transition: "border-color 0.3s, transform 0.3s", transform: hovered ? "translateY(-4px)" : "none" }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 60, lineHeight: 1, color: "#B8965A", opacity: 0.4, position: "absolute", top: 16, right: 24 }}>"</div>
      <div style={{ color: "#D4AF72", fontSize: 11, letterSpacing: 3, marginBottom: 16 }}>★★★★★</div>
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 15 : 16, fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 24 }}>{testi.text}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
        <div style={{ width: 40, height: 40, border: `1px solid #B8965A`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: "#D4AF72", flexShrink: 0 }}>{testi.av}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{testi.name}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{testi.role}</div>
        </div>
      </div>
    </div>
  );
}

function CityItem({ city, isMobile, lang }: { city: { bg: string; en: string; zh: string }; isMobile: boolean; lang: Lang }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ position: "relative", height: isMobile ? 140 : 220, overflow: "hidden" }}>
      <img src={city.bg} alt={city.en} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.8s" }} loading="lazy" />
      <div style={{ position: "absolute", inset: 0, background: hovered ? "rgba(10,14,23,0.35)" : "rgba(10,14,23,0.55)", transition: "background 0.4s" }} />
      <div style={{ position: "absolute", bottom: 14, left: 16, zIndex: 1 }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 16 : 20, fontWeight: 300, color: "#fff" }}>{lang === "zh" ? city.zh : city.en}</div>
        <div style={{ fontSize: 10, color: "#D4AF72", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginTop: 2 }}>{lang === "zh" ? city.en : city.zh}</div>
      </div>
    </div>
  );
}

function FormInput({ placeholder, type = "text", value, onChange }: { placeholder: string; type?: string; value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{ width: "100%", padding: "15px 16px", background: focused ? "#111827" : "#131929", border: "none", borderBottom: `1px solid ${focused ? "#B8965A" : "rgba(255,255,255,0.08)"}`, color: "#fff", fontFamily: "'Inter',sans-serif", fontSize: 13, outline: "none", transition: "border-color 0.3s, background 0.3s" }} />
  );
}
