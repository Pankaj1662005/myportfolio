import React from "react";

const posts = [
  {
    href: "https://aakash58.hashnode.dev/flutter-vs-flock-exploring-the-new-fork-in-cross-platform-development",
    date: "Nov 18, 2024",
    title: "Flutter vs. Flock: Cross-Platform Evaluation",
    desc: "Explore the differences between Flutter and Flock, a new fork focused on faster development and community-driven cross-platform app creation"
  },
  {
    href: "https://aakash58.hashnode.dev/the-future-of-cross-platform-apps-flutters-role-in-2024-and-beyond",
    date: "Nov 13, 2024",
    title: "Flutter's Impact on Future Cross-Platform Apps",
    desc: "Explore Flutter's growing influence on cross-platform app development in 2024 and its future potential across mobile, web, and IoT devices"
  }
];

export default function Blog() {
  return (
    <section className="mb-16 mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">Blog</h2>
      <div className="w-14 h-1 bg-[#e1a27a] mb-6 rounded-full" />
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#232325] p-5 rounded-2xl shadow-md flex flex-col hover:scale-105 transition-transform duration-150 cursor-pointer"
          >
            <span className="text-xs text-[#e1a27a] mb-1">{post.date}</span>
            <span className="text-lg font-bold mb-2">{post.title}</span>
            <span className="text-[#cccccc]">{post.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
