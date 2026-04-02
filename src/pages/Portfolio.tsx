import React from "react";

const projects = [

  {
    img: "https://cdn.mos.cms.futurecdn.net/gbprbdRLGbT5KeTsq6pT9f-1200-80.jpg", title: "Aura Brain", type: "Capstone — hardware/software integration", period: "Present",
    desc: "Wearable voice-based assistant powered by ESP32. Sends audio data wirelessly to phone, integrated with Aura chatbot for daily Q&A and conversation summaries.",
    tech: ["ESP32", "Bluetooth", "Voice AI", "Firebase", "Arduino"],
    href: "https://github.com/Pankaj1662005/DeepLogix"
  },
  {
    img: "https://m.media-amazon.com/images/I/610jFSCw0CL._UF894,1000_QL80_.jpg",
    title: "Try Hack me",
    type: "Educational Mobile Application about Flutter Permissions",
    period: "Jan 2025",
    desc: "This app was built purely for educational purposes to explore how permissions work in Flutter. The app fetches and uploads contacts, accesses the device's DCIM directory, and opens a WebView with Instagram. It also captures live images via the camera in the background using service handlers.",
    tech: ["Flutter", "Permissions Handling", "Firebase (Firestore & Storage)", "Camera Integration", "Background Services", "WebView", "Contacts API"],
    href: "https://github.com/Pankaj1662005/Hack-App"
  },
  {
    img: "/ai.jpg", title: "AURA Chatbot", type: "Offline Chatbot using LLMs", period: "February 2025",
    desc: "Interactive offline chatbot using Falcon-7B-Instruct via Hugging Face Transformers with contextual memory.",
    tech: ["Falcon-7B", "Transformers", "Python", "Hugging Face"],
    href: "https://github.com/Pankaj1662005/AURA-chatbot"
  },
  {
    img: "/skill-port.jpg", title: "Skill-Port", type: "Mobile App — college students & professors", period: "Present (Major project)",
    desc: "A platform where students apply to internships posted by professors. Features email verification, club joining, streak tracking, student profiles, and in-app reporting.",
    tech: ["Firebase", "Authentication", "Real-time DB", "UI/UX"],
    href: "https://github.com/Pankaj1662005/Internshala-User"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayQuUkQCIf9i3kdrsBg1UKAXF3OB2PX0JkQ&s",
    title: "Stream-it", type: "Free Movie Streaming App", period: "January 2024",
    desc: "Free movie streaming application for Android TV and mobile. Inspired by Pikashow.",
    tech: ["Authentication", "TMDB API", "In-app Messaging"],
    href: "https://github.com/Pankaj1662005/Streamer_movie_App"
  },
  {
    img: "/weather.jpg", title: "ML Weather App", type: "ML + Flutter cross-platform", period: "October 2024",
    desc: "Predicts weather conditions with 93% accuracy using ML model hosted on Flask backend, Flutter frontend.",
    tech: ["Python", "Scikit-learn", "Flask", "Flutter"],
    href: "https://github.com/Pankaj1662005/weather2"
  },
  {
    img: "/digiocean.webp", title: "Digi-Ocean", type: "Mobile App for TIET students", period: "August 2023",
    desc: "Engineering news homepage + access to LMS, Webkiosk, MyHerupa, and other Thapar University resources.",
    tech: ["Firebase", "News API", "Google Ads", "In-app Browser"],
    href: "https://github.com/Pankaj1662005/Travel"
  },
  {
    img: "/avtar.jpg", title: "Portfolio Website", type: "Personal Portfolio", period: "March 2023",
    desc: "A personal portfolio website showcasing projects, skills, and experience.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    href: "https://github.com/Pankaj1662005/myportfolio"
  }
];

export default function Portfolio() {
  return (
    <section style={{ marginBottom: "4rem" }}>
      <h2 style={{ marginBottom: "8px" }}>Projects</h2>
      <div style={{
        width: "64px", height: "3px",
        background: "linear-gradient(90deg, #7b6cff, #e1a27a)",
        borderRadius: "2px", marginBottom: "28px"
      }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", overflow: "hidden" }}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={proj.img} alt={proj.title}
                style={{ width: "100%", height: "160px", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                onMouseOver={e => (e.currentTarget.style.transform = "scale(1.07)")}
                onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
                background: "linear-gradient(to top, rgba(13,13,16,0.9), transparent)"
              }} />
            </div>
            <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>{proj.title}</span>
              <span style={{ fontSize: "0.72rem", color: "#e1a27a", fontWeight: 600, marginBottom: "4px" }}>{proj.type}</span>
              <span style={{ fontSize: "0.68rem", color: "#666", marginBottom: "10px" }}>{proj.period}</span>
              <p style={{ fontSize: "0.8rem", color: "#aaa", lineHeight: 1.6, flex: 1, marginBottom: "14px" }}>{proj.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {proj.tech.map(t => (
                  <span key={t} style={{
                    fontSize: "0.65rem", padding: "3px 9px",
                    borderRadius: "100px", fontWeight: 600,
                    background: "rgba(123,108,255,0.1)",
                    border: "1px solid rgba(123,108,255,0.2)",
                    color: "#7b6cff"
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}