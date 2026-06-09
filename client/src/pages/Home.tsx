// BridgeChina — Home Page (Mobile-First)
// Design: Dark Gold Luxury | Art Deco Modernism
// Brand: BridgeChina | Located at Alibaba Global Cross-border Center, Hangzhou
// Colors: Ink Black #0A0E17, Gold #B8965A/#D4AF72

import { useEffect, useRef, useState } from "react";

const gold = "#B8965A";
const gold2 = "#D4AF72";
const ink = "#0A0E17";
const ink2 = "#131929";
const line = "rgba(184,150,90,0.3)";

// Brand assets
const LOGO = "/manus-storage/bridgechina-logo-transparent_ece5edb3.png"; // transparent PNG
const ALIBABA_LOGO = "/manus-storage/alibaba-logo_da5c1d45.png"; // official Alibaba brand logo
const ALIBABA_IMG = "/manus-storage/alibaba-campus_e017c9e6.jpg";
const ALIBABA_IMG2 = "/manus-storage/alibaba-campus2_4333088b.jpg";

// Google Maps link — Alibaba Binjiang Campus Building 5, Hangzhou
const MAP_LINK = "https://maps.google.com/?q=阿里巴巴滨江园区五号楼,杭州市滨江区,浙江省";

// Using direct Unsplash source URLs for reliable loading
const SLIDES = [
  { bg: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&w=1400&q=75", city: "Shanghai · 上海" },
  { bg: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&w=1400&q=75", city: "Beijing · 北京" },
  { bg: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&w=1400&q=75", city: "Guangzhou · 广州" },
  { bg: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&w=1400&q=75", city: "Hangzhou · 杭州" },
];

// All critical images to preload before showing content
const CRITICAL_IMAGES = [
  LOGO,
  ALIBABA_LOGO,
  ALIBABA_IMG,
  SLIDES[0].bg, // first hero slide
];

function preloadImages(urls: string[]): Promise<void[]> {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // resolve even on error so loader doesn't hang
          img.src = url;
        })
    )
  );
}

const SERVICES = [
  { num: "01", icon: "🏢", title: "Company Registration", desc: "Full WFOE, Joint Venture, or Representative Office registration including name approval, business scope filing, capital verification, and business license issuance." },
  { num: "02", icon: "📍", title: "Registered Address", desc: "Government-approved virtual and physical registered addresses in Shanghai, Beijing, Shenzhen, and Guangzhou. All mail forwarding and official correspondence handled." },
  { num: "03", icon: "🛂", title: "Work Visa Processing", desc: "Full preparation and submission of Z-visa, M-visa, and R-visa applications. Our bilingual legal team reviews every document — 98% first-attempt approval." },
  { num: "04", icon: "📋", title: "Document Audit & Review", desc: "Thorough pre-submission review of all legal documents, corporate filings, and visa materials. We identify errors, missing items, and compliance issues before they cause delays." },
  { num: "05", icon: "⚖️", title: "Licenses & Permits", desc: "Industry-specific licensing for retail, trading, technology, food & beverage, and manufacturing. We identify which permits apply to your exact business model and obtain them." },
  { num: "06", icon: "🏦", title: "Corporate Bank Account", desc: "Complete support for RMB and foreign-currency corporate account opening at major Chinese banks. We prepare all KYC documentation and accompany you through the process." },
];

const STEPS = [
  { n: "1", title: "Free Consultation", desc: "Discuss your business model, target city, and team composition. We recommend the optimal structure and visa pathway for your specific situation." },
  { n: "2", title: "Document Preparation", desc: "We provide a precise, personalised document checklist. Every document is reviewed by our legal team for completeness and accuracy before submission." },
  { n: "3", title: "Government Filing", desc: "We file on your behalf with SAMR, local PSB, and other relevant authorities. You receive real-time updates at every stage of the review process." },
  { n: "4", title: "Activation & Beyond", desc: "Your business license, seals, and visa are issued. We guide you through tax registration, bank account opening, and ongoing compliance requirements." },
];

