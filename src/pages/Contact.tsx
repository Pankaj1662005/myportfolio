import React from "react";

export default function Contact() {
  return (
    <section className="mb-16 mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">Contact</h2>
      <div className="w-14 h-1 bg-[#e1a27a] mb-6 rounded-full" />
      <div className="mb-8 max-w-xl text-lg text-[#cccccc] mx-auto">
        Let's connect! Feel free to reach out for collaborations, consulting, or project opportunities—I will reply quickly.
      </div>

      {/* Formspree Form */}
      <form
        action="https://formspree.io/f/xeognrnj"
        method="POST"
        className="max-w-xl bg-[#232325] p-10 rounded-2xl shadow-md mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="rounded-lg p-3 bg-[#1b1b1c] border-none text-white placeholder:text-[#aaaaaa] focus:ring-2 focus:ring-[#e1a27a]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-lg p-3 bg-[#1b1b1c] border-none text-white placeholder:text-[#aaaaaa] focus:ring-2 focus:ring-[#e1a27a]"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          className="rounded-lg p-3 bg-[#1b1b1c] border-none text-white placeholder:text-[#aaaaaa] focus:ring-2 focus:ring-[#e1a27a]"
        />
        <button
          type="submit"
          className="rounded-xl bg-[#e1a27a] text-[#232325] font-bold py-3 hover:bg-[#cf8b5e] transition-colors duration-150"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
