import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const ProjectGrid=styled.div`
 display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; margin-top:2rem;
 @media(max-width:700px){grid-template-columns:1fr;}
`;
const ProjectCard=styled.article`
 min-height:300px; padding:1.5rem; border:1px solid var(--line); border-radius:var(--radius); background:var(--panel);
 display:flex; flex-direction:column; transition:border-color 160ms ease,background 160ms ease;
 &:hover{border-color:rgba(96,165,250,.38);background:var(--panel-2);}
 .meta{display:flex;justify-content:space-between;color:#667085;font:600 .65rem/1 var(--font-mono);letter-spacing:.08em;}
 h3{margin:3.5rem 0 .65rem;font-size:clamp(1.4rem,2.5vw,2rem);line-height:1.05;letter-spacing:-.04em;}
 p{max-width:540px;margin:0;color:var(--muted);}
 .tags{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:auto;padding-top:1.5rem;}
 .tag{padding:.35rem .5rem;border:1px solid var(--line);border-radius:7px;color:#B8C1CF;font:600 .62rem/1 var(--font-mono);}
`;
const projects=[
 {title:"Insurance Management Portal",label:"BUSINESS PLATFORM",description:"Claims, policies, users and administration brought into one product experience.",tags:["React","Next.js","Spring Boot","PostgreSQL","Redis"]},
 {title:"Reward Management Platform",label:"EVENT-DRIVEN",description:"Customer and reward services connected through asynchronous workflows and caching.",tags:["Java","Kafka","Redis","AWS"]},
 {title:"Automotive Ecommerce Platform",label:"ECOMMERCE",description:"Product journeys, order workflows and API orchestration across the stack.",tags:["React","Node.js","Spring Boot","PostgreSQL"]},
 {title:"Online Classroom",label:"EDTECH",description:"Dashboards, forms, search and authenticated learning experiences.",tags:["React","Next.js","APIs"]},
];
export const Projects=()=>{
 const screenType=useScreen(); const inlineMargin=screenType==="desktop"?"1.2rem":"0";
 return <Wrapper id="projects" inlineMargin={inlineMargin}>
  <header><p className="section-kicker">SELECTED BUILDS</p><h2 className="page-title">A few systems I’ve helped ship.</h2><p>The stack is the footnote. The product problem and the engineering decisions are the interesting part.</p></header>
  <ProjectGrid>{projects.map((project,index)=><ProjectCard key={project.title}><div className="meta"><span>{project.label}</span><span>0{index+1}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></ProjectCard>)}</ProjectGrid>
 </Wrapper>;
};
