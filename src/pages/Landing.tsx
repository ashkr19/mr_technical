import React from "react";
import "../App.css";
import ashImage from "../assets/images/ash.jpeg";

type Entry = {
  title: string;
  description: string;
  href?: string;
  note?: string;
};

const posts: Entry[] = [
  { title: "Java Performance Tuning", description: "A practical engineering notebook on diagnosing CPU, memory, GC, I/O and application bottlenecks in production Java systems.", note: "Coming next" },
  { title: "Designing Reliable Spring Boot APIs", description: "Idempotency, rate limiting, observability and failure handling for APIs that need to behave predictably under pressure.", note: "Coming next" },
  { title: "React Performance in Real Applications", description: "Notes on rendering, data fetching, debouncing, virtualization and keeping complex interfaces responsive.", note: "Coming next" }
];

const projects: Entry[] = [
  { title: "Insurance Management Platform", description: "A full-stack business platform for policies, claims, users and administration using React, Spring Boot and PostgreSQL." },
  { title: "Event-Driven Reward Platform", description: "Distributed services connected through asynchronous workflows, caching and cloud infrastructure using Java, Kafka, Redis and AWS." },
  { title: "E-commerce Systems", description: "Product, order and API workflows across React, Node.js, Spring Boot and relational data services." }
];

const talks: Entry[] = [
  { title: "From Request to Response in Spring Boot", description: "Understanding filters, interceptors, handler mappings, controllers and the servlet request lifecycle." },
  { title: "Troubleshooting Java Production Performance", description: "A practical path from symptoms to evidence: CPU, memory, threads, GC, I/O, logs and application behaviour." },
  { title: "Microservices, Messaging and Distributed Systems", description: "How service boundaries, queues, caching and failure modes shape real production architecture." }
];

const postmortems: Entry[] = [
  { title: "When an Application Becomes Slow", description: "A structured investigation flow for separating CPU, memory, thread, database, network and downstream-service bottlenecks.", note: "Planned" },
  { title: "The Blank Screen Problem", description: "Tracing a frontend failure from routing and rendering through build-time errors and runtime exceptions.", note: "Planned" },
  { title: "Production API Failure Analysis", description: "Turning an incident into durable engineering lessons through evidence, root cause and corrective action.", note: "Planned" }
];

export default function Landing(): React.ReactElement {
  return (
    <div className="page">
      <header className="topbar">
        <a className="site-name" href="#top">Ashish Kumar</a>
        <nav aria-label="Primary navigation">
          <a href="#posts">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#talks">Tech Talks</a>
          <a href="#postmortems">Postmortems</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro">
          <h1>Hi there!</h1>
          <p className="intro__lead">
            Welcome! My name is <strong>Ashish Kumar</strong>, I’m a software engineer and this site is my open book
            where I share what I build, what I learn and how I solve difficult engineering problems.
          </p>
          <p>
            My work spans Java, Spring Boot, React, Node.js, cloud systems, databases, messaging, distributed systems
            and practical AI-driven applications. I enjoy turning complex requirements into reliable software.
          </p>
          <blockquote>“Good engineering is not about adding complexity. It is about making the right problem simpler.”</blockquote>
        </section>

        <ContentSection id="posts" title="Featured Posts" items={posts} linkText="See Blog for more" />
        <ContentSection id="projects" title="Featured Projects" items={projects} linkText="See Projects for more" />
        <ContentSection id="talks" title="Featured Tech Talks" items={talks} linkText="See Tech Talks for more" />
        <ContentSection id="postmortems" title="Featured Postmortems" items={postmortems} linkText="See Postmortems for more" />

        <section id="about" className="about">
          <h2>Who am I?</h2>
          <div className="about__content">
            <img src={ashImage} alt="Ashish Kumar" />
            <div>
              <p>
                I’m a senior full-stack developer with experience across EdTech, Insurance, E-commerce and Supply Chain.
                I like working close to the problem: understanding constraints, designing systems, building the product,
                debugging failures and improving performance.
              </p>
              <p>
                I’m particularly interested in <strong>system design, distributed systems, performance engineering,
                cloud architecture and AI-assisted software development</strong>.
              </p>
              <p>
                This website will evolve as I publish technical posts, project stories, talks and production lessons.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>Ashish Kumar</strong>
        <span>Software Engineer · Full Stack · Systems · AI</span>
        <div className="social">
          <a href="mailto:ashish.kumar19097@gmail.com">Email</a>
          <a href="https://github.com/ashkr19" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/mr_technical/new.pdf">Resume</a>
        </div>
      </footer>
    </div>
  );
}

function ContentSection({ id, title, items, linkText }: { id: string; title: string; items: Entry[]; linkText: string }) {
  return (
    <section id={id} className="content-section">
      <h2>{title}</h2>
      <div className="entries">
        {items.map((item) => (
          <article className="entry" key={item.title}>
            <h3>{item.title}</h3>
            {item.note && <span className="entry__note">{item.note}</span>}
            <p>{item.description}</p>
            <a href={item.href || "#about"}>{item.href ? "Continue reading" : "Continue reading"} →</a>
          </article>
        ))}
      </div>
      <a className="section-link" href={id === "posts" ? "#posts" : `#${id}`}>{linkText}</a>
    </section>
  );
}