const WHY_POINTS = [
  { title: "Bilingual Legal Expertise", desc: "All client-facing advisors are fully fluent in English and Mandarin. No translation gaps, no middlemen — direct communication throughout your case." },
  { title: "Regulatory Intelligence", desc: "Our team continuously monitors SAMR, MOFCOM, and PSB policy updates. Clients receive proactive alerts when rules affecting their business change." },
  { title: "Alibaba Ecosystem Access", desc: "Based inside the Alibaba Global Cross-border Center, we leverage Alibaba's trade infrastructure, cross-border commerce networks, and government relationships." },
  { title: "Transparent Fixed Pricing", desc: "A complete cost breakdown before you sign anything. No hidden government fees, no unexpected surcharges at the end of the process." },
];

const VISAS = [
  { badge: "Z", title: "Work Visa", desc: "For foreigners employed by Chinese entities. Requires work permit notification letter, employment contract, and authenticated educational qualifications." },
  { badge: "M", title: "Business Visit Visa", desc: "For commercial activities, trade negotiations, contract signings, or market investigation. Multiple-entry options available up to 10 years." },
  { badge: "R", title: "Talent Visa", desc: "Priority processing for high-end foreign experts in government-identified fields. Extended validity and simplified application requirements." },
  { badge: "F", title: "Exchange Visa", desc: "For cultural, scientific, or invited business exchange visits. Flexible single and multiple entry configurations with adjustable durations." },
];

const TESTIMONIALS = [
  { av: "S", text: '"BridgeChina registered our Shanghai trading company in ten working days. The whole process was handled remotely — documents, address, everything. Outstanding."', name: "Sarah Okonkwo", role: "Director · AfriTrade Imports, Nigeria" },
  { av: "A", text: '"My Z-visa had been rejected twice before I contacted BridgeChina. They identified the errors in minutes and secured approval on the very first attempt."', name: "Aleksei Volkov", role: "Operations Manager · Russia" },
  { av: "J", text: '"From WFOE structure selection to our first invoice — they guided every single step. Being inside the Alibaba ecosystem gave us incredible access and credibility."', name: "Julien Moreau", role: "Founder · TechVenture SAS, France" },
];

