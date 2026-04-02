import React from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#f0f0f4",
  fontSize: "0.88rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function Contact() {
  return (
    <section style={{ marginBottom: "4rem" }}>
      <h2 style={{ marginBottom: "8px" }}>Contact</h2>
      <div style={{
        width: "48px", height: "3px",
        background: "linear-gradient(90deg, #7b6cff, #e1a27a)",
        borderRadius: "2px", marginBottom: "20px"
      }} />

      <p style={{ color: "#aaa", marginBottom: "28px", fontSize: "0.92rem", maxWidth: "480px" }}>
        Let's connect! Feel free to reach out for collaborations, consulting, or project opportunities — I'll reply quickly.
      </p>

      <form
        action="https://formspree.io/f/xeognrnj"
        method="POST"
        className="glass-card"
        style={{ maxWidth: "520px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <input type="text" name="name" placeholder="Your Name" required style={inputStyle}
          onFocus={e => { e.target.style.borderColor = "rgba(123,108,255,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(123,108,255,0.1)"; }}
          onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
        />
        <input type="email" name="email" placeholder="Your Email" required style={inputStyle}
          onFocus={e => { e.target.style.borderColor = "rgba(123,108,255,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(123,108,255,0.1)"; }}
          onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
        />
        <textarea name="message" placeholder="Your Message" required rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={e => { e.currentTarget.style.borderColor = "rgba(123,108,255,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(123,108,255,0.1)"; }}
          onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
        />
        <button type="submit" style={{
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, #7b6cff, #e1a27a)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "opacity 0.2s, transform 0.2s",
          letterSpacing: "0.02em",
        }}
          onMouseOver={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseOut={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Send Message →
        </button>
      </form>
    </section>
  );
}