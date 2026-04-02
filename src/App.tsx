import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import "./index.css";
import ThreeBackground from "./ThreeBackground";   // <-- NEW
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const socialLinks = [
  { href: "https://www.linkedin.com/in/pankaj-sheokand/", icon: <Linkedin size={17} />, label: "LinkedIn" },
  { href: "https://github.com/Pankaj1662005", icon: <Github size={17} />, label: "GitHub" },
  { href: "https://x.com/Shokeen__singh", icon: <Twitter size={17} />, label: "Twitter" },
];
const navLinks = [
  { name: "About", to: "/" },
  { name: "Resume", to: "/resume" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" },
];

function useTilt(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.025,1.025,1.025)`;
    };
    const onLeave = () => { el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
}

function Sidebar() {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);
  const profileImages = ["/3d.gif", "/mypic.jpg"];
  const img = profileImages[Math.floor(Math.random() * profileImages.length)];
  return (
    <aside className="sidebar-outer">
      <div ref={cardRef} className="sidebar-card">
        <div className="sidebar-top-glow" />
        <div className="avatar-wrap">
          <div className="avatar-ring-outer">
            <img src={img} alt="Pankaj" className="avatar-img" />
          </div>
          <div className="avatar-halo" />
        </div>
        <h1 className="sidebar-name">Pankaj Sheokand</h1>
        <span className="sidebar-role">Engineering Student</span>
        <div className="tags-row">
          {["Tiet-26", "CS", "Data Science"].map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="divider" />
        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-icon"><Mail size={14} /></span>
            <a href="mailto:pankajsheof2ys@gmail.com" className="contact-text">pankajsheof2ys@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><MapPin size={14} /></span>
            <span className="contact-text">Jind, Haryana, India</span>
          </div>
        </div>
        <div className="divider" />
        <div className="socials-row">
          {socialLinks.map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-btn">{icon}</a>
          ))}
        </div>
        <div className="status-chip"><span className="status-dot" /> Open to Work</div>
        <div className="corner-gem gem-tl" />
        <div className="corner-gem gem-br" />
      </div>
    </aside>
  );
}

function NavBar() {
  const location = useLocation();
  return (
    <nav className="topnav">
      {navLinks.map(({ name, to }) => {
        const active = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
        return (
          <Link key={name} to={to} className={`nav-link ${active ? "nav-active" : ""}`}>
            <span className="nav-link-text">{name}</span>
            {active && <span className="nav-underline" />}
          </Link>
        );
      })}
    </nav>
  );
}

function Layout() {
  return (
    <div className="root-wrap">
      <ThreeBackground />      {/* ← replaces FloatingOrbs */}
      <div className="layout-inner">
        <Sidebar />
        <main className="main-panel">
          <NavBar />
          <div className="page-wrap"><Outlet /></div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}