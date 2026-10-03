import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const Flow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin-top: 2rem;
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  background: var(--line);

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Node = styled.article`
  position: relative;
  min-height: 190px;
  padding: 1.4rem;
  background: #0B1020;
  transition: background 180ms ease;

  &:hover {
    background: #121A2E;
  }

  .step {
    color: #475569;
    font: 700 0.65rem/1 var(--font-mono);
  }

  h3 {
    margin: 2.7rem 0 0.5rem;
    font-size: 1.05rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
  }

  &::after {
    content: "→";
    position: absolute;
    right: 1rem;
    top: 50%;
    color: rgba(34,211,238,0.45);
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 850px) {
    &:nth-child(2)::after {
      display: none;
    }
  }

  @media (max-width: 520px) {
    &::after {
      content: "↓";
      top: auto;
      right: 50%;
      bottom: 0.35rem;
    }
  }
`;

const nodes = [
  ["01", "Understand", "Start with the user, the failure mode or the business constraint."],
  ["02", "Shape", "Choose boundaries, APIs and data flows before adding complexity."],
  ["03", "Ship", "Build small, test the important paths and create useful feedback loops."],
  ["04", "Observe", "Measure behaviour in production and fix the bottleneck that matters."],
];

export const Engineering = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="engineering" inlineMargin={inlineMargin}>
      <header>
        <p className="section-kicker">ENGINEERING MINDSET</p>
        <h2 className="page-title">Less ceremony. More signal.</h2>
        <p>My default loop is simple: understand → shape → ship → observe → repeat.</p>
      </header>
      <Flow>
        {nodes.map(([step, title, description]) => (
          <Node key={step}>
            <span className="step">{step}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </Node>
        ))}
      </Flow>
    </Wrapper>
  );
};