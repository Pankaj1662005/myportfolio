import React from "react";

const skills = [
  "Data Structures & Algorithms", "Flutter App Development", "Unity Game Engine",
  "GitHub Expert", "Kotlin", "Firebase", "Android SDK", "Android Studio",
  "Communication Skills", "SQL", "Data Science", "Machine Learning"
];

export default function About() {
  return (
    <section style={{ marginBottom: "4rem" }}>
      <h2 style={{ marginBottom: "8px" }}>About Me</h2>
      <div style={{
        width: "48px", height: "3px",
        background: "linear-gradient(90deg, #7b6cff, #e1a27a)",
        borderRadius: "2px", marginBottom: "20px"
      }} />

      <div className="glass-card" style={{ padding: "24px 28px", marginBottom: "28px", color: "#ccc", lineHeight: 1.75, fontSize: "0.95rem" }}>
        <p>
          I am <strong style={{ color: "#f0f0f4" }}>Pankaj Sheokand</strong>, a passionate engineering student well-versed in data structures &amp; algorithms, app and game development, and modern technologies. I bring hands-on experience building robust mobile apps, cloud-based services, and smart systems driven by machine learning and data science.
        </p>
        <p style={{ marginTop: "14px" }}>
          Looking for a driven developer with a knack for both software and systems? Let's connect—together we'll turn ideas into impact.
        </p>
      </div>

      <h3 style={{ fontSize: "1.25rem", marginBottom: "16px" }}>Skills</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {skills.map((skill) => (
          <div key={skill} className="glass-card" style={{
            padding: "8px 16px",
            fontSize: "0.82rem",
            color: "#e1a27a",
            fontWeight: 600,
            borderRadius: "100px",
            cursor: "default",
          }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}