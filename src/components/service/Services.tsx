import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import { FaArrowUpRightFromSquare, FaBrain, FaGaugeHigh, FaLayerGroup, FaLaptopCode, FaServer } from "react-icons/fa6";

const ServicesGrid=styled.div`
 display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);margin-top:2rem;
 @media(max-width:850px){grid-template-columns:repeat(2,1fr);}
 @media(max-width:560px){grid-template-columns:1fr;}
`;
const ServiceCard=styled.article`
 min-height:220px;padding:1.35rem;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:transparent;transition:background 160ms ease;
 &:hover{background:var(--panel);}
 .icon{color:var(--accent);margin-bottom:2.5rem;}
 .number{float:right;color:#475467;font:600 .65rem/1 var(--font-mono);}
 h3{margin:0 0 .5rem;font-size:1.05rem;}
 p{margin:0;color:var(--muted);font-size:.9rem;}
 .arrow{display:block;margin-top:1rem;color:#667085;}
 &:hover .arrow{color:var(--accent);}
`;
const services=[
["Custom software","Interfaces, dashboards and workflows that make a real process easier.",FaLaptopCode],
["AI experiences","Practical AI-assisted features that fit into an actual product workflow.",FaBrain],
["Backend systems","APIs, integrations and business logic built for change.",FaServer],
["Distributed systems","Services, events and caching when one process becomes many.",FaLayerGroup],
["Performance","Trace the slow part. Understand the bottleneck. Fix the right layer.",FaGaugeHigh],
["Technical direction","Architecture choices, modernization plans and hands-on problem solving.",FaArrowUpRightFromSquare],
];
export const Services=()=>{
 const screenType=useScreen();const inlineMargin=screenType==="desktop"?"1.2rem":"0";
 return <Wrapper id="services" inlineMargin={inlineMargin}><header><p className="section-kicker">WHERE I HELP</p><h2 className="page-title">From “we need this” to “it works.”</h2><p>Bring me the product idea, workflow or stubborn technical problem.</p></header><ServicesGrid>{services.map(([title,description,Icon],i)=><ServiceCard key={title as string}><span className="number">0{i+1}</span><div className="icon"><Icon/></div><h3>{title as string}</h3><p>{description as string}</p><FaArrowUpRightFromSquare className="arrow" size={12}/></ServiceCard>)}</ServicesGrid></Wrapper>;
};
