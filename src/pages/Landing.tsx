import { ReactElement, MouseEvent } from "react";
import styled from "styled-components";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import photo from "../assets/images/ash.png";

const Page = styled.div`
  --bg: #f7f3eb;
  --surface: #fffdf8;
  --ink: #142033;
  --muted: #62666d;
  --line: #ded8cc;
  --gold: #956b2f;
  --gold-dark: #76521f;
  --gold-soft: #f0e6d3;
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  * { box-sizing: border-box; }
  a { color: inherit; }
`;

const C = styled.div`
  width: min(1500px, calc(100% - 48px));
  margin: 0 auto;
  @media (max-width: 900px) { width: min(100% - 40px, 720px); }
  @media (max-width: 560px) { width: calc(100% - 28px); }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(247,243,235,.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(16px);
`;
const HeaderInner = styled.div`
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;
const Brand = styled.a`
  text-decoration: none;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.42rem;
  letter-spacing: .01em;
  font-weight: 600;
  line-height: 1;
  span {
    display: block;
    margin-top: 7px;
    color: #58606a;
    font-family: Inter, sans-serif;
    font-size: .68rem;
    font-weight: 500;
    letter-spacing: .02em;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 34px;
  font-size: .82rem;
  a {
    text-decoration: none;
    color: #313945;
    padding: 21px 0 19px;
    border-bottom: 2px solid transparent;
    &:hover { color: var(--gold-dark); border-bottom-color: var(--gold); }
  }
  @media (max-width: 900px) { display: none; }
`;
const HeaderCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 10px 18px;
  background: var(--gold-dark);
  color: #fff !important;
  border-radius: 8px;
  text-decoration: none;
  font-size: .68rem;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(118,82,31,.14);
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
  background:
    radial-gradient(circle at 72% 45%, rgba(255,255,255,.9), transparent 31%),
    linear-gradient(90deg, #faf7f0 0%, #faf7f0 51%, #eee5d6 100%);
  padding: 0;
`;
const HeroGrid = styled.div`
  min-height: 365px;\n  border-radius: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 10px;
  @media (max-width: 1000px) { grid-template-columns: 1fr; min-height: auto; }
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 34px 16px 26px 0;
  @media (max-width: 1000px) { padding-bottom: 35px; }
`;
const Eyebrow = styled.p`
  margin: 0 0 22px;
  color: var(--gold-dark);
  font: 700 .7rem/1 "SFMono-Regular", Consolas, monospace;
  letter-spacing: .2em;
  text-transform: uppercase;
`;
const EyebrowLine = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  &:before {
    content: "";
    width: 34px;
    height: 2px;
    background: var(--gold);
  }
`;
const H1 = styled.h1`
  max-width: 100%;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3rem, 4.65vw, 4.8rem);
  line-height: .88;
  letter-spacing: -.065em;
  font-weight: 500;
  span { color: var(--gold-dark); font-style: italic; }
  @media (max-width: 560px) { font-size: 3.65rem; }
`;
const HeroCopy = styled.p`
  max-width: 620px;
  margin: 18px 0 0;
  color: #424852;
  font-size: clamp(.72rem, .9vw, .9rem);
  line-height: 1.5;
`;
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 17px;
`;
const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 17px;
  border-radius: 8px;
  background: var(--gold-dark);
  color: #fff !important;
  text-decoration: none;
  font-size: .8rem;
  font-weight: 800;
  svg { transition: transform 160ms ease; }
  &:hover svg { transform: translateX(4px); }
