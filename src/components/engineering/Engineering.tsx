import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const EngineeringGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const EngineeringCard = styled.article`
  padding: 1.1rem;
  border-left: 4px solid #00a6eb;
  background: #f7f8fa;

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.05rem;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }
`;

const topics = [
  ["API Design", "REST APIs, integrations, validation, authentication and clean service boundaries."],
  ["Microservices", "Service decomposition, synchronous APIs and practical distributed-system design."],
  ["Event-Driven Systems", "Asynchronous workflows and service communication with Kafka."],
  ["Caching", "Redis-backed caching strategies for responsive, data-heavy applications."],
  ["Performance", "Finding bottlenecks across application code, APIs, databases and infrastructure."],
  ["Observability", "Monitoring and troubleshooting production applications with useful operational signals."],
  ["Testing", "Automated testing and maintainable delivery practices with strong coverage targets."],
  ["System Design", "Designing reliable application flows with scalability, maintainability and failure modes in mind."],
];

export const Engineering = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="engineering" inlineMargin={inlineMargin}>
      <header>
        <h2 className="page-title">How I Engineer Systems</h2>
        <div className="hr pb0" />
      </header>
      <p>
        I focus on the engineering behind the feature: clear APIs, reliable
        workflows, sensible data access, performance, testing and production
        troubleshooting.
      </p>
      <EngineeringGrid>
        {topics.map(([title, description]) => (
          <EngineeringCard key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </EngineeringCard>
        ))}
      </EngineeringGrid>
    </Wrapper>
  );
};