const CITIES = [
  { bg: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&w=600&q=70", en: "Shanghai", zh: "上海" },
  { bg: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&w=600&q=70", en: "Beijing", zh: "北京" },
  { bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&w=600&q=70", en: "Shenzhen", zh: "深圳" },
  { bg: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&w=600&q=70", en: "Guangzhou", zh: "广州" },
  { bg: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&w=600&q=70", en: "Hangzhou", zh: "杭州" },
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

// ─── Brand Logo Component ─────────────────────────────────────────────────────
function BrandLogo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={LOGO}
      alt="BridgeChina"
      style={{ width: size * 1.8, height: size, objectFit: "contain", objectPosition: "left center", background: "transparent", flexShrink: 0 }}
    />
  );
}

export default function Home() {
  const [loaderOut, setLoaderOut] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", contact: "", service: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    let cancelled = false;
    // Preload all critical images first, then dismiss loader
    const maxWait = setTimeout(() => {
      if (!cancelled) setLoaderOut(true);
    }, 8000); // absolute max 8s fallback

    preloadImages(CRITICAL_IMAGES).then(() => {
      if (!cancelled) {
        // Small delay after images load so user sees the branded loader
        setTimeout(() => setLoaderOut(true), 600);
      }
    });

    return () => {
      cancelled = true;
      clearTimeout(maxWait);
    };
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
  }, []);

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

  return (
    <div style={{ background: ink, color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ─── LOADER ─── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "opacity 1s 0.3s",
        opacity: loaderOut ? 0 : 1,
        pointerEvents: loaderOut ? "none" : "all",
        overflow: "hidden",
      }}>
        {/* Full-screen Alibaba campus background — ink fallback if image not yet loaded */}
        <div style={{ position: "absolute", inset: 0, background: ink }} />
        <img
          src={ALIBABA_IMG}
          alt=""
          fetchPriority="high"
          decoding="sync"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,14,23,0.72)" }} />
        {/* Gold vignette */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,14,23,0.85) 100%)" }} />

        {/* Brand block */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          {/* Logo — transparent PNG, wide aspect ratio */}
          <div style={{ width: isMobile ? 220 : 300, height: isMobile ? 88 : 120, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
            <img src={LOGO} alt="BridgeChina" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.6)) brightness(1.05)" }} />
          </div>

          {/* Brand name */}
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 28 : 38, fontWeight: 300, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" as const, lineHeight: 1 }}>
            BridgeChina
          </div>
          <div style={{ fontSize: isMobile ? 10 : 11, color: gold, letterSpacing: "0.22em", textTransform: "uppercase" as const, marginTop: 6, marginBottom: 28 }}>
            Premium Business Services
          </div>

          {/* Loading bar */}
          <div className="loader-line-anim" style={{ width: isMobile ? 100 : 140 }} />

          {/* Alibaba badge — official logo */}
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12, border: `1px solid ${line}`, padding: "10px 20px", background: "rgba(10,14,23,0.65)", backdropFilter: "blur(8px)" }}>
            <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 80, height: "auto", objectFit: "contain" }} />
            <div style={{ width: 1, height: 28, background: line, flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", lineHeight: 1.6 }}>Global Cross-border<br />Center · Hangzhou</span>
          </div>
        </div>
      </div>

      {/* ─── NAV ─── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 800, display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "0 16px" : "0 5vw", height: isMobile ? 64 : 76, transition: "background 0.4s, box-shadow 0.4s", background: navScrolled || mobileMenuOpen ? "rgba(10,14,23,0.96)" : "transparent", backdropFilter: navScrolled ? "blur(16px)" : "none", boxShadow: navScrolled ? `0 1px 0 ${line}` : "none" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <BrandLogo size={isMobile ? 36 : 44} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 17 : 20, fontWeight: 600, color: "#fff", letterSpacing: "0.06em" }}>BridgeChina</div>
            <div style={{ fontSize: isMobile ? 8 : 10, color: gold, letterSpacing: "0.14em", textTransform: "uppercase" as const }}>Premium Business Services</div>
          </div>
        </a>

        {!isMobile && (
          <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
            {["services", "process", "visa", "cities", "contact"].map((id) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase" as const, cursor: "pointer", fontFamily: "'Inter',sans-serif", padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = gold2} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        )}

        {!isMobile && (
          <button onClick={() => scrollTo("contact")} style={{ border: `1px solid ${gold}`, color: gold, padding: "9px 22px", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, background: "transparent", cursor: "pointer", fontFamily: "'Inter',sans-serif", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.color = ink; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = gold; }}>
            Free Consultation
          </button>
        )}

        {isMobile && (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: `1px solid ${line}`, color: gold, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, cursor: "pointer" }}>
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", top: 64, left: 0, right: 0, bottom: 0, background: "rgba(10,14,23,0.98)", zIndex: 799, padding: "24px 20px", overflowY: "auto" as const }}>
          {["services", "process", "visa", "cities", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left" as const, background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "18px 0", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{ marginTop: 24, width: "100%", background: gold, color: ink, border: "none", padding: "16px", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, cursor: "pointer" }}>
            Free Consultation
          </button>
          <div style={{ marginTop: 28, padding: "16px", border: `1px solid ${line}`, background: "rgba(184,150,90,0.05)", display: "flex", alignItems: "center", gap: 12 }}>
            <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 72, height: "auto", objectFit: "contain" }} />
            <div>
              <div style={{ fontSize: 10, color: gold, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Our Location</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Alibaba Global Cross-border Center · Hangzhou</div>
            </div>
          </div>
        </div>
      )}

      {/* ─── HERO ─── */}
      <div style={{ position: "relative", width: "100%", height: isMobile ? "100svh" : "100vh", overflow: "hidden" }}>
        {/* Ink fallback background while images load */}
        <div style={{ position: "absolute", inset: 0, background: ink, zIndex: 0 }} />
        {SLIDES.map((slide, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, opacity: i === currentSlide ? 1 : 0, transition: i === 0 ? "none" : "opacity 1.4s ease", zIndex: 1 }}>
            <img
              src={slide.bg}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding={i === 0 ? "sync" : "async"}
            />
            <div style={{ position: "absolute", inset: 0, background: isMobile ? "rgba(10,14,23,0.72)" : "linear-gradient(to right, rgba(10,14,23,0.82) 0%, rgba(10,14,23,0.55) 50%, rgba(10,14,23,0.3) 100%)" }} />
          </div>
        ))}

        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column" as const, justifyContent: "center", padding: isMobile ? "0 20px" : "0 5vw", paddingTop: isMobile ? 64 : 76 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, opacity: 0, animation: "heroIn 0.9s 1.2s forwards" }}>
            <div style={{ width: 36, height: 1, background: gold }} />
            <span style={{ fontSize: isMobile ? 10 : 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: gold2 }}>Foreign Business Services · China</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? "clamp(36px,10vw,52px)" : "clamp(48px,7vw,96px)", fontWeight: 300, lineHeight: 1.05, color: "#fff", marginBottom: 10, opacity: 0, animation: "heroIn 1s 1.4s forwards" }}>
            Your Gateway to<br />
            <em style={{ color: gold2, fontStyle: "italic" }}>Business in China</em>
          </h1>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 16 : "clamp(18px,2.4vw,28px)", fontWeight: 300, color: "rgba(255,255,255,0.55)", marginBottom: isMobile ? 20 : 40, letterSpacing: "0.03em", opacity: 0, animation: "heroIn 0.9s 1.6s forwards" }}>
            Company Registration · Work Visas · Legal Compliance
          </p>

          {!isMobile && (
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 440, marginBottom: 44, opacity: 0, animation: "heroIn 0.9s 1.8s forwards" }}>
              We handle every legal, administrative, and regulatory step so you can focus on what matters — building your business in one of the world's largest markets.
            </p>
          )}

          <div style={{ display: "flex", gap: isMobile ? 12 : 20, flexWrap: "wrap" as const, opacity: 0, animation: "heroIn 0.9s 2s forwards" }}>
            <button onClick={() => scrollTo("contact")} style={{ background: gold, color: ink, padding: isMobile ? "14px 28px" : "16px 40px", fontSize: isMobile ? 12 : 12.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
              Start Your Journey
            </button>
            <button onClick={() => scrollTo("services")} style={{ border: "1px solid rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.8)", padding: isMobile ? "14px 24px" : "16px 36px", fontSize: isMobile ? 12 : 12.5, fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase" as const, background: "transparent", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>
              Explore Services
            </button>
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: "absolute", bottom: 100, left: "5vw", zIndex: 3, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" }}>Currently showing</span>
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
            { num: "3,200+", label: "Companies" },
            { num: "58", label: "Countries" },
            { num: "98%", label: "Visa Success" },
            { num: "12+", label: "Years Exp." },
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
        {/* Background campus image, very subtle */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('${ALIBABA_IMG}')`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center" as const, marginBottom: isMobile ? 32 : 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${line}`, padding: "6px 16px", marginBottom: 20 }}>
              <div style={{ width: 6, height: 6, background: gold, borderRadius: "50%" }} />
              <span style={{ fontSize: 10, color: gold, letterSpacing: "0.18em", textTransform: "uppercase" as const }}>Strategic Location</span>
            </div>
            <h2 data-reveal style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 26 : "clamp(28px,3.5vw,46px)", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
              Based Inside the<br /><em style={{ color: gold2, fontStyle: "italic" }}>Alibaba Global Cross-border Center</em>
            </h2>
            <p data-reveal style={{ fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.45)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
              BridgeChina operates from within Alibaba's premier international trade hub in Hangzhou — giving our clients direct access to cross-border commerce infrastructure, government relationships, and Alibaba's global trade network.
            </p>
          </div>

          {/* Three pillars */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 16 : 1, background: isMobile ? "transparent" : line, border: isMobile ? "none" : `1px solid ${line}` }}>
            {[
              { icon: "🏛️", title: "Government-Backed Hub", desc: "The Alibaba Global Cross-border Center is a state-approved international trade zone with streamlined regulatory access and customs facilitation." },
              { icon: "🌐", title: "Alibaba Trade Network", desc: "Direct access to Alibaba's cross-border e-commerce infrastructure, AliExpress, 1688, and Cainiao logistics — the world's largest trade ecosystem." },
              { icon: "🤝", title: "Established Relationships", desc: "Years of working alongside Alibaba's partner network means faster approvals, better banking relationships, and trusted introductions for our clients." },
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
            <img src={ALIBABA_IMG} alt="Alibaba Global Cross-border Center, Hangzhou Binjiang" style={{ width: "100%", height: isMobile ? 180 : 260, objectFit: "cover", objectPosition: "center 40%", display: "block" }} loading="lazy" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,14,23,0.7) 0%, transparent 40%, transparent 60%, rgba(10,14,23,0.7) 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(10,14,23,0.8))", padding: isMobile ? "16px 16px" : "20px 32px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 10, color: gold, letterSpacing: "0.14em", textTransform: "uppercase" as const }}>Our Office</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 14 : 17, color: "#fff", marginTop: 3 }}>阿里巴巴滨江园区五号楼 · Hangzhou, Zhejiang</div>
              </div>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${gold}`, color: gold, padding: "8px 14px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", flexShrink: 0, transition: "all 0.3s" }}>
                📍 View on Map
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ─── SERVICES ─── */}
      <section id="services" style={{ padding: secPad, background: ink }}>
        <SectionLabel text="Our Services" />
        <h2 data-reveal style={secH}>Everything You Need to<br /><em style={{ color: gold2, fontStyle: "italic" }}>Operate in China</em></h2>
        <p data-reveal style={secP}>End-to-end business services for international entrepreneurs and executives — from first incorporation to full compliance.</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 1, background: line, border: `1px solid ${line}` }}>
          {SERVICES.map((svc, i) => <ServiceCard key={i} svc={svc} delay={isMobile ? 0 : i % 3} isMobile={isMobile} />)}
        </div>
      </section>

      <GoldDivider />

      {/* ─── PROCESS ─── */}
      <section id="process" style={{ padding: secPad, background: ink2 }}>
        <SectionLabel text="How It Works" center />
        <h2 data-reveal style={{ ...secH, textAlign: "center" as const, margin: "0 auto 14px" }}>From Inquiry to<br /><em style={{ color: gold2, fontStyle: "italic" }}>Open for Business</em></h2>
        <p data-reveal style={{ ...secP, textAlign: "center" as const, maxWidth: 500, margin: "0 auto" + (isMobile ? " 36px" : " 60px") }}>A transparent, structured process designed to minimise delays and maximise certainty.</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 24 : 0 }}>
          {STEPS.map((step, i) => (
            <div key={i} data-reveal data-reveal-delay={i > 0 ? String(Math.min(i, 3)) : undefined} style={{ padding: isMobile ? "0 8px" : "0 24px", textAlign: "center" as const }}>
              <div style={{ width: isMobile ? 56 : 72, height: isMobile ? 56 : 72, border: `1px solid ${gold}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", background: ink2, fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 22 : 26, fontWeight: 300, color: gold2 }}>{step.n}</div>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 16 : 18, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{step.title}</h4>
              <p style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section style={{ padding: secPad, background: ink }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>
          <div>
            <SectionLabel text="Why BridgeChina" />
            <h2 data-reveal style={secH}>We Know What<br /><em style={{ color: gold2, fontStyle: "italic" }}>China Expects</em></h2>
            <p data-reveal style={secP}>Chinese business regulations change constantly. Our team tracks every update so your filings are always current, compliant, and bulletproof.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {WHY_POINTS.map((pt, i) => (
                <li key={i} data-reveal data-reveal-delay={i > 0 ? String(Math.min(i, 3)) : undefined} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 14, padding: "18px 0", borderBottom: i < WHY_POINTS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ color: gold, fontSize: 12, paddingTop: 2 }}>◆</div>
                  <div>
                    <strong style={{ fontSize: isMobile ? 14 : 15, fontWeight: 500, color: "#fff", display: "block", marginBottom: 4 }}>{pt.title}</strong>
                    <span style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{pt.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ position: "relative" }}>
            <img src={ALIBABA_IMG} alt="Alibaba Global Cross-border Center" style={{ width: "100%", height: isMobile ? 240 : "auto", aspectRatio: isMobile ? undefined : "4/5", objectFit: "cover", objectPosition: "center", display: "block" }} loading="lazy" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(10,14,23,0.7))" }} />
            {!isMobile && <div style={{ position: "absolute", top: -16, left: -16, right: 16, bottom: 16, border: `1px solid ${line}`, pointerEvents: "none", zIndex: -1 }} />}
            <div style={{ position: "absolute", bottom: isMobile ? 12 : -24, right: isMobile ? 12 : -32, background: gold, color: ink, padding: isMobile ? "16px 14px" : "24px 20px", textAlign: "center" as const }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 28 : 40, fontWeight: 300, lineHeight: 1, display: "block" }}>98%</span>
              <span style={{ fontSize: isMobile ? 9 : 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, display: "block", marginTop: 4 }}>Visa Approval</span>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "rgba(10,14,23,0.75)" }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Our Location</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>阿里巴巴滨江园区五号楼 · 杭州</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISA ─── */}
      <section id="visa" style={{ padding: secPad, background: ink2 }}>
        <SectionLabel text="Visa Services" />
        <h2 data-reveal style={secH}>Every Business<br /><em style={{ color: gold2, fontStyle: "italic" }}>Visa Category</em></h2>
        <p data-reveal style={secP}>We identify the correct visa category for your situation and prepare every document to maximise first-attempt approval.</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 1, background: line, border: `1px solid ${line}` }}>
          {VISAS.map((visa, i) => <VisaCard key={i} visa={visa} delay={isMobile ? 0 : i} isMobile={isMobile} />)}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: secPad, background: ink, position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Cormorant Garamond',serif", fontSize: 160, fontWeight: 300, color: "rgba(184,150,90,0.04)", letterSpacing: "0.3em", pointerEvents: "none", whiteSpace: "nowrap" }}>TRUST</div>
        )}
        <SectionLabel text="Client Testimonials" center />
        <h2 data-reveal style={{ ...secH, textAlign: "center" as const, margin: "0 auto 14px" }}>Trusted Across<br /><em style={{ color: gold2, fontStyle: "italic" }}>58 Countries</em></h2>
        <p data-reveal style={{ ...secP, textAlign: "center" as const, maxWidth: 480, margin: "0 auto" + (isMobile ? " 36px" : " 56px") }}>International entrepreneurs from every continent have built their China operations through BridgeChina.</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 16 : 24 }}>
          {TESTIMONIALS.map((t, i) => <TestiCard key={i} t={t} delay={isMobile ? 0 : i} isMobile={isMobile} />)}
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section id="cities" style={{ background: ink2 }}>
        <div style={{ padding: isMobile ? "36px 20px 20px" : "48px 5vw 28px" }}>
          <SectionLabel text="Cities We Serve" center />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5,1fr)", borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
          {CITIES.map((city, i) => <CityItem key={i} city={city} isMobile={isMobile} />)}
        </div>
        <div style={{ height: isMobile ? 32 : 48 }} />
      </section>

      {/* ─── CTA ─── */}
      <div style={{ background: "linear-gradient(135deg,#0C1525 0%,#131929 100%)", padding: isMobile ? "64px 20px" : "120px 5vw", textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${gold},transparent)` }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${gold},transparent)` }} />
        <h2 data-reveal style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 30 : "clamp(32px,5vw,62px)", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
          Ready to Enter<br />the Chinese Market?
        </h2>
        <p data-reveal style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.5)", maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.8 }}>
          Book a complimentary 30-minute consultation with one of our senior advisors. Clear answers, no obligation.
        </p>
        <div data-reveal style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
          <button onClick={() => scrollTo("contact")} style={{ background: gold, color: ink, padding: isMobile ? "14px 28px" : "16px 40px", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}>Book Consultation</button>
          <a href="https://wa.me/17757447058" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.75)", padding: isMobile ? "14px 24px" : "16px 36px", fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ padding: secPad, background: ink }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
          <div>
            <SectionLabel text="Get In Touch" />
            <h2 data-reveal style={secH}>Request a Free<br /><em style={{ color: gold2, fontStyle: "italic" }}>Consultation</em></h2>
            <p data-reveal style={secP}>Complete the form and a dedicated advisor will respond within 24 hours. Urgent visa cases are prioritised.</p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: 24, marginBottom: 36 }}>
              {[
                { icon: "✉", label: "Email", value: "ylsg19971102@gmail.com", note: "Replies within 24 hours", href: "mailto:ylsg19971102@gmail.com" },
                { icon: "💬", label: "WeChat · WhatsApp", value: "+1 775 744 7058", note: "WeChat / WhatsApp: 17757447058", href: "https://wa.me/17757447058" },
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
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: gold, marginBottom: 5 }}>Office</div>
                  <div style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>阿里巴巴滨江园区五号楼<br />Alibaba Binjiang Campus, Bldg. 5<br />杭州市滨江区，浙江省</div>
                  <div style={{ fontSize: 11, color: gold, marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
                    <span>View on Google Maps →</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Alibaba endorsement image */}
            <div data-reveal style={{ position: "relative", overflow: "hidden", border: `1px solid ${line}` }}>
              <img src={ALIBABA_IMG} alt="Alibaba Global Cross-border Center" style={{ width: "100%", height: isMobile ? 160 : 200, objectFit: "cover", objectPosition: "center 40%", display: "block" }} loading="lazy" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(10,14,23,0.85))" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 64, height: "auto", objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: 10, color: gold, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Alibaba Global Cross-border Center</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>阿里巴巴全球跨境中心 · 杭州滨江</div>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                <FormInput placeholder="First Name" value={formState.firstName} onChange={v => setFormState(s => ({ ...s, firstName: v }))} />
                <FormInput placeholder="Last Name" value={formState.lastName} onChange={v => setFormState(s => ({ ...s, lastName: v }))} />
              </div>
              <FormInput placeholder="Email Address" type="email" value={formState.email} onChange={v => setFormState(s => ({ ...s, email: v }))} />
              <FormInput placeholder="WhatsApp / WeChat / Phone" value={formState.contact} onChange={v => setFormState(s => ({ ...s, contact: v }))} />
              <select value={formState.service} onChange={e => setFormState(s => ({ ...s, service: e.target.value }))} style={{ width: "100%", padding: "16px 18px", background: ink2, border: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", color: formState.service ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)", fontFamily: "'Inter',sans-serif", fontSize: 13, outline: "none", WebkitAppearance: "none" as any, cursor: "pointer" }}>
                <option value="" disabled>— Select Service Required —</option>
                {["Company Registration (WFOE)", "Company Registration (JV)", "Registered Address Rental", "Work Visa (Z-Visa)", "Business Visa (M-Visa)", "Document Review & Audit", "Multiple Services"].map(opt => (
                  <option key={opt} value={opt} style={{ background: ink2, color: "#fff" }}>{opt}</option>
                ))}
              </select>
              <textarea placeholder="Describe your business and any specific questions…" value={formState.message} onChange={e => setFormState(s => ({ ...s, message: e.target.value }))} style={{ width: "100%", padding: "16px 18px", background: ink2, border: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontFamily: "'Inter',sans-serif", fontSize: 13, outline: "none", minHeight: 110, resize: "vertical" as const }} />
              <button type="submit" style={{ background: formSubmitted ? "#1a7a4a" : gold, color: formSubmitted ? "#fff" : ink, padding: "17px", border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, width: "100%", transition: "background 0.3s", marginTop: 2 }}>
                {formSubmitted ? "✓ Received — we will be in touch within 24 hours" : "Send Enquiry →"}
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
                <div style={{ fontSize: 9, color: gold, letterSpacing: "0.14em", textTransform: "uppercase" as const }}>Premium Business Services</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, marginTop: 14, maxWidth: 260 }}>Professional foreign affairs and business setup services for international entrepreneurs in China. Based at Alibaba Global Cross-border Center, Hangzhou.</p>
            {/* Alibaba badge in footer */}
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, border: `1px solid ${line}`, padding: "8px 12px", textDecoration: "none" }}>
              <img src={ALIBABA_LOGO} alt="Alibaba" style={{ width: 60, height: "auto", objectFit: "contain" }} />
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>Alibaba Global Cross-border Center</span>
            </a>
          </div>
          {[
            { title: "Services", links: ["Company Registration", "Registered Address", "Work Visa (Z)", "Document Review", "Business Permits", "Bank Account"] },
            { title: "Cities", links: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou", "Hangzhou", "Chengdu"] },
            { title: "Company", links: ["About Us", "Our Team", "Blog & Guides", "WFOE Guide", "Visa FAQ", "Contact"] },
          ].map(col => (
            <div key={col.title}>
              <h5 style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: gold, marginBottom: 16, fontWeight: 400 }}>{col.title}</h5>
              {col.links.map(link => (
                <a key={link} href="#" style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none", marginBottom: 10 }}
                  onMouseEnter={e => e.currentTarget.style.color = gold2} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "rgba(255,255,255,0.2)", flexWrap: "wrap" as const, gap: 8 }}>
          <span>© 2025 BridgeChina. All rights reserved.</span>
          <span style={{ display: "flex", gap: 16 }}>
            {["Privacy Policy", "Terms of Service"].map(link => (
              <a key={link} href="#" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>{link}</a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function ServiceCard({ svc, delay, isMobile }: { svc: typeof SERVICES[0]; delay: number; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div data-reveal data-reveal-delay={delay > 0 ? String(delay) : undefined} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "#111827" : ink2, padding: isMobile ? "28px 20px" : "44px 36px", position: "relative", overflow: "hidden", transition: "background 0.3s" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${gold},${gold2})`, transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
      {!isMobile && <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 56, fontWeight: 300, color: "rgba(184,150,90,0.1)", position: "absolute", top: 20, right: 24, lineHeight: 1, pointerEvents: "none" }}>{svc.num}</div>}
      <span style={{ fontSize: isMobile ? 24 : 28, marginBottom: 18, display: "block" }}>{svc.icon}</span>
      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 18 : 21, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{svc.title}</h3>
      <p style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 20 }}>{svc.desc}</p>
      <a href="#contact" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: gold, textDecoration: "none" }}>Enquire Now →</a>
    </div>
  );
}

function VisaCard({ visa, delay, isMobile }: { visa: typeof VISAS[0]; delay: number; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div data-reveal data-reveal-delay={delay > 0 ? String(delay) : undefined} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "#111827" : ink2, padding: isMobile ? "24px 16px" : "36px 28px", transition: "background 0.3s" }}>
      <div style={{ display: "inline-block", border: `1px solid ${gold}`, color: gold, fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 24 : 28, fontWeight: 300, padding: "6px 14px", marginBottom: 18 }}>{visa.badge}</div>
      <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 16 : 18, fontWeight: 400, color: "#fff", marginBottom: 10 }}>{visa.title}</h4>
      <p style={{ fontSize: isMobile ? 11 : 12.5, color: "rgba(255,255,255,0.42)", lineHeight: 1.7 }}>{visa.desc}</p>
    </div>
  );
}

function TestiCard({ t, delay, isMobile }: { t: typeof TESTIMONIALS[0]; delay: number; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div data-reveal data-reveal-delay={delay > 0 ? String(delay) : undefined} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ border: `1px solid ${hovered ? line : "rgba(255,255,255,0.06)"}`, padding: isMobile ? "24px 20px" : "36px 32px", background: ink2, position: "relative", transition: "border-color 0.3s, transform 0.3s", transform: hovered ? "translateY(-4px)" : "none" }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 60, lineHeight: 1, color: gold, opacity: 0.4, position: "absolute", top: 16, right: 24 }}>"</div>
      <div style={{ color: gold2, fontSize: 11, letterSpacing: 3, marginBottom: 16 }}>★★★★★</div>
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 15 : 16, fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 24 }}>{t.text}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
        <div style={{ width: 40, height: 40, border: `1px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: gold2, flexShrink: 0 }}>{t.av}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{t.name}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function CityItem({ city, isMobile }: { city: typeof CITIES[0]; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ position: "relative", height: isMobile ? 140 : 220, overflow: "hidden" }}>
      <img src={city.bg} alt={city.en} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.8s" }} loading="lazy" />
      <div style={{ position: "absolute", inset: 0, background: hovered ? "rgba(10,14,23,0.35)" : "rgba(10,14,23,0.55)", transition: "background 0.4s" }} />
      <div style={{ position: "absolute", bottom: 14, left: 16, zIndex: 1 }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 16 : 20, fontWeight: 300, color: "#fff" }}>{city.en}</div>
        <div style={{ fontSize: 10, color: gold2, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginTop: 2 }}>{city.zh}</div>
      </div>
    </div>
  );
}

function FormInput({ placeholder, type = "text", value, onChange }: { placeholder: string; type?: string; value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{ width: "100%", padding: "15px 16px", background: focused ? "#111827" : ink2, border: "none", borderBottom: `1px solid ${focused ? gold : "rgba(255,255,255,0.08)"}`, color: "#fff", fontFamily: "'Inter',sans-serif", fontSize: 13, outline: "none", transition: "border-color 0.3s, background 0.3s" }} />
  );
}
