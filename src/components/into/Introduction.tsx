import styled from "styled-components";
import { useState } from "react";
import { FaArrowDown, FaArrowRight, FaBolt, FaCode, FaBrain } from "react-icons/fa";
import { useScreen } from "../../context/context";

type IntroContainerProps = {
  inlineMargin: string;
};

const IntroContainer = styled.section<IntroContainerProps>`
  position: relative;
  min-height: calc(100vh - 5.5rem);
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 6rem);
  padding: clamp(3rem, 7vw, 6rem) clamp(1.1rem, 4vw, 3.5rem);
  margin-inline: ${(props) => props.inlineMargin};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 34rem;
    height: 34rem;
    right: -12rem;
    top: 2rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.24), transparent 68%);
    filter: blur(8px);
    animation: breathe 7s ease-in-out infinite;
  }

  @keyframes breathe {
    0%, 100% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1.08); opacity: 1; }
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin: 0 0 1.1rem;
    color: var(--lime);
    font: 700 0.72rem/1 var(--font-mono);
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .eyebrow::before {
    content: "";
    width: 28px;
    height: 1px;
    background: var(--lime);
  }

  h1 {
    max-width: 850px;
    margin: 0;
    font-size: clamp(3.2rem, 7vw, 7.4rem);
    line-height: 0.91;
    letter-spacing: -0.075em;
    font-weight: 900;
  }

  h1 span {
    display: block;
    color: transparent;
    background: linear-gradient(100deg, var(--cyan), var(--violet) 55%, var(--pink));
    background-clip: text;
    -webkit-background-clip: text;
  }

  .subtitle {
    max-width: 690px;
    margin: 1.7rem 0 0;
    color: var(--muted);
    font-size: clamp(1rem, 1.8vw, 1.2rem);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem 1.05rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 800;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .actions a:hover {
    transform: translateY(-3px);
  }

  .actions .primary {
    background: var(--lime);
    color: #071008;
    box-shadow: 0 12px 35px rgba(184, 255, 106, 0.18);
  }

  .actions .secondary {
    border: 1px solid var(--line);
    color: var(--text);
    background: rgba(255, 255, 255, 0.03);
  }

  .micro-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.6rem;
  }

  .micro-proof span {
    padding: 0.38rem 0.65rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: #CBD5E1;
    font: 600 0.72rem/1 var(--font-mono);
  }

  .visual {
    position: relative;
    min-height: 510px;
    display: grid;
    place-items: center;
  }

  .visual::before {
    content: "";
    position: absolute;
    width: min(34vw, 430px);
    height: min(34vw, 430px);
    border: 1px solid rgba(34, 211, 238, 0.18);
    border-radius: 50%;
    animation: spin 22s linear infinite;
  }

  .visual::after {
    content: "";
    position: absolute;
    width: min(25vw, 315px);
    height: min(25vw, 315px);
    border: 1px dashed rgba(139, 92, 246, 0.35);
    border-radius: 50%;
    animation: spinReverse 16s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes spinReverse { to { transform: rotate(-360deg); } }

  .orb {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--lime);
    box-shadow: 0 0 25px var(--lime);
    animation: orbit 8s linear infinite;
  }

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(185px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(185px) rotate(-360deg); }
  }

  .console {
    position: relative;
    z-index: 2;
    width: min(100%, 470px);
    padding: 1rem;
    border: 1px solid rgba(255,255,255,0.13);
    border-radius: 24px;
    background: rgba(8, 12, 24, 0.88);
    box-shadow: 0 35px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
    backdrop-filter: blur(18px);
    transform: rotate(1deg);
    transition: transform 250ms ease;
  }

  .console:hover {
    transform: rotate(0deg) translateY(-8px);
  }

  .console-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0.3rem 0.9rem;
    color: #64748B;
    font: 600 0.7rem/1 var(--font-mono);
  }

  .dots {
    display: flex;
    gap: 0.35rem;
  }

  .dots i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #475569;
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--lime);
  }

  .status b {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--lime);
    box-shadow: 0 0 10px var(--lime);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    50% { opacity: 0.35; transform: scale(0.7); }
  }

  .console-body {
    padding: 1.2rem;
    border-radius: 16px;
    background: #080C16;
    font-family: var(--font-mono);
  }

  .line {
    display: flex;
    gap: 0.65rem;
    margin: 0.7rem 0;
    color: #CBD5E1;
    font-size: 0.78rem;
  }

  .line em {
    color: var(--violet);
    font-style: normal;
  }

  .line strong {
    color: var(--cyan);
  }

  .line small {
    color: #64748B;
  }

  .mode-switch {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.35rem;
    margin-top: 1rem;
  }

  .mode-switch button {
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 0.55rem 0.4rem;
    background: rgba(255,255,255,0.025);
    color: #94A3B8;
    cursor: pointer;
    font: 700 0.7rem/1 var(--font-mono);
    transition: all 160ms ease;
  }

  .mode-switch button.active,
  .mode-switch button:hover {
    border-color: rgba(184,255,106,0.45);
    background: rgba(184,255,106,0.08);
    color: var(--lime);
  }

  .mode-copy {
    min-height: 52px;
    margin: 1rem 0 0;
    color: #E2E8F0;
    font-size: 0.86rem;
  }

  .scroll-cue {
    position: absolute;
    left: clamp(1.1rem, 4vw, 3.5rem);
    bottom: 1.2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748B;
    font: 600 0.68rem/1 var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .scroll-cue svg {
    animation: bob 1.8s ease-in-out infinite;
  }

  @keyframes bob {
    50% { transform: translateY(5px); }
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    padding-top: 4rem;

    .visual {
      min-height: 420px;
    }
  }

  @media (max-width: 600px) {
    min-height: auto;

    h1 {
      font-size: clamp(3rem, 16vw, 5rem);
    }

    .visual {
      min-height: 370px;
    }

    .visual::before {
      width: 310px;
      height: 310px;
    }

    .visual::after {
      width: 230px;
      height: 230px;
    }

    .orb {
      animation-name: orbitMobile;
    }

    @keyframes orbitMobile {
      from { transform: rotate(0deg) translateX(135px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(135px) rotate(-360deg); }
    }

    .scroll-cue {
      display: none;
    }
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
    <IntroContainer id="home" inlineMargin={inlineMargin} className="page-content">
      <div>
        <p className="eyebrow">SOFTWARE ENGINEER · BUILDER · FREELANCE</p>
        <h1>Make it <span>work.</span><br />Make it last.</h1>
        <p className="subtitle">
          I turn product ideas and messy technical problems into useful,
          production-ready software — from interfaces and APIs to distributed
          workflows.
        </p>
        <div className="actions">
          <a className="primary" href="#contact">Start a conversation <FaArrowRight size={13} /></a>
          <a className="secondary" href="#projects">Explore the work</a>
        </div>
        <div className="micro-proof">
          <span>5+ years</span>
          <span>Java + Spring</span>
          <span>React + Next</span>
          <span>Cloud + distributed systems</span>
        </div>
      </div>

      <div className="visual" aria-label="Interactive engineering console">
        <span className="orb" />
        <div className="console">
          <div className="console-top">
            <div className="dots"><i /><i /><i /></div>
            <span className="status"><b /> SYSTEM READY</span>
          </div>
          <div className="console-body">
            <div className="line"><small>01</small><em>$</em><strong>{selected.command}</strong></div>
            <div className="line"><small>02</small><span>→ mapping problem space</span></div>
            <div className="line"><small>03</small><span>→ choosing the simplest useful architecture</span></div>
            <div className="line"><small>04</small><span>→ <strong>shipping</strong> with feedback loops</span></div>
            <p className="mode-copy"><ModeIcon size={13} /> {selected.copy}</p>
          </div>
          <div className="mode-switch">
            {(Object.keys(modes) as Array<keyof typeof modes>).map((key) => (
              <button
                key={key}
                className={mode === key ? "active" : ""}
                onClick={() => setMode(key)}
                type="button"
              >
                {modes[key].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-cue"><FaArrowDown size={10} /> scroll to explore</div>
    </IntroContainer>
  );
};

export default Introduction;