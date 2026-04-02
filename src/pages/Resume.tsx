import React from "react";

const cardStyle: React.CSSProperties = {
  padding: "20px 22px",
  marginBottom: "14px",
};

const accentBar: React.CSSProperties = {
  width: "40px", height: "3px",
  background: "linear-gradient(90deg, #7b6cff, #e1a27a)",
  borderRadius: "2px", marginBottom: "20px"
};

export default function Resume() {
  return (
    <section style={{ marginBottom: "4rem" }}>
      <h2 style={{ marginBottom: "8px" }}>Resume</h2>
      <div style={accentBar} />

      <div style={{ display: "grid", gap: "32px" }} className="resume-grid">
        {/* Education */}
        <div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "#e1a27a" }}>🎓 Education</h3>
          {[
            { period: "B.Tech, Computer Engineering (2022–2026)", school: "Thapar Institute of Engineering & Technology", score: "CGPA: 7.8" },
            { period: "12th (CBSE)", school: "Aaron Public School, Jind", score: "Score: 90.8%" },
            { period: "10th (CBSE)", school: "Delhi Public School, Jind", score: "Score: 90.6%" },
          ].map(e => (
            <div key={e.school} className="glass-card" style={cardStyle}>
              <span style={{ display: "block", color: "#e1a27a", fontWeight: 600, fontSize: "0.82rem", marginBottom: "4px" }}>{e.period}</span>
              <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{e.school}</span>
              <div style={{ color: "#888", fontSize: "0.8rem", marginTop: "4px" }}>{e.score}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "#7b6cff" }}>📜 Certifications</h3>
          {[
            { title: "Data Science: Foundations using R (Coursera, 2024)", skills: "R, Data Cleaning, Data Viz, GitHub, Ggplot2, Statistical Analysis" },
            { title: "NLP Specialization (Coursera, 2025)", skills: "Sentiment Analysis, Machine Translation, BERT, RNNs, LSTMs, Attention, TensorFlow" },
            { title: "Mastering DSA using C & C++ (Udemy)", skills: "Arrays, Linked Lists, Trees, Graphs, Sorting, Hashing, Problem Solving" },
            { title: "Alpha Placement Course (Apna College)", skills: "Java, OOP, Dynamic Programming, Graph Algorithms, System Design" },
            { title: "25+ Guided Projects (Coursera)", skills: "Flask, TensorFlow, BERT, Power BI, EDA, Web Scraping, ML" },
          ].map(c => (
            <div key={c.title} className="glass-card" style={cardStyle}>
              <span style={{ display: "block", color: "#7b6cff", fontWeight: 600, fontSize: "0.82rem", marginBottom: "6px" }}>{c.title}</span>
              <p style={{ fontSize: "0.75rem", color: "#999", lineHeight: 1.6 }}>{c.skills}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 700px) {
          .resume-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}