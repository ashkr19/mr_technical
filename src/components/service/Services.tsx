import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  padding: 1.25rem;
  min-height: 150px;
  border-radius: 12px;
  background: #f7f8fa;
  border: 1px solid rgba(0, 0, 0, 0.08);

  h3 {
    margin: 0 0 0.6rem;
    font-size: 1.15rem;
  }

  p {
    margin: 0;
    line-height: 1.55;
  }
`;

const services = [
  ["Custom Web Applications", "Build responsive, maintainable applications with React, Next.js and production-ready backend APIs."],
  ["AI-Powered Applications", "Add AI-assisted workflows to software products where they create a practical user or business benefit."],
  ["Backend & APIs", "Design and implement Java/Spring Boot or Node.js APIs, integrations and business workflows."],
  ["Microservices & Distributed Systems", "Build service-oriented workflows using clear boundaries, Kafka messaging, caching and reliable data access."],
  ["Performance & Reliability", "Investigate slow APIs, application bottlenecks and production issues and turn findings into engineering improvements."],
  ["Technical Consulting", "Help turn a software idea, technical problem or modernization requirement into an actionable engineering plan."],
];

export const Services = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="services" inlineMargin={inlineMargin}>
      <header>
        <h2 className="page-title">What I Build</h2>
        <div className="hr pb0" />
      </header>
      <ServicesGrid>
        {services.map(([title, description]) => (
          <ServiceCard key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Wrapper>
  );
};
