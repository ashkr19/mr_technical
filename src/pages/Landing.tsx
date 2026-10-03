
import { ReactElement } from "react";
import styled from "styled-components";
import { FaArrowRight, FaQuoteLeft, FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import photo from "../assets/images/ash.jpeg";

const Page = styled.div`
  --bg: #f6f1e8; --surface: #fffdf8; --ink: #182033; --muted: #6c6b69;
  --line: #ded8cb; --gold: #a2773b; --gold-soft: #eee3cf;
  min-height: 100vh; background: var(--bg); color: var(--ink);
  font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  * { box-sizing: border-box; } a { color: inherit; }
`;
const C = styled.div`width:min(1180px,calc(100% - 48px));margin:0 auto;@media(max-width:700px){width:calc(100% - 32px);}`;
const Header=styled.header`position:sticky;top:0;z-index:20;background:rgba(246,241,232,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(14px);`;
const HeaderInner=styled.div`min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px;`;
const Brand=styled.a`text-decoration:none;font-size:.9rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;span{display:block;margin-top:2px;color:var(--muted);font-size:.56rem;font-weight:600;letter-spacing:.14em;}`;
const Nav=styled.nav`display:flex;gap:28px;font-size:.76rem;font-weight:700;a{text-decoration:none;color:#565a62;&:hover{color:var(--ink);}}@media(max-width:760px){display:none;}`;
const HeaderCta=styled.a`display:inline-flex;align-items:center;gap:8px;padding:11px 16px;background:var(--ink);color:#fff!important;border-radius:6px;text-decoration:none;font-size:.74rem;font-weight:800;`;
const Hero=styled.section`padding:94px 0 84px;border-bottom:1px solid var(--line);@media(max-width:760px){padding:64px 0;}`;
const HeroGrid=styled.div`display:grid;grid-template-columns:1.08fr .92fr;gap:70px;align-items:center;@media(max-width:850px){grid-template-columns:1fr;gap:46px;}`;
const Eyebrow=styled.p`margin:0 0 18px;color:var(--gold);font:700 .66rem/1 "SFMono-Regular",Consolas,monospace;letter-spacing:.18em;text-transform:uppercase;`;
const H1=styled.h1`max-width:720px;margin:0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3.6rem,7.2vw,6.8rem);line-height:.92;letter-spacing:-.065em;font-weight:500;span{color:var(--gold);font-style:italic;}@media(max-width:500px){font-size:3.5rem;}`;
const HeroCopy=styled.p`max-width:630px;margin:28px 0 0;color:#5e6064;font-size:clamp(1rem,1.7vw,1.16rem);line-height:1.7;`;
const Actions=styled.div`display:flex;flex-wrap:wrap;gap:12px;margin-top:30px;`;
const Primary=styled.a`display:inline-flex;align-items:center;gap:9px;padding:14px 18px;border-radius:6px;background:var(--gold);color:#fff;text-decoration:none;font-size:.78rem;font-weight:800;svg{transition:transform 160ms ease;}&:hover svg{transform:translateX(3px);}`;
const Secondary=styled.a`display:inline-flex;align-items:center;gap:8px;padding:13px 17px;border:1px solid #bcb4a6;border-radius:6px;text-decoration:none;font-size:.78rem;font-weight:800;&:hover{background:#fffaf0;}`;
const Proof=styled.div`display:grid;grid-template-columns:repeat(4,1fr);margin-top:58px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);@media(max-width:620px){grid-template-columns:repeat(2,1fr);}`;
const ProofItem=styled.div`padding:18px 14px;border-right:1px solid var(--line);&:last-child{border-right:0;}strong{display:block;font-family:Georgia,serif;font-size:1.45rem;font-weight:500;}span{display:block;margin-top:4px;color:var(--muted);font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;}`;
const PortraitPanel=styled.div`position:relative;min-height:530px;overflow:hidden;background:#e9e0d1;border:1px solid #d3c8b6;@media(max-width:850px){min-height:440px;max-width:560px;}`;
const Portrait=styled.img`position:absolute;right:0;bottom:0;width:76%;height:92%;object-fit:cover;object-position:center top;mix-blend-mode:multiply;filter:contrast(.98) saturate(.7);`;
const PortraitNote=styled.div`position:absolute;left:24px;top:24px;width:150px;padding:14px;border:1px solid #c7b99f;background:rgba(255,253,248,.8);color:#695c4a;font:700 .65rem/1.5 "SFMono-Regular",Consolas,monospace;text-transform:uppercase;letter-spacing:.08em;`;
const Section=styled.section`padding:100px 0;border-bottom:1px solid var(--line);@media(max-width:760px){padding:72px 0;}`;
const SectionHead=styled.div`display:grid;grid-template-columns:1fr 1fr;gap:50px;margin-bottom:42px;@media(max-width:760px){grid-template-columns:1fr;gap:14px;}h2{margin:0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(2.3rem,5vw,4.2rem);line-height:.98;font-weight:500;letter-spacing:-.045em;}p{margin:0;max-width:520px;color:var(--muted);line-height:1.75;}`;
const ServicesGrid=styled.div`display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);@media(max-width:820px){grid-template-columns:repeat(2,1fr);}@media(max-width:560px){grid-template-columns:1fr;}`;
const Service=styled.article`min-height:245px;padding:26px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(255,253,248,.42);transition:background 180ms ease,transform 180ms ease;&:hover{background:var(--surface);transform:translateY(-2px);}.number{color:var(--gold);font:700 .62rem/1 "SFMono-Regular",Consolas,monospace;}h3{margin:52px 0 9px;font-family:Georgia,serif;font-size:1.55rem;font-weight:500;}p{margin:0;color:var(--muted);font-size:.9rem;line-height:1.65;}a{display:inline-flex;align-items:center;gap:7px;margin-top:22px;color:var(--gold);text-decoration:none;font-size:.72rem;font-weight:800;}`;
const WorkGrid=styled.div`display:grid;grid-template-columns:1.25fr .75fr;gap:18px;@media(max-width:820px){grid-template-columns:1fr;}`;
const WorkCard=styled.article`min-height:290px;padding:28px;border:1px solid var(--line);background:var(--surface);display:flex;flex-direction:column;.label{color:var(--gold);font:700 .62rem/1 "SFMono-Regular",Consolas,monospace;letter-spacing:.12em;}h3{margin:58px 0 10px;font-family:Georgia,serif;font-size:clamp(1.7rem,3vw,2.5rem);font-weight:500;letter-spacing:-.04em;}p{margin:0;color:var(--muted);max-width:620px;line-height:1.65;}.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:24px;}.tag{padding:6px 8px;border:1px solid var(--line);color:#68655f;font-size:.62rem;}`;
const Process=styled.div`display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);@media(max-width:760px){grid-template-columns:repeat(2,1fr);}@media(max-width:480px){grid-template-columns:1fr;}`;
const Step=styled.article`padding:25px 22px 30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);.step{color:var(--gold);font:700 .65rem/1 "SFMono-Regular",Consolas,monospace;}h3{margin:46px 0 8px;font-family:Georgia,serif;font-size:1.45rem;font-weight:500;}p{margin:0;color:var(--muted);font-size:.88rem;line-height:1.65;}`;
const DarkBand=styled.section`background:#182033;color:#f7f2e9;padding:92px 0;.inner{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:center;}h2{margin:0;max-width:500px;font-family:Georgia,serif;font-size:clamp(2.4rem,5vw,4.4rem);line-height:.98;font-weight:500;}p{color:#b9bcc3;line-height:1.75;}@media(max-width:820px){.inner{grid-template-columns:1fr;gap:34px;}}`;
const AiGrid=styled.div`display:grid;grid-template-columns:repeat(2,1fr);border:1px solid rgba(255,255,255,.13);@media(max-width:560px){grid-template-columns:1fr;}`;
const AiItem=styled.div`padding:22px;min-height:120px;border-right:1px solid rgba(255,255,255,.13);border-bottom:1px solid rgba(255,255,255,.13);&:nth-child(2n){border-right:0;}strong{display:block;margin-bottom:7px;color:#f4d9aa;font-family:Georgia,serif;font-size:1.15rem;font-weight:500;}span{color:#aeb3bc;font-size:.82rem;line-height:1.55;}`;
const AboutGrid=styled.div`display:grid;grid-template-columns:.75fr 1.25fr;gap:72px;align-items:start;@media(max-width:800px){grid-template-columns:1fr;gap:35px;}img{width:100%;max-width:330px;aspect-ratio:4/5;object-fit:cover;filter:saturate(.65);border:1px solid #d4cab9;}.lead{margin:0;max-width:760px;font-family:Georgia,serif;font-size:clamp(1.7rem,3vw,2.8rem);line-height:1.12;font-weight:500;letter-spacing:-.035em;}.copy{margin-top:22px;max-width:690px;color:var(--muted);line-height:1.8;}`;
const Principles=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:32px;border:1px solid var(--line);background:var(--line);@media(max-width:650px){grid-template-columns:1fr;}div{padding:18px;background:var(--surface);}strong{display:block;font-family:Georgia,serif;font-size:1.05rem;font-weight:500;}span{display:block;margin-top:6px;color:var(--muted);font-size:.72rem;line-height:1.5;}`;
const QuoteGrid=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:16px;@media(max-width:820px){grid-template-columns:1fr;}`;
const Quote=styled.blockquote`margin:0;padding:24px;border:1px solid var(--line);background:var(--surface);p{margin:18px 0 26px;color:#5f6062;font-family:Georgia,serif;font-size:1.05rem;line-height:1.6;}cite{color:var(--muted);font-size:.68rem;font-style:normal;font-weight:800;text-transform:uppercase;letter-spacing:.08em;}svg{color:var(--gold);}`;
const ContactBand=styled.section`padding:90px 0;background:#e9dfce;.inner{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:end;}h2{max-width:750px;margin:0;font-family:Georgia,serif;font-size:clamp(2.8rem,6vw,5.2rem);line-height:.94;font-weight:500;letter-spacing:-.05em;}p{max-width:650px;margin:18px 0 0;color:#68645d;line-height:1.7;}.contact-links{display:grid;gap:11px;}.contact-links a,.contact-links span{display:inline-flex;align-items:center;gap:9px;text-decoration:none;color:#494740;font-size:.75rem;font-weight:800;}@media(max-width:760px){.inner{grid-template-columns:1fr;}}`;
const Footer=styled.footer`padding:28px 0;background:#182033;color:#aeb3bc;font-size:.7rem;.inner{display:flex;justify-content:space-between;gap:20px;}a{color:#e6d6b7;text-decoration:none;}@media(max-width:620px){.inner{flex-direction:column;}}`;

const services=[
["01","Product Engineering","Senior-led architecture and delivery for products that need to move from idea to production."],
["02","Scale & Performance","Find the real bottleneck across APIs, data, caching, queues and infrastructure."],
["03","Modernize Legacy Systems","Evolve ageing applications incrementally instead of betting everything on a rewrite."],
["04","AI Engineering","Integrate practical AI into real products, workflows and internal systems."],
["05","Technical Consulting","Architecture reviews, modernization roadmaps, technical due diligence and advisory."],
["06","Fractional CTO","Hands-on technical leadership when you need senior judgement without a full-time CTO."]
];
const projects=[
["01","Insurance Management Platform","A unified platform for claims, policies, and user management with role-based workflows and reporting.",["React","Next.js","Spring Boot","PostgreSQL"]],
["02","Reward Management Platform","Event-driven customer and reward services connected through asynchronous workflows and caching.",["Java","Kafka","Redis","AWS"]],
["03","Automotive Ecommerce Platform","Vehicle journeys, order workflows and API orchestration across web and backend systems.",["React","Node.js","Spring Boot","PostgreSQL"]]
];
const aiUseCases=[
["AI search & RAG","Turn internal documents and product knowledge into useful, grounded answers."],
["Workflow automation","Remove repetitive operational steps while keeping humans in control."],
["Document intelligence","Extract, classify and route information from unstructured documents."],
["Product copilots","Add context-aware assistance where it improves an existing workflow."]
];

const Landing=():ReactElement=><Page>
<Header><C><HeaderInner>
<Brand href="#home">Ashish Kumar<span>Software Engineer · Technical Consultant</span></Brand>
<Nav><a href="#services">Services</a><a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a><a href="#insights">Insights</a></Nav>
<HeaderCta href="#contact">Book a call <FaArrowRight size={11}/></HeaderCta>
</HeaderInner></C></Header>

<main>
<Hero id="home"><C><HeroGrid><div>
<Eyebrow>Technical Consultant · Software Engineer · Fractional CTO</Eyebrow>
<H1>Modernize.<br/><span>Scale.</span><br/>Build what matters.</H1>
<HeroCopy>I help companies solve hard software problems — from product architecture and legacy modernization to scalable systems and practical AI.</HeroCopy>
<Actions><Primary href="#contact">Start a conversation <FaArrowRight size={12}/></Primary><Secondary href="#work">Explore my work</Secondary></Actions>
<Proof><ProofItem><strong>5+</strong><span>Years engineering</span></ProofItem><ProofItem><strong>20+</strong><span>Projects delivered</span></ProofItem><ProofItem><strong>3</strong><span>Core industries</span></ProofItem><ProofItem><strong>100%</strong><span>Hands-on</span></ProofItem></Proof>
</div><PortraitPanel><PortraitNote>Engineering judgment<br/>on demand.</PortraitNote><Portrait src={photo} alt="Ashish Kumar"/></PortraitPanel></HeroGrid></C></Hero>

<Section id="services"><C><SectionHead><div><Eyebrow>My services</Eyebrow><h2>Technical problems into business progress.</h2></div><p>Focused consulting and delivery across the software lifecycle, with practical AI where it creates measurable value.</p></SectionHead>
<ServicesGrid>{services.map(([n,t,d])=><Service key={n}><span className="number">{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">Discuss this <FaArrowRight size={10}/></a></Service>)}</ServicesGrid></C></Section>

<Section id="work"><C><SectionHead><div><Eyebrow>Selected work</Eyebrow><h2>Real systems. Real constraints.</h2></div><p>The technology matters, but the interesting part is the problem, the trade-offs and the system that has to keep working after launch.</p></SectionHead>
<WorkGrid>{projects.map(([n,t,d,tags])=><WorkCard key={n}><span className="label">CASE STUDY / {n}</span><h3>{t}</h3><p>{d}</p><div className="tags">{(tags as string[]).map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></WorkCard>)}</WorkGrid></C></Section>

<Section id="approach"><C><SectionHead><div><Eyebrow>My approach</Eyebrow><h2>A clear path through complicated problems.</h2></div><p>I start with the business problem, make the technical constraints visible, then choose an architecture that the team can actually operate.</p></SectionHead>
<Process>{[["01","Understand","Clarify goals, constraints, failure modes and what success actually means."],["02","Architect","Choose boundaries, data flows and technology with explicit trade-offs."],["03","Build","Implement iteratively with quality, testing and useful visibility."],["04","Improve","Measure real behaviour and keep improving the system from evidence."]].map(([s,t,d])=><Step key={s}><span className="step">{s}</span><h3>{t}</h3><p>{d}</p></Step>)}</Process></C></Section>

<DarkBand id="ai"><C><div className="inner"><div><Eyebrow>AI engineering</Eyebrow><h2>AI that earns its place.</h2><p>I design AI-assisted capabilities around real data, workflows and measurable outcomes — not demos looking for a problem.</p><Actions><Primary href="#contact">Discuss an AI initiative <FaArrowRight size={12}/></Primary></Actions></div><AiGrid>{aiUseCases.map(([t,d])=><AiItem key={t}><strong>{t}</strong><span>{d}</span></AiItem>)}</AiGrid></div></C></DarkBand>

<Section id="about"><C><SectionHead><div><Eyebrow>About</Eyebrow><h2>Senior engineering, without the theatre.</h2></div><p>A hands-on engineer who likes difficult systems, clear communication and practical decisions.</p></SectionHead>
<AboutGrid><img src={photo} alt="Portrait of Ashish Kumar"/><div><p className="lead">I enjoy turning unclear requirements, tricky systems and rough ideas into software people can actually use.</p><p className="copy">My work spans Insurance, E-commerce and EdTech, with a focus on React, Next.js, Java, Spring Boot, Node.js, PostgreSQL, Redis, Kafka, AWS and distributed systems.</p><Principles><div><strong>Evolve before you rewrite.</strong><span>Prefer incremental change when the business needs continuity.</span></div><div><strong>Measure before you optimize.</strong><span>Find the bottleneck before changing the architecture.</span></div><div><strong>Use AI where it pays.</strong><span>Technology should solve a real workflow, not decorate a roadmap.</span></div></Principles></div></AboutGrid></C></Section>

<Section id="insights"><C><SectionHead><div><Eyebrow>Insights</Eyebrow><h2>Sharing what I learn.</h2></div><p>Architecture notes, scaling lessons, modernization patterns and practical AI engineering.</p></SectionHead><WorkGrid><WorkCard><span className="label">ARCHITECTURE</span><h3>Designing scalable systems without over-engineering.</h3><p>Patterns, trade-offs and lessons from building APIs, distributed workflows and data-heavy applications.</p></WorkCard><WorkCard><span className="label">MODERNIZATION</span><h3>When to evolve a legacy system instead of rewriting it.</h3><p>A practical way to identify boundaries, reduce risk and modernize incrementally.</p></WorkCard></WorkGrid></C></Section>

<Section><C><SectionHead><div><Eyebrow>Testimonials</Eyebrow><h2>Trusted by teams that value clarity.</h2></div><p>Proof-focused testimonial space, ready for real client or colleague quotes.</p></SectionHead><QuoteGrid>{["Ashish combines strong technical depth with a practical understanding of the business problem.","He brings structure to complicated systems and communicates trade-offs clearly.","A hands-on engineer who thinks beyond the immediate ticket and considers the system as a whole."].map((q,i)=><Quote key={i}><FaQuoteLeft size={15}/><p>{q}</p><cite>Project collaborator · {i+1}</cite></Quote>)}</QuoteGrid></C></Section>

<ContactBand id="contact"><C><div className="inner"><div><Eyebrow>Get in touch</Eyebrow><h2>Tell me what you're dealing with.</h2><p>I’ll give you an honest read on the problem, the likely path forward, and whether I’m the right person to help.</p><Actions><Primary href="mailto:ashish.kumar19097@gmail.com?subject=Technical%20consulting%20enquiry">Email me <FaEnvelope size={12}/></Primary><Secondary href="/new.pdf">Download resume</Secondary></Actions></div><div className="contact-links"><a href="mailto:ashish.kumar19097@gmail.com"><FaEnvelope/>ashish.kumar19097@gmail.com</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin/>LinkedIn</a><a href="https://github.com/ashkr19" target="_blank" rel="noreferrer"><FaGithub/>GitHub</a><span><FaLocationDot/>Bengaluru, India · Remote</span></div></div></C></ContactBand>
</main>
<Footer><C><div className="inner"><span>© {new Date().getFullYear()} Ashish Kumar · Pragmatic engineering for growing companies.</span><a href="#home">Back to top ↑</a></div></C></Footer>
</Page>;

export default Landing;
