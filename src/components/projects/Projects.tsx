import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.article<{ featured?: boolean }>`
  grid-column: span ${(p) => p.featured ? 7 : 5};
  position: relative;
  min-height: 330px;
  padding: clamp(1.4rem, 3vw, 2.2rem);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(145deg, #0F172A, #0A0F1D);
  transition: transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease;

  &:nth-child(2) { grid-column: span 5; }
  &:nth-child(3) { grid-column: span 5; }
  &:nth-child(4) { grid-column: span 7; }

  &::before {
    content: "";
    position: absolute;
    width: 240px;
    height: 240px;
    right: -100px;
    top: -100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.22), transparent 68%);
    transition: transform 350ms ease;
  }

  &:hover {
    transform: translateY(-7px);
    border-color: rgba(34,211,238,0.35);
    box-shadow: 0 28px 60px rgba(0,0,0,0.25);
  }

  &:hover::before {
    transform: scale(1.35);
  }

  .meta {
    position: relative;
    display: flex;
    justify-content: space-between;
    color: #64748B;
    font: 600 0.68rem/1 var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h3 {
    position: relative;
    max-width: 560px;
    margin: 4rem 0 0.75rem;
    font-size: clamp(1.5rem, 3vw, 2.3rem);
    line-height: 1;
    letter-spacing: -0.045em;
  }

  p {
    position: relative;
    max-width: 560px;
    margin: 0;
    color: var(--muted);
  }

  .tags {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 1.5rem;
  }

  .tag {
    padding: 0.35rem 0.55rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: #CBD5E1;
    font: 600 0.66rem/1 var(--font-mono);
  }

  .corner {
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 50%;
    color: var(--cyan);
    transition: transform 220ms ease, background 220ms ease;
  }

  &:hover .corner {
    transform: rotate(45deg);
    background: rgba(34,211,238,0.08);
  }

  @media (max-width: 850px) {
    grid-column: span 12 !important;
    min-height: 280px;
  }
`;

const projects = [
  {
    title: "Insurance Management Portal",
    label: "BUSINESS PLATFORM",
    description: "Claims, policies, users and administration brought into one product experience.",
    tags: ["React", "Next.js", "Spring Boot", "PostgreSQL", "Redis"],
  },
  {
    title: "Reward Management Platform",
    label: "EVENT-DRIVEN",
    description: "Customer and reward services connected through asynchronous workflows and caching.",
    tags: ["Java", "Kafka", "Redis", "AWS"],
  },
  {
    title: "Automotive Ecommerce Platform",
    label: "ECOMMERCE",
    description: "Product journeys, order workflows and API orchestration across the stack.",
    tags: ["React", "Node.js", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Online Classroom",
    label: "EDTECH",
    description: "Dashboards, forms, search and authenticated learning experiences.",
    tags: ["React", "Next.js", "APIs"],
  },
];

export const Projects = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="projects" inlineMargin={inlineMargin}>
      <header>
        <p className="section-kicker">SELECTED BUILDS</p>
        <h2 className="page-title">A few systems I’ve helped ship.</h2>
        <p>Hover a card. The stack is the footnote; the problem is the interesting part.</p>
      </header>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} featured={index === 0}>
            <div className="meta"><span>{project.label}</span><span>0{index + 1}</span></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="corner">↗</div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Wrapper>
  );
};