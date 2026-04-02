import React from "react";

export default function Portfolio() {
  const projects = [
  {
  img: "/skill-port.jpg",
  title: "Skill-Port",
  type: "Mobile Application for college students & professors",
  period: "Present (Major project)",
  desc: "A platform where students can apply to internships posted by their college professors. Features include email verification, club joining and posting, live status in clubs, streak tracking, student profiles, and in-app reporting. Professors can post internships and accept/reject applications after viewing student profiles.",
  tech: ["Firebase", "Authentication", "Real-time Database", "Modern UI/UX", "Big Project","Check both app on github"],
  href: "https://github.com/Pankaj1662005/Internshala-User"
},
{
  img: "https://cdn.mos.cms.futurecdn.net/gbprbdRLGbT5KeTsq6pT9f-1200-80.jpg",
  title: "Aura Brain",
  type: "Capstone Project with hardware-software integration (world10)",
  period: "Present",
  desc: "A wearable voice-based assistant powered by ESP32 that listens to user conversations and sends audio data wirelessly to the connected phone. Integrated with the Aura chatbot to answer daily questions, summarize conversations, and act as a second brain for users by logging daily activities and thoughts.",
  tech: ["ESP32", "Bluetooth/Wi-Fi", "Voice Recognition", "AI Chatbot", "Firebase", "Arduino"],
  href: "https://github.com/Pankaj1662005/world10"
},

  {
  img: "https://static.vecteezy.com/system/resources/thumbnails/024/295/098/small_2x/music-notes-background-illustration-ai-generative-free-photo.jpg",
  title: "🎧 GO Tunes",
  type: "Flutter Music Player App with offline caching and high-quality audio playback",
  period: "2025",
  desc: "A sleek, ad-free music player app with features like offline liked songs, shuffle, repeat modes, and a smooth Material Dark UI.",
  tech: ["Flutter", "Provider", "AudioPlayers", "SharedPreferences", "flutter_cache_manager"],
  href: "https://github.com/Pankaj1662005/Go-tunes"
  },
  {
  img: "/ai.jpg",
  title: "AURA Chatbot",
  type: "Offline Chatbot using LLMs",
  period: "February 2025",
  desc: "An interactive offline chatbot built using the Falcon-7B-Instruct model via Hugging Face Transformers. It maintains contextual memory for seamless conversations. Later integrated into other projects like Aura Brain as a voice-based personal assistant for answering questions and summarizing daily interactions.",
  tech: ["Falcon-7B", "Transformers", "Machine Learning", "Offline Inference", "Python", "Hugging Face"],
  href: "https://github.com/Pankaj1662005/AURA-chatbot"
},

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayQuUkQCIf9i3kdrsBg1UKAXF3OB2PX0JkQ&s",
      title: "Stream-it",
      type: "Free movie streaming app for Android TV and mobile devices (iOS/Android)",
      period: "January 2024",
      desc: "The idea was inspired by Pikashow, a free movie streaming application.",
      tech: ["Authentication", "In-app messaging", "Built-in app updates & Version Control", "TMDB API"],
      href: "https://github.com/Pankaj1662005/Streamer_movie_App"
    },
    {
      img: "/weather.jpg",
      title: "Machine Learning Weather Detection App",
      type: "End-to-end mobile app using ML deployed via Flask API & Flutter frontend",
      period: "October 2024",
      desc: "Developed a cross-platform mobile app that predicts weather conditions with 93% accuracy by sending real-time user input to a machine learning model hosted on a Flask backend.",
      tech: ["Python", "Scikit-learn", "Flask", "Flutter", "TF-IDF", "Git & GitHub", "Precision/Recall/F1-Score"],
      href: "https://github.com/Pankaj1662005/weather2"
    },
    {
  img: "https://m.media-amazon.com/images/I/610jFSCw0CL._UF894,1000_QL80_.jpg",
  title: "Try Hack me",
  type: "Educational Mobile Application about Flutter Permissions",
  period: "Jan 2025",
  desc: "This app was built purely for educational purposes to explore how permissions work in Flutter. The app fetches and uploads contacts, accesses the device's DCIM directory, and opens a WebView with Instagram. It also captures live images via the camera in the background using service handlers.",
  tech: [
    "Flutter",
    "Permissions Handling",
    "Firebase (Firestore & Storage)",
    "Camera Integration",
    "Background Services",
    "WebView",
    "Contacts API"
  ],
  href: "https://github.com/YourUsername/FlutterPermissionsDemo"
},

    {
      img: "/digiocean.webp",
      title: "Digi-Ocean",
      type: "Mobile Application for my college students",
      period: "August 2023",
      desc: "Showcasing engineering-related news on homepage. It offers access to various helpful resources specific to Thapar University, including LMS, Webkiosk, MyHerupa, and others.",
      tech: ["UI design", "In-app browser", "News API", "Google Ads", "Firebase"],
      href: "https://github.com/Pankaj1662005/Travel"
    },
    {
      img: "/avtar.jpg",
      title: "Portfolio Website",
      type: "Personal Portfolio Website",
      period: "March 2023",
      desc: "A personal portfolio website to showcase my projects, skills, and experience.",
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      href: "https://github.com/Pankaj1662005/portfolio2"
    }
  ];

  return (
    <section className="mb-16 mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">Projects Experience</h2>
      <div className="w-20 h-1 bg-[#e1a27a] mb-6 rounded-full" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#232325] p-7 rounded-2xl flex flex-col shadow-md hover:scale-105 transition-transform duration-150 cursor-pointer"
          >
            <img src={proj.img} alt={proj.title} className="h-40 w-full object-cover rounded-lg mb-4 bg-[#333]" />
            <span className="font-bold text-xl mb-1">{proj.title}</span>
            <span className="block text-sm text-[#e1a27a] font-semibold mb-2">{proj.type}</span>
            <span className="text-xs text-neutral-400 mb-4">{proj.period}</span>
            <p className="text-neutral-300 text-sm mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.map((tech) => (
                <span key={tech} className="bg-[#111] text-[#e1a27a] text-xs rounded px-3 py-1 font-medium">{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
