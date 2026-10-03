import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const FreelanceBox = styled.div`
  margin-top: 1.5rem;
  padding: 1.6rem;
  border-radius: 14px;
  background: #111;
  color: white;

  h3 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  p {
    line-height: 1.6;
  }

  ul {
    padding-left: 1.2rem;
    line-height: 1.8;
  }

  a {
    display: inline-block;
    margin-top: 0.7rem;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    background: #00a6eb;
    color: white;
    text-decoration: none;
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Freelance = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="freelance" inlineMargin={inlineMargin}>
      <header>
        <h2 className="page-title">Need a Technical Partner?</h2>
        <div className="hr pb0" />
      </header>
      <FreelanceBox>
        <h3>Turn an idea, workflow or technical problem into working software.</h3>
        <p>
          I work on software projects where product thinking and engineering
          need to meet: from a new application or backend API to modernization,
          integrations, performance work and AI-assisted application features.
        </p>
        <ul>
          <li>Custom web applications and dashboards</li>
          <li>Java / Spring Boot backend systems and REST APIs</li>
          <li>React / Next.js frontend applications</li>
          <li>Microservices, Kafka and Redis workflows</li>
          <li>Cloud-ready application development and integrations</li>
          <li>Production debugging and performance troubleshooting</li>
        </ul>
        <a href="#contact">Discuss Your Project</a>
      </FreelanceBox>
    </Wrapper>
  );
};
