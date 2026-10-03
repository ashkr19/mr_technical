import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import { FaArrowUpRightFromSquare, FaBrain, FaGaugeHigh, FaLayerGroup, FaLaptopCode, FaServer } from "react-icons/fa6";

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 2rem;
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  background: var(--line);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  position: relative;
  min-height: 210px;
  padding: 1.5rem;
  background: #0B1020;
  transition: transform 220ms ease, background 220ms ease;

  &:hover {
    background: #11182A;
    transform: translateY(-5px);
    z-index: 2;
  }

  .icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    margin-bottom: 2.5rem;
    border: 1px solid rgba(139,92,246,0.35);
    border-radius: 12px;
    color: var(--cyan);
    background: rgba(139,92,246,0.08);
  }

  .number {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: #334155;
    font: 700 0.7rem/1 var(--font-mono);
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .arrow {
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    color: #475569;
    transition: transform 180ms ease, color 180ms ease;
  }

  &:hover .arrow {
    color: var(--lime);
    transform: translate(3px, -3px);
  }
`;

const services = [
  ["Custom software", "Interfaces, dashboards and workflows that make a real process easier.", FaLaptopCode],
  ["AI experiences", "Practical AI-assisted features that fit into an actual product workflow.", FaBrain],
  ["Backend systems", "APIs, integrations and business logic built for change.", FaServer],
  ["Distributed systems", "Services, events and caching when one process becomes many.", FaLayerGroup],
  ["Performance", "Trace the slow part. Understand the bottleneck. Fix the right layer.", FaGaugeHigh],
  ["Technical direction", "Architecture choices, modernization plans and hands-on problem solving.", FaArrowUpRightFromSquare],
];

export const Services = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="services" inlineMargin={inlineMargin}>
      <header>
        <p className="section-kicker">WHERE I HELP</p>
        <h2 className="page-title">From “we need this” to “it works.”</h2>
        <p>Bring me the product idea, workflow or stubborn technical problem.</p>
      </header>
      <ServicesGrid>
        {services.map(([title, description, Icon], index) => (
          <ServiceCard key={title as string}>
            <span className="number">0{index + 1}</span>
            <div className="icon"><Icon /></div>
            <h3>{title as string}</h3>
            <p>{description as string}</p>
            <FaArrowUpRightFromSquare className="arrow" size={13} />
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Wrapper>
  );
};