`;
const Secondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 9px 17px;
  border: 1px solid #9d8d75;
  border-radius: 8px;
  text-decoration: none;
  font-size: .8rem;
  font-weight: 800;
  background: rgba(255,253,248,.45);
  &:hover { background: var(--surface); }
`;
const HandNote = styled.div`
  position: absolute;
  right: 2%;
  top: 105px;
  max-width: 210px;
  color: #6d4e27;
  font: italic 1.45rem/1.1 "Brush Script MT", "Segoe Script", cursive;
  transform: rotate(-7deg);
  text-align: center;
  @media (max-width: 1000px) { display: none; }
`;
const Proof = styled.div`\n  display: none;\n
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 620px;
  margin-top: 24px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
const ProofItem = styled.div`
  padding: 13px 15px;
  border-right: 1px solid var(--line);
  &:last-child { border-right: 0; }
  strong {
    display: block;
    font-family: Georgia, serif;
    font-size: 1.25rem;
    font-weight: 500;
  }
  span {
    display: block;
    margin-top: 4px;
    color: var(--muted);
    font-size: .55rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .08em;
  }
  @media (max-width: 560px) { border-right: 0; border-bottom: 1px solid var(--line); &:last-child { border-bottom: 0; } }
`;

const PortraitStage = styled.div`
  position: relative;
  min-height: 365px;
  align-self: end;
  display: flex;
  justify-content: flex-end;
  overflow: visible;
  @media (max-width: 1000px) { min-height: 460px; }
  @media (max-width: 560px) { min-height: 380px; }
`;
const PortraitGlow = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(226,210,184,.65) 0%, rgba(246,238,224,.45) 55%, rgba(246,238,224,0) 72%);
  left: -4%;
  bottom: -35px;
  @media (max-width: 560px) { width: 390px; height: 390px; left: 50%; transform: translateX(-50%); }
`;
const Portrait = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center 16%;
  filter: saturate(.9) contrast(1.02) brightness(1.03);
  @media (max-width: 1000px) { width: min(650px, 100%); margin: 0 auto; }
`;
const StatCard = styled.aside`
  position: absolute;
  z-index: 4;
  right: 0;
  top: 28px;
  width: 152px;
  padding: 11px 14px;
  border: 1px solid rgba(181,168,146,.65);
  border-radius: 11px;
  background: rgba(255,253,248,.9);
  box-shadow: 0 22px 50px rgba(50,39,22,.1);
  backdrop-filter: blur(10px);
  @media (max-width: 1000px) { right: 5%; top: 35px; }
  @media (max-width: 560px) { right: 2px; width: 150px; padding: 17px; }
`;
const Stat = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #d8d0c3;
  &:last-child { border-bottom: 0; }
  strong { display: block; font-family: Georgia, serif; font-size: 1.18rem; font-weight: 500; }
  span { display: block; margin-top: 3px; color: #4d5259; font-size: .58rem; line-height: 1.25; }
`;

