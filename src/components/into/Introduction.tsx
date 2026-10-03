import styled from "styled-components";
import { useState } from "react";
import { FaArrowRight, FaBolt, FaCode, FaBrain } from "react-icons/fa";
import { useScreen } from "../../context/context";

type IntroContainerProps = { inlineMargin: string };

const IntroContainer = styled.section<IntroContainerProps>`
  max-width: calc(var(--content-width) + 7rem);
  min-height: calc(100vh - 5.5rem);
  margin-inline: auto;
  padding: clamp(3.5rem, 8vw, 7rem) clamp(1.1rem, 4vw, 3.5rem);
  display:grid; grid-template-columns:minmax(0,1.1fr) minmax(340px,.9fr);
  align-items:center; gap:clamp(2.5rem,7vw,7rem);
  border-bottom:1px solid var(--line);

  .eyebrow { margin:0 0 1.1rem; color:var(--accent); font:700 .68rem/1 var(--font-mono); letter-spacing:.14em; }
  h1 { max-width:780px; margin:0; font-size:clamp(3.5rem,7vw,6.8rem); line-height:.94; letter-spacing:-.075em; font-weight:850; }
  h1 span { color:var(--accent); }
  .subtitle { max-width:650px; margin:1.7rem 0 0; color:var(--muted); font-size:clamp(1rem,1.8vw,1.18rem); }
  .actions { display:flex; flex-wrap:wrap; gap:.7rem; margin-top:2rem; }
  .actions a { display:inline-flex; align-items:center; gap:.55rem; padding:.78rem 1rem; border:1px solid var(--line-strong); border-radius:10px; text-decoration:none; font-weight:750; transition:background 160ms ease,border-color 160ms ease,transform 160ms ease; }
  .actions a:hover { transform:translateY(-2px); }
  .actions .primary { background:var(--text); color:#0A0E15; border-color:var(--text); }
  .actions .secondary { background:transparent; color:var(--text); }
  .actions .secondary:hover { background:var(--accent-soft); border-color:rgba(96,165,250,.4); }
  .micro-proof { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:1.5rem; }
  .micro-proof span { color:#B8C1CF; font:600 .68rem/1 var(--font-mono); padding:.38rem .55rem; border-left:1px solid var(--line-strong); }

  .visual { display:flex; justify-content:flex-end; }
  .console { width:min(100%,500px); border:1px solid var(--line-strong); border-radius:16px; background:var(--panel); box-shadow:0 24px 70px rgba(0,0,0,.25); }
  .console-top { display:flex; align-items:center; justify-content:space-between; padding:.85rem 1rem; border-bottom:1px solid var(--line); color:#697586; font:600 .65rem/1 var(--font-mono); }
  .dots { display:flex; gap:.35rem; }
  .dots i { width:6px; height:6px; border-radius:50%; background:#475467; }
  .status { color:#9CA3AF; }
  .console-body { padding:1.2rem; font-family:var(--font-mono); }
  .line { display:grid; grid-template-columns:24px 12px 1fr; gap:.45rem; margin:.75rem 0; color:#B8C1CF; font-size:.74rem; }
  .line small { color:#475467; }
  .line em { color:var(--accent); font-style:normal; }
  .line strong { color:#E5E7EB; font-weight:600; }
  .mode-copy { display:flex; align-items:flex-start; gap:.55rem; min-height:48px; margin:1.25rem 0 0; padding-top:1rem; border-top:1px solid var(--line); color:#D0D5DD; font:400 .76rem/1.6 var(--font-sans); }
  .mode-copy svg { flex:0 0 auto; color:var(--accent); margin-top:.2rem; }
  .mode-switch { display:grid; grid-template-columns:repeat(3,1fr); gap:.5rem; padding:0 1rem 1rem; }
  .mode-switch button { padding:.65rem .4rem; border:1px solid var(--line); border-radius:9px; background:transparent; color:#667085; cursor:pointer; font:700 .66rem/1 var(--font-mono); }
  .mode-switch button.active,.mode-switch button:hover { color:var(--text); border-color:rgba(96,165,250,.45); background:var(--accent-soft); }

  @media (max-width:950px) { grid-template-columns:1fr; min-height:auto; .visual { justify-content:flex-start; } }
  @media (max-width:600px) {
    h1 { font-size:clamp(3.2rem,15vw,5rem); }
    .micro-proof { gap:.45rem; }
    .visual { width:100%; }
    .console { width:100%; }
  }
`;

const modes = {
  build:{label:"BUILD",icon:FaCode,copy:"Product UI, APIs and workflows designed to ship cleanly and evolve.",command:"ship --from-idea --to-production"},
  systems:{label:"SYSTEMS",icon:FaBolt,copy:"Microservices, events, caching and observability for systems that have to keep moving.",command:"design --reliable --observable"},
  ai:{label:"AI",icon:FaBrain,copy:"Practical AI-assisted product experiences where the technology solves a real workflow.",command:"prototype --ai --useful"},
};

const Introduction = () => {
  const screenType=useScreen();
  const inlineMargin=screenType==="desktop"?"1.2rem":"0";
  const [mode,setMode]=useState<keyof typeof modes>("build");
  const selected=modes[mode];
  const ModeIcon=selected.icon;

  return <IntroContainer id="home" inlineMargin={inlineMargin} className="page-content">
    <div>
      <p className="eyebrow">SOFTWARE ENGINEER · BUILDER · FREELANCE</p>
      <h1>Make it <span>work.</span><br/>Make it last.</h1>
      <p className="subtitle">I turn product ideas and messy technical problems into useful, production-ready software — from interfaces and APIs to distributed workflows.</p>
      <div className="actions">
        <a className="primary" href="#contact">Start a conversation <FaArrowRight size={13}/></a>
        <a className="secondary" href="#projects">Explore the work</a>
      </div>
      <div className="micro-proof"><span>5+ years</span><span>Java + Spring</span><span>React + Next</span><span>Cloud + distributed systems</span></div>
    </div>
    <div className="visual" aria-label="Interactive engineering console">
      <div className="console">
        <div className="console-top"><div className="dots"><i/><i/><i/></div><span className="status">ENGINEERING / 01</span></div>
        <div className="console-body">
          <div className="line"><small>01</small><em>$</em><strong>{selected.command}</strong></div>
          <div className="line"><small>02</small><span>→ map the problem</span></div>
          <div className="line"><small>03</small><span>→ choose the simplest architecture</span></div>
          <div className="line"><small>04</small><span>→ ship, observe, improve</span></div>
          <p className="mode-copy"><ModeIcon size={13}/>{selected.copy}</p>
        </div>
        <div className="mode-switch">{(Object.keys(modes) as Array<keyof typeof modes>).map(key=><button key={key} className={mode===key?"active":""} onClick={()=>setMode(key)} type="button">{modes[key].label}</button>)}</div>
      </div>
    </div>
  </IntroContainer>;
};
export default Introduction;
