import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import { FaArrowRight } from "react-icons/fa6";
const FreelanceBox=styled.div`
 display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2rem;align-items:end;margin-top:2rem;padding:clamp(1.5rem,4vw,2.75rem);
 border:1px solid var(--line-strong);border-radius:var(--radius);background:var(--panel);
 h3{max-width:760px;margin:0;font-size:clamp(2rem,4.5vw,4rem);line-height:.98;letter-spacing:-.055em;}
 p{max-width:680px;margin:1.2rem 0 0;color:var(--muted);}
 .cta-row{display:flex;align-items:center;gap:.8rem;flex-wrap:wrap;}
 a{display:inline-flex;align-items:center;gap:.55rem;padding:.8rem 1rem;border-radius:9px;background:var(--text);color:#0A0E15;text-decoration:none;font-weight:750;}
 .note{color:#667085;font:600 .66rem/1 var(--font-mono);}
 @media(max-width:700px){grid-template-columns:1fr;.cta-row{margin-top:.5rem;}}
`;
export const Freelance=()=>{const screenType=useScreen();const inlineMargin=screenType==="desktop"?"1.2rem":"0";return <Wrapper id="freelance" inlineMargin={inlineMargin}><header><p className="section-kicker">WORK WITH ME</p></header><FreelanceBox><div><h3>Have a messy idea? Let’s make it tangible.</h3><p>New product, internal tool, API, AI-assisted workflow or a stubborn production issue — bring the problem. We’ll turn it into a clear next step.</p></div><div className="cta-row"><a href="#contact">Tell me about it <FaArrowRight size={13}/></a><span className="note">selected projects</span></div></FreelanceBox></Wrapper>;};
