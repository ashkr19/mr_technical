import styled from "styled-components";
import { useScreen } from "../../context/context";

type IntroContainerProps = {
  inlineMargin: string;
};

const IntroContainer = styled.section<IntroContainerProps>`
  margin-top: 20px;
  padding: 2rem 1.5rem;
  margin-inline: ${(props) => props.inlineMargin};
  font-family: "Noto Sans, Helvetica, Arial, sans-serif";
  line-height: 1.6;
  color: rgb(51, 51, 51);

  .eyebrow {
    margin: 0 0 0.7rem;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.12rem;
    color: #00a6eb;
  }

  h1 {
    max-width: 900px;
    margin: 0;
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .subtitle {
    max-width: 820px;
    margin: 1.3rem 0 0;
    font-size: clamp(1.05rem, 2vw, 1.3rem);
    color: #555;
  }

  .tech-line {
    max-width: 900px;
    margin: 1.2rem 0 0;
    font-weight: 700;
    line-height: 1.8;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.5rem;
  }

  .actions a {
    display: inline-block;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid #111;
    text-decoration: none;
    font-weight: 700;
  }

  .actions a.primary {
    background: #111;
    color: white;
  }

  .actions a.secondary {
    background: white;
    color: #111;
  }

  .proof {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.2rem;
    margin-top: 1.5rem;
    color: #666;
    font-size: 0.95rem;
  }
`;

const Introduction = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <IntroContainer id="home" inlineMargin={inlineMargin} className="page-content">
      <p className="eyebrow">SENIOR SOFTWARE ENGINEER · FULL STACK · FREELANCE</p>
      <h1>I build production-ready software and AI-powered solutions.</h1>
      <p className="subtitle">
        I’m Ashish Kumar, a software engineer based in Bengaluru, India, with
        5+ years of engineering experience building applications across
        Insurance, E-commerce and EdTech.
      </p>
      <p className="tech-line">
        Java · Spring Boot · React · Next.js · Node.js · Microservices · AWS ·
        Kafka · Redis
      </p>
      <div className="actions">
        <a className="primary" href="#contact">Start a Project</a>
        <a className="secondary" href="#projects">View My Work</a>
      </div>
      <div className="proof" aria-label="Professional highlights">
        <span>5+ years engineering experience</span>
        <span>Full-stack delivery</span>
        <span>Production debugging & performance</span>
        <span>Freelance software development</span>
      </div>
    </IntroContainer>
  );
};

export default Introduction;
