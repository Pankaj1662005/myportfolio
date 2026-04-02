import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import "./index.css";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pankaj-sheokand/",
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Pankaj1662005",
    icon: <Github size={18} />,
    label: "GitHub",
  },
  {
    href: "https://x.com/Shokeen__singh",
    icon: <Twitter size={18} />,
    label: "Twitter",
  },
];

const navLinks = [
  { name: "About", to: "/" },
  { name: "Resume", to: "/resume" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" },
];

function Layout() {
  const profileImages = ["/3d.gif"," /mypic.jpg"];
  const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

  return (
    <div className="min-h-screen w-full bg-[#1b1b1c] flex flex-col md:flex-row font-poppins text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-80 lg:w-96 md:max-w-[360px] md:min-h-screen px-6 py-8 bg-[#232325] flex flex-col items-center rounded-xl m-3 md:ml-5 shadow-xl">
        <div className="flex flex-col items-center w-full">
          <img
            src={randomImage}
            alt="Profile"
            className="rounded-2xl h-36 w-36 my-2 object-cover border-2 border-[#e1a27a] shadow-md bg-[#29292b]"
          />
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">Pankaj Sheokand</h1>
          <span className="bg-[#2a2a2d] my-2 px-4 py-1 text-sm rounded-lg inline-block">Engineering Student</span>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
  {["Tiet-26", "Computer Science", "Data Science Specialization"].map((tag) => (
    <span
      key={tag}
      className="bg-[#2e2e30] text-[#e1a27a] text-xs font-semibold tracking-wide px-4 py-1 rounded-full border border-[#3c3c3f] shadow-sm"
    >
      {tag}
    </span>
  ))}
</div>

        </div>
        <div className="flex flex-col w-full mt-8 gap-3">
          <div className="flex items-center gap-4 bg-[#232325] p-2 rounded-md">
            <Mail size={18} className="text-[#e1a27a]" />
            <a href="mailto:pankajsheof2ys@gmail.com" className="truncate text-sm">pankajsheof2ys@gmail.com</a>
          </div>
          <div className="flex items-center gap-4 bg-[#232325] p-2 rounded-md">
            <MapPin size={18} className="text-[#e1a27a]" />
            <span className="truncate text-sm">Jind (126102), Haryana, India</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-8">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e1a27a]"
            >
              {icon}
            </a>
          ))}
        </div>
      </aside>
      {/* Main content area */}
      <main className="flex-grow flex flex-col p-4 md:p-10 lg:px-16 xl:px-32 mx-auto bg-[#1b1b1c] text-white min-w-0">
        {/* Nav Bar */}
        <nav className="flex flex-wrap gap-1 md:gap-6 justify-start mb-10">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="px-4 py-2 rounded-xl text-base font-medium hover:text-[#e1a27a] focus:text-[#e1a27a] transition-colors duration-150"
            >
              {name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </main>
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