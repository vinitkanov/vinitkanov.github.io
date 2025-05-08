import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [, setSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 500) setSection("home");
      else if (scrollY < 1100) setSection("about");
      else setSection("projects");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Project name",
      date: "January 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi.",
    },
    {
      title: "Some Case Study",
      date: "January 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi.",
    },
  ];

  return (
    <main className="font-baloo bg-[#1D0F2F] text-[#F1D7F5]">
      <nav className="flex justify-between p-6 text-sm">
        <div className="font-bold cursor-pointer" onClick={() => location.reload()}>
          <img src="/full.svg" />
        </div>
        <div className="flex gap-6 text-purple-400">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("projects")}>Project</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-10 py-20">
        <h2 className="text-sm font-semibold mb-2">Hello, I'm Muhammad Khalid,</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold">Front End Developer</h1>
        <div className="mt-4 text-3xl text-right">/////</div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20">
        <h2 className="text-5xl font-extrabold mb-6">about me &gt;&lt;</h2>
        <p className="font-semibold leading-relaxed">
          I’m a junior developer with hands-on experience in full-stack web development. My primary focus has
          been on building and maintaining websites using technologies such as HTML, CSS, JavaScript, Tailwind CSS,
          and React on the frontend, complemented by Python and MySQL on the backend.
        </p>
        <br />
        <p className="font-semibold leading-relaxed">
          Much of my time is spent debugging, compiling, and refining code—ensuring both functionality and
          performance. I’m deeply committed to improving my development workflow and continuously expanding my skill
          set. Currently, I’m diving into C++ to strengthen my understanding of low-level programming and broaden my
          software development capabilities.
        </p>
        <div className="mt-6">
          <li className="font-bold">2024 - Present</li>
          <p className="mt-2 font-semibold">
            I am a high school student who began learning programming in 2024 and have been actively continuing my
            journey ever since. I am dedicated to developing my skills and building a strong foundation in software
            development.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-5xl font-extrabold mb-6">projects.</h2>
        <p className="font-semibold mb-10">
          The following projects reflect the skills I’ve developed and the hands-on experience I’ve gained while
          studying and exploring the field of software development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-purple-500/60 p-4 rounded-xl">
              <div className="bg-purple-300 h-40 mb-4 rounded-md"></div>
              <p className="text-xs font-bold">{project.date}</p>
              <h3 className="font-bold mt-1 mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-16 text-center">
        <div className="text-3xl font-bold mb-4">
          <img src="/mini.svg" />
        </div>
        <div className="flex justify-center gap-6 text-sm mb-4">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex justify-center gap-6 text-xl mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p className="text-xs text-purple-200">
          © 2025 MuhammadKhalid All Rights Reserved , Inc.
        </p>
      </footer>
    </main>
  );
}
