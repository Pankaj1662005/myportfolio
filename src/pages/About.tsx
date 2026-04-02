import React from "react";

const skills = [
  "Data Structure and Algorithms",
  "Flutter App Development",
  "Unity game engine",
  "GitHub Expert",
  "Kotlin Expert",
  "Firebase Expert",
  "Android SDK Expert",
  "Android Studio Expert",
  "Communication skills",
  "SQL",
  "Data Science",
  "Machine learning"
];

export default function About() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">About Me</h2>
      <div className="w-14 h-1 bg-[#e1a27a] mb-4 rounded-full" />
      <div className="max-w-2xl text-lg text-[#cccccc] mb-6">
        <p>
          I am Pankaj Sheokand, a passionate engineering student well-versed in data structures & algorithms, app and game development, and modern technologies. I bring hands-on experience building robust mobile apps, cloud-based services, and smart systems driven by machine learning and data science. Whether it is product design, scalable backends, or end-to-end UI/UX, my skills enable me to deliver high-quality and innovative solutions for real-world problems.
        </p>
        <p className="mt-4">
          Looking for a driven developer with a knack for both software and systems? Let’s connect—together we’ll turn ideas into impact.
        </p>
      </div>
      <h3 className="text-2xl font-bold mt-12 mb-4">Skills</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#232325] rounded-2xl px-4 py-2 text-base text-[#e1a27a] font-semibold shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