const ServiceStrip = styled.section`
  position: relative;
  z-index: 5;
  margin-top: -1px;
  padding: 8px 0 10px;
  background: #faf8f3;
  border-bottom: 1px solid var(--line);
`;
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  @media (max-width: 1100px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 460px) { grid-template-columns: 1fr; }
`;
const Service = styled.article`
  min-height: 112px;
  padding: 12px 13px;
  border: 1px solid #e0dbd1;
  border-radius: 10px;
  background: rgba(255,253,248,.72);
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  &:hover { transform: translateY(-3px); background: #fff; box-shadow: 0 16px 34px rgba(49,40,28,.08); }
  .icon {
    width: 28px; height: 28px; display: grid; place-items: center;
    border-radius: 9px; background: var(--gold-soft); color: var(--gold-dark);
    font-family: Georgia, serif; font-size: 1.2rem;
  }
  h3 { margin: 9px 0 5px; font-family: Georgia, serif; font-size: .88rem; font-weight: 500; line-height: 1.05; }
  p { margin: 0; color: var(--muted); font-size: .59rem; line-height: 1.35; }
  a { display: inline-flex; margin-top: 7px; color: var(--gold-dark); text-decoration: none; }
`;

const Section = styled.section`
  padding: 104px 0;
  border-bottom: 1px solid var(--line);
  @media (max-width: 760px) { padding: 72px 0; }
`;
const SectionHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 45px;
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 14px; }
  h2 { margin: 0; font-family: Georgia, serif; font-size: clamp(2.5rem, 5vw, 4.4rem); line-height: .98; font-weight: 500; letter-spacing: -.05em; }
  p { margin: 0; max-width: 540px; color: var(--muted); line-height: 1.75; }
`;
const WorkSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 108px 0 116px;
  background: #f1eadf;
  border-bottom: 1px solid var(--line);
  &:after {
    content: "WORK";
    position: absolute;
    right: -35px;
    top: 70px;
    color: rgba(118,82,31,.045);
    font: 700 clamp(7rem, 18vw, 16rem)/.8 Georgia, serif;
    letter-spacing: -.08em;
    pointer-events: none;
  }
  @media (max-width: 760px) { padding: 76px 0 82px; }
`;
const WorkIntro = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 70px;
  align-items: end;
  margin-bottom: 62px;
  .eyebrow { margin-bottom: 18px; }
  h2 {
    margin: 0;
    max-width: 620px;
    font-family: Georgia, serif;
    font-size: clamp(3rem, 6vw, 5.6rem);
    line-height: .9;
    font-weight: 500;
    letter-spacing: -.06em;
  }
  h2 em { color: var(--gold-dark); font-weight: 400; }
  .intro-copy {
    max-width: 520px;
    color: #66615a;
    line-height: 1.8;
    font-size: .94rem;
  }
  .intro-copy strong { color: var(--ink); font-weight: 700; }
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 22px; margin-bottom: 38px; }
`;
const WorkList = styled.div`
  position: relative;
  z-index: 1;
  border-top: 1px solid #cfc4b3;
`;
const WorkRow = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 90px 1.05fr .95fr 44px;
  gap: 28px;
  align-items: center;
  min-height: 190px;
  padding: 25px 0;
  border-bottom: 1px solid #cfc4b3;
  transition: padding 180ms ease, background 180ms ease;
  &:hover { padding-left: 18px; padding-right: 18px; background: rgba(255,253,248,.62); }
  .index {
    align-self: start;
    color: var(--gold-dark);
    font: 700 .68rem/1 "SFMono-Regular", Consolas, monospace;
    letter-spacing: .12em;
    padding-top: 7px;
  }
  .project-type {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 12px;
    padding: 5px 8px;
    border: 1px solid #cdbfa9;
    border-radius: 999px;
    color: #796a55;
    font: 700 .55rem/1 "SFMono-Regular", Consolas, monospace;
    letter-spacing: .1em;
  }
  h3 {
    margin: 0;
    font-family: Georgia, serif;
    font-size: clamp(1.55rem, 2.8vw, 2.45rem);
    line-height: .98;
    font-weight: 500;
    letter-spacing: -.045em;
  }
  .details {
    color: #69645c;
    font-size: .78rem;
    line-height: 1.65;
  }
  .details strong {
    display: block;
    margin-bottom: 7px;
    color: #39362f;
    font-size: .63rem;
    text-transform: uppercase;
    letter-spacing: .11em;
  }
  .stack { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 12px; }
  .stack span {
    padding: 5px 7px;
    border: 1px solid #d4c9b9;
    color: #716a60;
    font-size: .57rem;
    border-radius: 999px;
  }
  .arrow {
    width: 36px; height: 36px;
    display: grid; place-items: center;
    border: 1px solid #bba98e;
    border-radius: 50%;
    color: var(--gold-dark);
    transition: background 180ms ease, color 180ms ease, transform 180ms ease;
  }
  &:hover .arrow { background: var(--gold-dark); color: white; transform: translateX(3px); }
  @media (max-width: 820px) {
    grid-template-columns: 55px 1fr 40px;
    .details { grid-column: 2; }
    .arrow { grid-column: 3; grid-row: 1; }
  }
  @media (max-width: 560px) {
    grid-template-columns: 42px 1fr 34px;
    min-height: 0;
    .details { grid-column: 2 / 4; }
    h3 { font-size: 1.65rem; }
  }
`;
const WorkPrinciples = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 58px;
  border: 1px solid #cfc4b3;
  background: #cfc4b3;
  div { padding: 22px 20px; background: #f8f3eb; }
  span { display: block; color: var(--gold-dark); font: 700 .58rem/1 "SFMono-Regular", Consolas, monospace; letter-spacing: .12em; }
  strong { display: block; margin-top: 12px; font-family: Georgia, serif; font-size: 1.15rem; font-weight: 500; }
  p { margin: 7px 0 0; color: #706a61; font-size: .72rem; line-height: 1.55; }
  @media (max-width: 650px) { grid-template-columns: 1fr; }
`;
const InsightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;
const InsightCard = styled.article`
  min-height: 260px;
  padding: 28px;
  border: 1px solid var(--line);
  background: var(--surface);
  display: flex;
  flex-direction: column;
  transition: transform 180ms ease, box-shadow 180ms ease;
  &:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(49,40,28,.08); }
  .label { color: var(--gold); font: 700 .62rem/1 "SFMono-Regular", Consolas, monospace; letter-spacing: .12em; }
  h3 { margin: auto 0 10px; font-family: Georgia, serif; font-size: clamp(1.55rem, 2.6vw, 2.25rem); line-height: 1; font-weight: 500; letter-spacing: -.04em; }
  p { margin: 0; color: var(--muted); line-height: 1.65; font-size: .82rem; }
`;
const Process = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  @media (max-width: 760px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;
const Step = styled.article`
  padding: 25px 22px 30px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  .step { color: var(--gold); font: 700 .65rem/1 "SFMono-Regular", Consolas, monospace; }
  h3 { margin: 46px 0 8px; font-family: Georgia, serif; font-size: 1.45rem; font-weight: 500; }
  p { margin: 0; color: var(--muted); font-size: .88rem; line-height: 1.65; }
`;
const DarkBand = styled.section`
  background: var(--ink);
  color: #f7f2e9;
  padding: 94px 0;
  .inner { display: grid; grid-template-columns: .8fr 1.2fr; gap: 70px; align-items: center; }
  h2 { margin: 0; max-width: 500px; font-family: Georgia, serif; font-size: clamp(2.5rem, 5vw, 4.6rem); line-height: .98; font-weight: 500; }
  p { color: #b9bec7; line-height: 1.75; }
  @media (max-width: 820px) { .inner { grid-template-columns: 1fr; gap: 34px; } }
`;
const AiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid rgba(255,255,255,.13);
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
const AiItem = styled.div`
  padding: 23px;
  min-height: 125px;
  border-right: 1px solid rgba(255,255,255,.13);
  border-bottom: 1px solid rgba(255,255,255,.13);
  &:nth-child(2n) { border-right: 0; }
  strong { display: block; margin-bottom: 7px; color: #f1d7aa; font-family: Georgia, serif; font-size: 1.15rem; font-weight: 500; }
  span { color: #aeb3bc; font-size: .82rem; line-height: 1.55; }
`;
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: .72fr 1.28fr;
  gap: 72px;
  align-items: start;
  @media (max-width: 800px) { grid-template-columns: 1fr; gap: 35px; }
  img { width: 100%; max-width: 330px; aspect-ratio: 4/5; object-fit: cover; object-position: center top; border: 1px solid #d4cab9; }
  .lead { margin: 0; max-width: 760px; font-family: Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.8rem); line-height: 1.12; font-weight: 500; letter-spacing: -.035em; }
  .copy { margin-top: 22px; max-width: 690px; color: var(--muted); line-height: 1.8; }
`;
const Principles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 32px;
  border: 1px solid var(--line);
  background: var(--line);
  @media (max-width: 650px) { grid-template-columns: 1fr; }
  div { padding: 18px; background: var(--surface); }
  strong { display: block; font-family: Georgia, serif; font-size: 1.05rem; font-weight: 500; }
  span { display: block; margin-top: 6px; color: var(--muted); font-size: .72rem; line-height: 1.5; }
`;
const ContactBand = styled.section`
  padding: 94px 0;
  background: #e9dfce;
  .inner { display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: end; }
  h2 { max-width: 750px; margin: 0; font-family: Georgia, serif; font-size: clamp(2.8rem, 6vw, 5.2rem); line-height: .94; font-weight: 500; letter-spacing: -.05em; }
  p { max-width: 650px; margin: 18px 0 0; color: #68645d; line-height: 1.7; }
  .contact-links { display: grid; gap: 11px; }
  .contact-links a, .contact-links span { display: inline-flex; align-items: center; gap: 9px; text-decoration: none; color: #494740; font-size: .75rem; font-weight: 800; }
  @media (max-width: 760px) { .inner { grid-template-columns: 1fr; } }
`;
const Footer = styled.footer`
  padding: 28px 0;
  background: var(--ink);
  color: #aeb3bc;
  font-size: .7rem;
  .inner { display: flex; justify-content: space-between; gap: 20px; }
  a { color: #e6d6b7; text-decoration: none; }
  @media (max-width: 620px) { .inner { flex-direction: column; } }
`;

type Project = { number: string; title: string; description: string; tags: string[] };
type ServiceItem = { number: string; title: string; description: string; glyph: string };

const services: ServiceItem[] = [
  { number: "01", title: "Product Engineering", description: "MVPs to production-ready products with scalable architecture.", glyph: "◇" },
  { number: "02", title: "Scale & Performance", description: "Improve reliability, performance and systems under growing load.", glyph: "▥" },
  { number: "03", title: "Legacy Modernization", description: "Evolve existing systems incrementally without risky rewrites.", glyph: "≋" },
  { number: "04", title: "AI Engineering", description: "Bring practical AI into products, workflows and internal tools.", glyph: "✦" },
  { number: "05", title: "Technical Consulting", description: "Architecture reviews, roadmaps and hands-on technical guidance.", glyph: "◎" }
];

const projects: Project[] = [
  { number: "01", title: "Insurance Management Platform", description: "A unified platform for claims, policies, and user management with role-based workflows and reporting.", tags: ["React", "Next.js", "Spring Boot", "PostgreSQL"] },
  { number: "02", title: "Reward Management Platform", description: "Event-driven customer and reward services connected through asynchronous workflows and caching.", tags: ["Java", "Kafka", "Redis", "AWS"] },
  { number: "03", title: "Automotive Ecommerce Platform", description: "Vehicle journeys, order workflows and API orchestration across web and backend systems.", tags: ["React", "Node.js", "Spring Boot", "PostgreSQL"] }
];

const aiUseCases: [string, string][] = [
  ["AI search & RAG", "Turn internal documents and product knowledge into useful, grounded answers."],
  ["Workflow automation", "Remove repetitive operational steps while keeping humans in control."],
  ["Document intelligence", "Extract, classify and route information from unstructured documents."],
  ["Product copilots", "Add context-aware assistance where it improves an existing workflow."]
];

const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Landing = (): ReactElement => (
  <Page>
    <Header>
      <C>
        <HeaderInner>
          <Brand href="#home" onClick={(event) => scrollToSection(event, "home")}>Ashish Kumar<span>Software Engineer · Technical Consultant</span></Brand>
          <Nav>
            <a href="#home" onClick={(event) => scrollToSection(event, "home")}>Home</a>
            <a href="#work" onClick={(event) => scrollToSection(event, "work")}>Work</a>
            <a href="#services" onClick={(event) => scrollToSection(event, "services")}>Services</a>
            <a href="#approach" onClick={(event) => scrollToSection(event, "approach")}>Approach</a>
            <a href="#about" onClick={(event) => scrollToSection(event, "about")}>About</a>
            <a href="#insights" onClick={(event) => scrollToSection(event, "insights")}>Blog</a>
          </Nav>
          <HeaderCta href="#contact" onClick={(event) => scrollToSection(event, "contact")}>Let's Talk <FaArrowRight size={11} /></HeaderCta>
        </HeaderInner>
      </C>
    </Header>

    <main>
      <Hero id="home">
        <C>
          <HeroGrid>
            <HeroContent>
              <EyebrowLine><Eyebrow>Build · Scale · Modernize · AI</Eyebrow></EyebrowLine>
              <H1>Modernize.<br />Scale.<br /><span>Build What Matters.</span></H1>
              <HeroCopy>I help companies build, scale, and modernize software — from architecture and technical consulting to hands-on delivery and practical AI engineering.</HeroCopy>
              <Actions>
                <Primary href="#contact" onClick={(event) => scrollToSection(event, "contact")}>Start a project <FaArrowRight size={12} /></Primary>
                <Secondary href="#work" onClick={(event) => scrollToSection(event, "work")}>View my work</Secondary>
              </Actions>
              <Proof>
                <ProofItem><strong>5+</strong><span>Years experience</span></ProofItem>
                <ProofItem><strong>3</strong><span>Core industries</span></ProofItem>
                <ProofItem><strong>80%+</strong><span>Test coverage on key projects</span></ProofItem>
              </Proof>
              <HandNote>Engineering<br />judgment<br />on demand.</HandNote>
            </HeroContent>

            <PortraitStage>
              <PortraitGlow />
              <Portrait src={photo} alt="Ashish Kumar" />
              <StatCard>
                <Stat><strong>5+</strong><span>Years Experience</span></Stat>
                <Stat><strong>3+</strong><span>Industries &amp; domains</span></Stat>
                <Stat><strong>Full Stack</strong><span>Frontend · Backend · Cloud</span></Stat>
                <Stat><strong>Remote</strong><span>Available for projects</span></Stat>
              </StatCard>
            </PortraitStage>
          </HeroGrid>
        </C>
      </Hero>

      <ServiceStrip id="services">
        <C>
          <ServicesGrid>
            {services.map(({ number, title, description, glyph }) => (
              <Service key={number}>
                <div className="icon">{glyph}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact" onClick={(event) => scrollToSection(event, "contact")} aria-label={`Discuss ${title}`}><FaArrowRight size={12} /></a>
              </Service>
            ))}
          </ServicesGrid>
        </C>
      </ServiceStrip>

      <WorkSection id="work">
        <C>
          <WorkIntro>
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2>Not just projects.<br /><em>Problems solved.</em></h2>
            </div>
            <div className="intro-copy">
              <strong>I work across the full system.</strong> Product interfaces, APIs, services, data, messaging and cloud infrastructure — connecting the pieces when a problem does not fit neatly into one technology.
            </div>
          </WorkIntro>

          <WorkList>
            {projects.map(({ number, title, description, tags }) => (
              <WorkRow key={number}>
                <span className="index">/{number}</span>
                <div>
                  <span className="project-type">{number === "01" ? "PLATFORM" : number === "02" ? "EVENT-DRIVEN" : "ECOMMERCE"}</span>
                  <h3>{title}</h3>
                </div>
                <div className="details">
                  <strong>What I worked on</strong>
                  {description}
                  <div className="stack">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="arrow" aria-hidden="true"><FaArrowRight size={12} /></span>
              </WorkRow>
            ))}
          </WorkList>

          <WorkPrinciples>
            <div><span>01 · FRONTEND</span><strong>Interfaces that stay usable.</strong><p>React, Next.js, forms, dashboards and product workflows built around real user journeys.</p></div>
            <div><span>02 · BACKEND</span><strong>Systems that handle complexity.</strong><p>Java, Spring Boot, Node.js, APIs, PostgreSQL, Redis and asynchronous services.</p></div>
            <div><span>03 · SYSTEMS</span><strong>Architecture beyond the screen.</strong><p>Kafka, AWS, testing, observability and the engineering decisions behind reliable software.</p></div>
          </WorkPrinciples>
        </C>
      </WorkSection>

      <Section id="approach">
        <C>
          <SectionHead>
            <div><Eyebrow>My approach</Eyebrow><h2>A clear path through complicated problems.</h2></div>
            <p>I start with the business problem, make the technical constraints visible, then choose an architecture the team can actually operate.</p>
          </SectionHead>
          <Process>
            {[
              ["01", "Understand", "Clarify goals, constraints, failure modes and what success actually means."],
              ["02", "Architect", "Choose boundaries, data flows and technology with explicit trade-offs."],
              ["03", "Build", "Implement iteratively with quality, testing and useful visibility."],
              ["04", "Improve", "Measure real behaviour and keep improving the system from evidence."]
            ].map(([step, title, description]) => (
              <Step key={step}><span className="step">{step}</span><h3>{title}</h3><p>{description}</p></Step>
            ))}
          </Process>
        </C>
      </Section>

      <DarkBand id="ai">
        <C>
          <div className="inner">
            <div>
              <Eyebrow>AI engineering</Eyebrow>
              <h2>AI that earns its place.</h2>
              <p>I design AI-assisted capabilities around real data, workflows and measurable outcomes — not demos looking for a problem.</p>
              <Actions><Primary href="#contact" onClick={(event) => scrollToSection(event, "contact")}>Discuss an AI initiative <FaArrowRight size={12} /></Primary></Actions>
            </div>
            <AiGrid>{aiUseCases.map(([title, description]) => <AiItem key={title}><strong>{title}</strong><span>{description}</span></AiItem>)}</AiGrid>
          </div>
        </C>
      </DarkBand>

      <Section id="about">
        <C>
          <SectionHead>
            <div><Eyebrow>About</Eyebrow><h2>Senior engineering, without the theatre.</h2></div>
            <p>Hands-on engineering with a focus on clear communication, practical architecture and software that survives real-world constraints.</p>
          </SectionHead>
          <AboutGrid>
            <img src={photo} alt="Ashish Kumar" />
            <div>
              <p className="lead">I enjoy turning unclear requirements, tricky systems and rough ideas into software people can actually use.</p>
              <p className="copy">My work spans Insurance, E-commerce and EdTech, with a focus on React, Next.js, Java, Spring Boot, Node.js, PostgreSQL, Redis, Kafka, AWS and distributed systems.</p>
              <Principles>
                <div><strong>Evolve before you rewrite.</strong><span>Prefer incremental change when the business needs continuity.</span></div>
                <div><strong>Measure before you optimize.</strong><span>Find the bottleneck before changing the architecture.</span></div>
                <div><strong>Use AI where it pays.</strong><span>Technology should solve a real workflow, not decorate a roadmap.</span></div>
              </Principles>
            </div>
          </AboutGrid>
        </C>
      </Section>

      <Section id="insights">
        <C>
          <SectionHead>
            <div><Eyebrow>Insights</Eyebrow><h2>Engineering notes worth sharing.</h2></div>
            <p>Architecture, scaling, modernization, debugging and practical AI engineering.</p>
          </SectionHead>
          <InsightGrid>
            <InsightCard><span className="label">ARCHITECTURE</span><h3>Designing scalable systems without over-engineering.</h3><p>Patterns, trade-offs and lessons from APIs, distributed workflows and data-heavy applications.</p></InsightCard>
            <InsightCard><span className="label">MODERNIZATION</span><h3>When to evolve a legacy system instead of rewriting it.</h3><p>A practical way to identify boundaries, reduce risk and modernize incrementally.</p></InsightCard>
          </InsightGrid>
        </C>
      </Section>

      <ContactBand id="contact">
        <C>
          <div className="inner">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2>Tell me what you're dealing with.</h2>
              <p>I’ll give you a practical read on the problem, the likely path forward, and how I can contribute.</p>
              <Actions>
                <Primary href="mailto:ashish.kumar19097@gmail.com?subject=Technical%20consulting%20enquiry">Email me <FaEnvelope size={12} /></Primary>
                <Secondary href="/new.pdf">Download resume</Secondary>
              </Actions>
            </div>
            <div className="contact-links">
              <a href="mailto:ashish.kumar19097@gmail.com"><FaEnvelope />ashish.kumar19097@gmail.com</a>
              <a href="https://github.com/ashkr19" target="_blank" rel="noreferrer"><FaGithub />GitHub</a>
              <span><FaLocationDot />Bengaluru, India · Remote</span>
            </div>
          </div>
        </C>
      </ContactBand>
    </main>

    <Footer>
      <C><div className="inner"><span>© {new Date().getFullYear()} Ashish Kumar · Software Engineering & Technical Consulting.</span><a href="#home" onClick={(event) => scrollToSection(event, "home")}>Back to top ↑</a></div></C>
    </Footer>
  </Page>
);

export default Landing;
