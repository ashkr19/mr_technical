import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 1.5rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  padding: 1.4rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  background: #f7f8fa;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);

  h3 {
    margin: 0 0 0.6rem;
    font-size: 1.25rem;
  }

  p {
    margin: 0 0 1rem;
    line-height: 1.6;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const Tag = styled.span`
  padding: 0.3rem 0.55rem;
  border-radius: 999px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.82rem;
`;

const projects = [
  {
    title: "Insurance Management Portal",
    description:
      "A business application for claims workflows, portal user management, policies and an administrative dashboard.",
    tags: ["React", "Next.js", "Node.js", "Spring Boot", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Reward Management Platform",
    description:
      "Customer and reward microservices with asynchronous communication, caching and persistent data workflows.",
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "AWS"],
  },
  {
    title: "Automotive Ecommerce Platform",
    description:
      "A full-stack ecommerce system covering product experiences, order workflows, API orchestration and operational monitoring.",
    tags: ["React", "Next.js", "Node.js", "Spring Boot", "PostgreSQL", "Redis"],
  },
  {
    title: "Online Classroom",
    description:
      "A data-driven learning application with dashboards, forms, search and authenticated user experiences.",
    tags: ["React", "Next.js", "JavaScript", "API Integration"],
  },
];

export const Projects = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="projects" inlineMargin={inlineMargin}>
      <header>
        <h2 className="page-title">Selected Work</h2>
        <div className="hr pb0" />
      </header>
      <p>
        Examples of the kinds of production systems and product experiences I
        have worked on across Insurance, E-commerce and EdTech.
      </p>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Wrapper>
  );
};
