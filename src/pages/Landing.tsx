import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaCode, FaPenNib, FaBug, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";
import ashImage from "../assets/images/ash.jpeg";

const projects = [
  { title: "Scalable Web Applications", text: "Production-focused web platforms built with Java, Spring Boot, React, Node.js and cloud-native services.", tech: "Java · Spring Boot · React · AWS" },
  { title: "Distributed Systems", text: "Backend systems designed around microservices, APIs, messaging, caching and resilient service boundaries.", tech: "Microservices · Kafka · Redis · PostgreSQL" },
  { title: "AI-Driven Solutions", text: "Practical AI integrations that turn business workflows, data and automation opportunities into usable products.", tech: "AI · APIs · Automation · Full Stack" },
];

const futurePosts = [
  { title: "Blog", label: "Coming soon", text: "Engineering notes on Java, Spring Boot, React, system design, performance and AI application development." },
  { title: "Postmortems", label: "Coming soon", text: "Real troubleshooting stories: what failed, how it was diagnosed, and what changed in production." },
  { title: "Tech Talks", label: "Coming soon", text: "Short technical explainers and practical architecture lessons from building software systems." },
];

const navItems = [
  ["home", "Hi there!"],
  ["projects", "Projects"],
  ["writing", "Writing"],
  ["postmortems", "Postmortems"],
  ["about", "Who am I?"],
];

export default function Landing(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <aside className={`sidebar ${menuOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__inner">
          <button className="sidebar__close" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><FaTimes /></button>
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            <span className="brand__mark">AK</span>
            <span><strong>Ashish Kumar</strong><small>Software Engineer</small></span>
          </button>
          <nav className="nav" aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <button key={id} className="nav__item" onClick={() => go(id)}>{label}</button>
            ))}
          </nav>
          <div className="sidebar__bottom">
            <p>Building software, solving problems, sharing what I learn.</p>
            <div className="socials">
              <a href="https://github.com/ashkr19" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ashish-kumar" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="mailto:ashish.kumar19097@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </aside>

      <button className="mobile-menu" aria-label="Open navigation" onClick={() => setMenuOpen(true)}><FaBars /></button>

      <main className="content">
        <section id="home" className="hero section">
          <p className="eyebrow">FULL STACK SOFTWARE ENGINEER</p>
          <h1>Hi there!</h1>
          <p className="hero__lead">
            I’m <strong>Ashish Kumar</strong> — a software engineer focused on building scalable web applications,
            distributed systems and practical AI-driven solutions.
          </p>
          <p className="hero__copy">
            I work across Java, Spring Boot, React, Node.js, cloud infrastructure and data systems.
            I enjoy turning complex engineering problems into simple, reliable products.
          </p>
          <div className="hero__links">
            <button onClick={() => go("projects")}>Explore my work <FaArrowRight /></button>
            <a href="/mr_technical/new.pdf">Resume</a>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading icon={<FaCode />} title="Featured Projects" intro="A selection of the systems and products I enjoy building." />
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <span className="project__number">0{index + 1}</span>
                <div className="project__body">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <span className="project__tech">{project.tech}</span>
                </div>
                <FaArrowRight className="project__arrow" />
              </article>
            ))}
          </div>
        </section>

        <section id="writing" className="section">
          <SectionHeading icon={<FaPenNib />} title="Writing & Ideas" intro="The publishing area is intentionally ready for the next phase of the site." />
          <div className="future-grid">
            {futurePosts.map((item) => (
              <article className="future-card" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="postmortems" className="section">
          <SectionHeading icon={<FaBug />} title="Postmortems" intro="A dedicated place for engineering failures, investigations and lessons learned." />
          <div className="postmortem-placeholder">
            <span>Coming soon</span>
            <h3>Real problems. Real diagnosis. Real engineering lessons.</h3>
            <p>This section will later contain production troubleshooting stories, performance investigations and architecture decisions.</p>
          </div>
        </section>

        <section id="about" className="section about">
          <SectionHeading title="Who am I?" intro="Beyond the stack." />
          <div className="about__grid">
            <img src={ashImage} alt="Ashish Kumar" />
            <div>
              <p>I’m a senior full-stack developer with experience across EdTech, Insurance, E-commerce and Supply Chain systems.</p>
              <p>My interests sit at the intersection of application development and deeper engineering: system design, distributed systems, performance, debugging, observability and AI-assisted products.</p>
              <p>This website is designed as an evolving engineering notebook — projects today, and deeper technical writing and postmortems as they are published.</p>
            </div>
          </div>
        </section>

        <section className="section contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have a problem worth solving?</h2>
          <p>Whether you need a website, a backend system, a technical prototype or help untangling a difficult engineering problem, let’s talk.</p>
          <a className="contact__link" href="mailto:hello@ashishkumar.dev">Get in touch <FaArrowRight /></a>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Ashish Kumar</span>
          <span>Built with React · JavaScript · curiosity</span>
        </footer>
      </main>
    </div>
  );
}

function SectionHeading({ icon, title, intro }: { icon?: React.ReactNode; title: string; intro: string }) {
  return (
    <header className="section-heading">
      {icon && <span className="section-heading__icon">{icon}</span>}
      <h2>{title}</h2>
      <p>{intro}</p>
    </header>
  );
}
