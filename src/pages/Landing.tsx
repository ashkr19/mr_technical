import React, { useEffect, useState } from "react";
import "../App.css";
import ashImage from "../assets/images/ash.jpeg";
import botsImage from "../assets/images/bots.png";
import crmImage from "../assets/images/crm.png";
import innoImage from "../assets/images/inno.png";

type Entry = { title: string; description: string; image?: string; note?: string };

const posts: Entry[] = [
  { title: "Java Performance Tuning", description: "A practical engineering notebook on diagnosing CPU, memory, GC, I/O and application bottlenecks in production Java systems.", image: botsImage, note: "Coming next" },
  { title: "Designing Reliable Spring Boot APIs", description: "Idempotency, rate limiting, observability and failure handling for APIs that need to behave predictably under pressure.", image: crmImage, note: "Coming next" },
  { title: "React Performance in Real Applications", description: "Notes on rendering, data fetching, debouncing, virtualization and keeping complex interfaces responsive.", image: innoImage, note: "Coming next" }
];

const projects: Entry[] = [
  { title: "Insurance Management Platform", description: "A full-stack business platform for policies, claims, users and administration using React, Spring Boot and PostgreSQL." },
  { title: "Reward Management Platform", description: "Distributed services connected through asynchronous workflows, caching and cloud infrastructure using Java, Kafka, Redis and AWS." },
  { title: "Automotive Ecommerce Platform", description: "Product, order and API workflows across React, Node.js, Spring Boot and relational data services." }
];

const talks: Entry[] = [
  { title: "From Request to Response in Spring Boot", description: "Filters, interceptors, handler mappings, controllers and the servlet request lifecycle." },
  { title: "Troubleshooting Java Production Performance", description: "A practical path from symptoms to evidence: CPU, memory, threads, GC, I/O, logs and application behaviour." },
  { title: "Microservices, Messaging and Distributed Systems", description: "How service boundaries, queues, caching and failure modes shape real production architecture." }
];

const postmortems: Entry[] = [
  { title: "When an Application Becomes Slow", description: "Separating CPU, memory, thread, database, network and downstream-service bottlenecks.", note: "Planned" },
  { title: "The Blank Screen Problem", description: "Tracing a frontend failure from routing and rendering through build-time errors and runtime exceptions.", note: "Planned" },
  { title: "Production API Failure Analysis", description: "Turning an incident into durable engineering lessons through evidence, root cause and corrective action.", note: "Planned" }
];

export default function Landing(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={`site ${scrolled ? "is-scrolled" : ""}`}>
      <aside className="profile-hero" aria-label="Profile navigation">
        <div className="space-glow" />
        <div className="profile-content">
          <img className="profile-photo" src={ashImage} alt="Ashish Kumar" />
          <h1>Ashish Kumar</h1>
          <div className="profile-rule" />
          <p>Senior Full Stack Developer</p>
          <a className="hire-link" href="mailto:ashish.kumar19097@gmail.com">HIRE ME!!! ↗</a>
          <nav className="hero-nav">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("posts")}>Blog</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("talks")}>Tech Talks</button>
            <button onClick={() => scrollTo("postmortems")}>Postmortems</button>
            <button onClick={() => scrollTo("about")}>About Me</button>
          </nav>
        </div>
        <div className="hero-credit">Java · Spring Boot · React · Node · Cloud · AI</div>
      </aside>

      <main className="content-shell">
        <div className="content-toolbar">
          <div className="toolbar-icons"><span>☰</span><span>◐</span><span>⌕</span></div>
          <a href="https://github.com/ashkr19" target="_blank" rel="noreferrer" aria-label="GitHub">◉</a>
        </div>

        <section id="home" className="content-section intro-section">
          <h2>Hi there!</h2>
          <p className="welcome"><strong>Welcome!</strong> My name is <strong>Ashish Kumar</strong>, I’m a software engineer and this site is my <strong>open book</strong> where I express myself and share my ideas, experience and knowledge. I build scalable systems, solve production problems and explore practical AI-driven software.</p>
          <blockquote>“Good engineering is not about adding complexity. It is about making the right problem simpler.”</blockquote>
        </section>

        <ContentSection id="posts" title="Featured Posts" items={posts} link="See Blog for more" cards />
        <ContentSection id="projects" title="Featured Projects" items={projects} link="See Projects for more" />
        <ContentSection id="talks" title="Featured Tech Talks" items={talks} link="See Tech Talks for more" />
        <ContentSection id="postmortems" title="Featured Postmortems" items={postmortems} link="See Postmortems for more" />

        <section id="about" className="content-section about-section">
          <h2>Who am I?</h2>
          <div className="about-grid">
            <img src={ashImage} alt="Ashish Kumar" />
            <div>
              <p>I’m a senior full-stack developer with experience across EdTech, Insurance, E-commerce and Supply Chain.</p>
              <p>I enjoy working close to the problem: understanding constraints, designing systems, building the product, debugging failures and improving performance.</p>
              <p>My interests include <strong>system design, distributed systems, performance engineering, cloud architecture and AI-assisted software development.</strong></p>
            </div>
          </div>
        </section>

        <footer>
          <strong>Ashish Kumar</strong>
          <span>Nerdy Tech · Full Stack · Systems · AI</span>
          <div><a href="mailto:ashish.kumar19097@gmail.com">Email</a><a href="https://github.com/ashkr19" target="_blank" rel="noreferrer">GitHub</a><a href="/mr_technical/new.pdf">Resume</a></div>
        </footer>
      </main>
    </div>
  );
}

function ContentSection({ id, title, items, link, cards = false }: { id: string; title: string; items: Entry[]; link: string; cards?: boolean }) {
  return (
    <section id={id} className="content-section">
      <h2>{title}</h2>
      <div className={cards ? "entries entries--cards" : "entries"}>
        {items.map((item) => (
          <article className="entry" key={item.title}>
            {cards && item.image && <img src={item.image} alt="" />}
            <div className="entry-body">
              <h3>{item.title} {item.note && <small>{item.note}</small>}</h3>
              <p>{item.description}</p>
              <a href="#about">Continue reading {item.title} →</a>
            </div>
          </article>
        ))}
      </div>
      <a className="more-link" href={`#${id}`}>{link}</a>
    </section>
  );
}
