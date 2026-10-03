import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const SkillGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SkillGroup = styled.article`
  padding: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  background: #f7f8fa;

  h3 {
    margin: 0 0 0.7rem;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const groups = [
  ["Backend & APIs", "Java, Spring Boot, Node.js, Express.js, REST APIs, Microservices"],
  ["Frontend", "React, Next.js, TypeScript, JavaScript, HTML5, CSS3"],
  ["Data & Caching", "PostgreSQL, MongoDB, MySQL, Redis, JPA"],
  ["Cloud & Delivery", "AWS, Docker, CI/CD, Jenkins, GitHub Actions"],
  ["Distributed Systems", "Kafka, asynchronous workflows, service communication"],
  ["Quality & Tools", "Jest, React Testing Library, Postman, Jira, GitHub"],
];

export const Skills = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="skills" inlineMargin={inlineMargin}>
      <header>
        <h2 className="page-title">Technical Expertise</h2>
        <div className="hr pb0" />
      </header>
      <p>
        A production-focused full-stack toolkit spanning frontend, backend,
        data, distributed systems, cloud delivery and testing.
      </p>
      <SkillGroups>
        {groups.map(([title, description]) => (
          <SkillGroup key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </SkillGroup>
        ))}
      </SkillGroups>
    </Wrapper>
  );
};
