import styled from "styled-components";
import { useState } from "react";
import { FaArrowRight, FaBolt, FaCode, FaBrain } from "react-icons/fa";
import { useScreen } from "../../context/context";

type IntroContainerProps = { inlineMargin: string };

const IntroContainer = styled.section<IntroContainerProps>`
  position: relative;
  min-height: calc(100vh - 5.5rem);
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.72fr);
  align-items: center;
  gap: clamp(3rem, 7vw, 7rem);
  padding: clamp(4rem, 8vw, 7rem) clamp(1.1rem, 5vw, 4.5rem);
  margin-inline: ${(props) => props.inlineMargin};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 520px;
    height: 520px;
    right: -220px;
    top: 10%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56,189,248,0.08), transparent 68%);
    pointer-events: none;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin: 0 0 1.4rem;
    color: var(--accent);
    font: 700 0.7rem/1 var(--font-mono);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eyebrow::before {
    content: "";
    width: 34px;
    height: 1px;
    background: var(--accent);
  }

  h1 {
    max-width: 900px;
    margin: 0;
    font-size: clamp(3.5rem, 7.4vw, 7.2rem);
    line-height: 0.9;
    letter-spacing: -0.075em;
    font-weight: 900;
  }

  h1 span {
    color: var(--accent);
  }

  .subtitle {
    max-width: 720px;
    margin: 1.8rem 0 0;
    color: var(--muted);
    font-size: clamp(1rem, 1.7vw, 1.18rem);
    line-height: 1.75;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 2rem;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 800;
    transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
  }

  .actions a:hover { transform: translateY(-2px); }

  .primary {
    background: var(--accent);
    color: #04111b;
  }

  .secondary {
    border: 1px solid var(--line);
    color: var(--text);
    background: rgba(255,255,255,0.025);
  }

  .proof {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 0.55rem 1.4rem;
    margin-top: 2rem;
    color: #64748B;
    font: 600 0.7rem/1 var(--font-mono);
  }

  .proof span::before {
    content: "•";
    margin-right: 0.45rem;
    color: var(--accent-2);
  }

  .visual {
    display: flex;
    justify-content: center;
  }

  .console {
    width: min(100%, 430px);
    border: 1px solid var(--line);
    border-radius: 18px;
    background: rgba(15,23,42,0.82);
    box-shadow: 0 30px 70px rgba(0,0,0,0.28);
    overflow: hidden;
  }

  .console-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid var(--line);
    color: #64748B;
    font: 600 0.68rem/1 var(--font-mono);
  }

  .dots { display: flex; gap: 0.35rem; }
  .dots i { width: 7px; height: 7px; border-radius: 50%; background: #475569; }

  .status { color: var(--accent-2); }

  .console-body {
    padding: 1.25rem;
    background: #090F1A;
    font-family: var(--font-mono);
  }

  .command {
    padding: 0.9rem;
    border: 1px solid var(--line);
    border-radius: 10px;
    color: var(--accent);
    background: #0B1422;
    font-size: 0.75rem;
    overflow-wrap: anywhere;
  }

  .flow {
    margin: 1.1rem 0 0;
    padding: 0;
    list-style: none;
  }

  .flow li {
    display: flex;
    gap: 0.7rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid rgba(148,163,184,0.08);
    color: #CBD5E1;
    font-size: 0.75rem;
  }

  .flow li:last-child { border-bottom: 0; }

  .flow b {
    color: #64748B;
    font-weight: 600;
  }

  .mode-switch {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.35rem;
    padding: 0.75rem;
    background: #0F172A;
  }

  .mode-switch button {
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.65rem 0.35rem;
    background: transparent;
    color: #64748B;
    cursor: pointer;
    font: 700 0.68rem/1 var(--font-mono);
    transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
  }

  .mode-switch button:hover,
  .mode-switch button.active {
    color: var(--accent);
    border-color: rgba(56,189,248,0.25);
    background: rgba(56,189,248,0.06);
  }

  .mode-copy {
    min-height: 58px;
    margin: 1rem 0 0;
    color: var(--muted);
    font-family: var(--font-sans);
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .mode-copy svg { margin-right: 0.45rem; color: var(--accent); }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 3rem;
  }

  @media (max-width: 600px) {
    h1 { font-size: clamp(3.2rem, 16vw, 5rem); }
    .proof { grid-template-columns: 1fr; }
  }
`;

const modes = {
  build: {
    label: "BUILD",
    icon: FaCode,
    copy: "Product UI, APIs and workflows designed to ship cleanly and evolve.",
    command: "ship --from-idea --to-production",
  },
  systems: {
    label: "SYSTEMS",
    icon: FaBolt,
    copy: "Microservices, events, caching and observability for systems that have to keep moving.",
    command: "design --reliable --observable",
  },
  ai: {
    label: "AI",
    icon: FaBrain,
    copy: "Practical AI-assisted product experiences where the technology solves a real workflow.",
    command: "prototype --ai --useful",
  },
};

const Introduction = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";
  const [mode, setMode] = useState<keyof typeof modes>("build");
  const selected = modes[mode];
  const ModeIcon = selected.icon;

  return (
    <IntroContainer id="home" inlineMargin={inlineMargin}>
      <div>
        <p className="eyebrow">SOFTWARE ENGINEER · BUILDER · FREELANCE</p>
        <h1>Make it <span>work.</span><br />Make it last.</h1>
        <p className="subtitle">
          I turn product ideas and difficult technical problems into useful,
          production-ready software — from interfaces and APIs to distributed workflows.
        </p>
        <div className="actions">
          <a className="primary" href="#contact">Start a conversation <FaArrowRight size={13} /></a>
          <a className="secondary" href="#projects">Explore the work</a>
        </div>
        <div className="proof">
          <span>5+ years engineering</span>
          <span>Java + Spring</span>
          <span>React + Next.js</span>
          <span>Cloud + distributed systems</span>
        </div>
      </div>

      <div className="visual">
        <div className="console" aria-label="Interactive engineering console">
          <div className="console-top">
            <div className="dots"><i /><i /><i /></div>
            <span className="status">ASHISH / ENGINEERING</span>
          </div>
          <div className="console-body">
            <div className="command">$ {selected.command}</div>
            <ul className="flow">
              <li><b>01</b><span>Understand the problem</span></li>
              <li><b>02</b><span>Shape the simplest useful system</span></li>
              <li><li><b>03</b><span>Ship, measure and improve</span></li></li>
            </ul>
            <p className="mode-copy"><ModeIcon size={13} />{selected.copy}</p>
          </div>
          <div className="mode-switch">
            {(Object.keys(modes) as Array<keyof typeof modes>).map((key) => (
              <button key={key} className={mode === key ? "active" : ""} onClick={() => setMode(key)} type="button">
                {modes[key].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </IntroContainer>
  );
};

export default Introduction;