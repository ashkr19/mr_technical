import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const Stack = styled.div`
  display:grid; grid-template-columns:repeat(4,1fr); border:1px solid var(--line); border-bottom:0; margin-top:2rem;
  @media(max-width:800px){grid-template-columns:repeat(2,1fr);}
  @media(max-width:480px){grid-template-columns:1fr;}
`;
const Skill = styled.div`
  min-height:92px; padding:1.2rem 1.25rem; border-right:1px solid var(--line); border-bottom:1px solid var(--line); background:var(--panel);
  &:nth-child(4n){border-right:0;}
  @media(max-width:800px){&:nth-child(4n){border-right:1px solid var(--line);}&:nth-child(2n){border-right:0;}}
  @media(max-width:480px){border-right:0 !important;}
  .type{display:block;margin-bottom:.55rem;color:#667085;font:600 .62rem/1 var(--font-mono);text-transform:uppercase;}
  strong{font-size:.98rem;font-weight:700;}
`;
const stacks:[string,string][]=[
["Language","Java"],["Framework","Spring Boot"],["Frontend","React"],["Frontend","Next.js"],
["Language","TypeScript"],["Runtime","Node.js"],["Database","PostgreSQL"],["Database","MongoDB"],
["Caching","Redis"],["Messaging","Kafka"],["Cloud","AWS"],["Infrastructure","Docker"],
["Testing","Jest"],["Delivery","GitHub Actions"],["Architecture","Microservices"],["APIs","REST"]
];
export const Skills=()=>{
 const screenType=useScreen(); const inlineMargin=screenType==="desktop"?"1.2rem":"0";
 return <Wrapper id="skills" inlineMargin={inlineMargin}>
  <header><p className="section-kicker">THE TOOLBOX</p><h2 className="page-title">Tools I reach for.</h2><p>A focused toolkit across product UI, backend systems, data, infrastructure and delivery.</p></header>
  <Stack>{stacks.map(([type,name])=><Skill key={name}><span className="type">{type}</span><strong>{name}</strong></Skill>)}</Stack>
 </Wrapper>;
};
