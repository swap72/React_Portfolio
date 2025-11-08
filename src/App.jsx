import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      const hours = String(istTime.getHours()).padStart(2, "0");
      const minutes = String(istTime.getMinutes()).padStart(2, "0");
      const seconds = String(istTime.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "FF Scan (Open Source Project with over 2k+ downloads)",
      description:
        "Fast Rust CLI for directory scanning, process monitoring & system info. Scan folders in parallel with filters & multiple output formats, list processes sorted by memory, kill by PID, and view detailed system specs. Built with rayon, sysinfo, walkdir, clap. 🦀🚀",
      tags: ["Process Scan", "Folder Scan", "CLI Tool", "Rust"],
      link: "https://crates.io/crates/ffscan",
    },
    {
      title: "Crypt Web",
      description:
        "This is a Java-based Spring Boot web application that allows users to convert text to Morse code, and vice-versa. It also supports text encryption and decryption using AES 256-bit encryption.",
      tags: ["Morse-Code", "Encryption", "Decryption"],
      link: "https://github.com/swap72/crypt_web",
    },
    {
      title: "🧠 Curated Coding Path 💻👨🏻‍💻🚀",
      description:
        "This project is a curated learning path designed specifically for CS freshmen. Created this as a small initiative to help new CS students make the most of their time and learning efforts. Recognizing that Computer Science is a highly competitive field, the learning path encourages students to be decisive and start building their coding skills early. The goal is to provide a clear, beginner-friendly roadmap to set a strong foundation for their academic and professional journey.",
      tags: ["Data Structures", "Algorithms", "Competitive programming"],
      link: "https://swap72.github.io/72Laboratories",
    },
  ];

  const skills = [
    {
      name: "Java",
      logo: "/icons/Java.svg",
    },
    {
      name: "Spring Boot",
      logo: "/icons/sb.svg",
    },
    { name: "Go", logo: "/icons/Go.svg" },
    {
      name: "Azure",
      logo: "/icons/Azure.svg",
    },
    {
      name: "C#",
      logo: "/icons/CS.svg",
    },
    {
      name: "Node.js",
      logo: "/icons/njs.svg",
    },
    {
      name: "React",
      logo: "/icons/react.svg",
    },
    {
      name: "C",
      logo: "/icons/C.svg",
    },
    {
      name: "Rust",
      logo: "/icons/rust.svg",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white overflow-x-hidden relative">
      {/* Optimized PCB Background */}
      <div className="fixed inset-0 pointer-events-none bg-[url('/imgs/pcb.svg')] bg-repeat opacity-20"></div>

      {/* Optional soft glow overlay (for subtle animation) */}
      <div className="fixed inset-0 bg-green-500/5 mix-blend-overlay animate-pulse pointer-events-none"></div>

      {/* Glow pulse overlay */}
      <div
        className="fixed inset-0 pointer-events-none mix-blend-screen opacity-10 animate-glowPulse"
        style={{
          backgroundImage: `
      radial-gradient(circle at 50px 50px, rgba(250,204,21,0.15) 0%, rgba(0,0,0,0) 20px),
      radial-gradient(circle at 150px 50px, rgba(74,222,128,0.12) 0%, rgba(0,0,0,0) 20px),
      radial-gradient(circle at 50px 150px, rgba(250,204,21,0.15) 0%, rgba(0,0,0,0) 20px),
      radial-gradient(circle at 150px 150px, rgba(74,222,128,0.12) 0%, rgba(0,0,0,0) 20px),
      radial-gradient(circle at 100px 100px, rgba(74,222,128,0.15) 0%, rgba(0,0,0,0) 30px)
    `,
          backgroundSize: "200px 200px",
        }}
      ></div>

      <style>{`
  @keyframes neon-glow {
    0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 4px #fbbf24) drop-shadow(0 0 8px #fbbf24); }
    50% { opacity: 1; filter: drop-shadow(0 0 12px #fbbf24) drop-shadow(0 0 20px #fbbf24); }
  }
  @keyframes neon-glow-green {
    0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 4px #4ade80) drop-shadow(0 0 8px #4ade80); }
    50% { opacity: 1; filter: drop-shadow(0 0 12px #4ade80) drop-shadow(0 0 20px #4ade80); }
  }
  .pcb-glow { animation: neon-glow 1.5s ease-in-out infinite; }
  .pcb-glow-green { animation: neon-glow-green 1.5s ease-in-out infinite; }

  /* new: soft pulsing for all pads */
  @keyframes glowPulse {
    0%, 100% { opacity: 0.15; }
    50%      { opacity: 0.4; }
  }
  .animate-glowPulse {
    animation: glowPulse 1.2s ease-in-out infinite;
  }
`}</style>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-slate-900/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item
                        ? "text-green-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize hover:bg-green-900/50 rounded"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="inline-flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
              {/* === Avatar Circle with Fast Glow === */}
              <span className="relative inline-block">
                <img
                  src="https://avatars.githubusercontent.com/u/63197684?s=400&u=bff58aa94aa4e8cddf4d8f548b600ec3e463a20a&v=4"
                  alt="Swapnil Mishra"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-green-400 glow-fast"
                />
                {/* Outer ring pulse */}
                <span className="absolute inset-0 rounded-full ring-2 ring-green-400/40 blur-[2px] glow-fast"></span>
              </span>

              {/* === Name with Gradient === */}
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                Swapnil Mishra
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>

          {/* Strong Neon Line */}
          <p
            className="text-2xl md:text-3xl font-bold text-green-400 mb-8"
            style={{
              textShadow:
                "0 0 8px rgba(74,222,128,0.8), 0 0 16px rgba(74,222,128,0.6), 0 0 24px rgba(250,204,21,0.3)",
            }}
          >
            <strong>Develop • Deploy • Repeat 👨🏻‍💻</strong>
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => window.open("https://github.com/swap72", "_blank")}
              className="bg-gradient-to-r from-green-500 to-yellow-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-400/10 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* === Fast Neon Glow Animation === */}
        <style>{`
    @keyframes fast-glow {
      0%, 100% {
        box-shadow: 0 0 2px rgba(74, 222, 128, 0.6),
                    0 0 3px rgba(74, 222, 128, 0.4),
                    0 0 5px rgba(250, 204, 21, 0.3);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 0 3px rgba(74, 222, 128, 1),
                    0 0 6px rgba(74, 222, 128, 0.9),
                    0 0 8px rgba(250, 204, 21, 0.6);
        transform: scale(1.03);
      }
    }

    .glow-fast {
      animation: fast-glow 1s ease-in-out infinite;
    }
  `}</style>
      </section>

{/* About Section */}
<section
  id="about"
  className="min-h-screen flex items-center justify-center px-4 py-20"
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
      About Me
    </h2>
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
      <p className="text-2xl text-gray-300 leading-relaxed mb-6">
        Backend developer with a touch of front-end and GenAI experience.
        Focused on building reliable, efficient systems.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed mb-4">
        When I'm not coding, I like to explore new technologies and contribute to open
        source projects.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed">
        I am currently exploring Systems Programming, Low-Level projects and Zig language{' '}
        <img src="/icons/zig.svg" alt="Zig" width="40" height="40" className="inline-block align-middle" />
      </p>
    </div>
  </div>
</section>
      

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-xl p-6 
                           hover:bg-white/10 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="relative w-20 h-20 rounded-full bg-slate-800/70 flex items-center justify-center 
                                  mb-4 p-4 shadow-inner border border-green-400/40 group overflow-hidden"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain grayscale brightness-200 opacity-80 
                                 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(74,222,128,0.6))",
                      }}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center text-gray-200 group-hover:text-green-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-yellow-500/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-green-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="bg-green-500/20 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    className="inline-flex items-center text-green-400 hover:text-green-300"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section
        id="more-projects"
        className="flex items-center justify-center py-20 px-4"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
            Explore More Work
          </h2>
          <button
            onClick={() => window.open("https://github.com/swap72", "_blank")}
            className="bg-gradient-to-r from-green-500 to-yellow-500 px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(74,222,128,0.4)]"
          >
            Other Projects
          </button>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-2xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/swap72"
              className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/swapnil72/"
              className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:swapnilmishra0923@gmail.com"
              className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}<footer className="border-t border-white/10 py-8 relative">
  <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
    <p>&copy; 2025 Swapnil Mishra. All rights reserved.</p>
  </div>
  
  {/* Old Portfolio Link - Left Corner */}
  <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg border border-blue-400/30 backdrop-blur-sm">
    <a 
      href="https://swap72.github.io/portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center gap-2"
    >
      <span>📁</span>
      <span>Old Portfolio</span>
    </a>
  </div>

  {/* Clock - Right Corner */}
  <div className="absolute bottom-4 right-4 bg-black/70 px-6 py-3 rounded-lg border-2 border-green-400/50 backdrop-blur-sm">
    <div
      className="text-green-400 text-2xl tracking-wider"
      style={{
        fontFamily: '"OCR A Std", monospace',
        letterSpacing: "0.3em",
      }}
    >
      {time}
    </div>
    <div
      className="text-yellow-400 text-xs text-center mt-1 tracking-widest"
      style={{ fontFamily: '"OCR A Std", monospace' }}
    >
      IST
    </div>
  </div>
</footer>
    </div>
  );
}
