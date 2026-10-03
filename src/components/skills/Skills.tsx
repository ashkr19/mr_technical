import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  max-width: 1000px;
  margin-top: 2rem;
`;

const Pill = styled.span<{ hot?: boolean }>`
  position: relative;
  padding: 0.7rem 0.95rem;
  border: 1px solid ${(p) => p.hot ? "rgba(184,255,106,0.45)" : "var(--line)"};
  border-radius: 999px;
  color: ${(p) => p.hot ? "var(--lime)" : "#CBD5E1"};
  background: ${(p) => p.hot ? "rgba(184,255,106,0.06)" : "rgba(255,255,255,0.025)"};
  font: 650 0.78rem/1 var(--font-mono);
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
  cursor: default;

  &:hover {
    transform: translateY(-4px) rotate(-1deg);
    border-color: rgba(34,211,238,0.5);
    background: rgba(34,211,238,0.06);
    color: var(--cyan);
  }
`;

const StackCanvas = styled.div`
  position: relative;
  min-height: 300px;
  margin-top: 2.2rem;
  padding: 2rem;
  border: 1px solid var(--line);
  border-radius: 28px;
  background:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px),
    #0A0F1D;
  background-size: 32px 32px;
  overflow: hidden;

  .glow {
    position: absolute;
    width: 240px;
    height: 240px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.22), transparent 68%);
  }

  .core {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
    width: 130px;
    height: 130px;
    border: 1px solid rgba(34,211,238,0.45);
    border-radius: 50%;
    background: rgba(7,10,18,0.9);
    box-shadow: 0 0 60px rgba(34,211,238,0.12);
    color: var(--text);
    font-weight: 850;
    letter-spacing: -0.03em;
  }

  .core small {
    display: block;
    color: var(--lime);
    font: 650 0.62rem/1 var(--font-mono);
    letter-spacing: 0.1em;
    text-align: center;
  }

  .orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 310px;
    height: 170px;
    border: 1px dashed rgba(139,92,246,0.35);
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(-12deg);
  }

  .orbit::before,
  .orbit::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--cyan);
    box-shadow: 0 0 16px var(--cyan);
  }

  .orbit::before { left: 10%; top: 50%; }
  .orbit::after { right: 10%; top: 50%; background: var(--pink); box-shadow: 0 0 16px var(--pink); }

  .label {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #64748B;
    font: 600 0.68rem/1 var(--font-mono);
  }

  @media (max-width: 600px) {
    min-height: 360px;

    .orbit {
      width: 270px;
    }
  }
`;

const stacks = ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Kafka", "AWS", "Docker", "Jest", "GitHub Actions"];

export const Skills = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="skills" inlineMargin={inlineMargin}>
      <header>
        <p className="section-kicker">THE TOOLBOX</p>
        <h2 className="page-title">Tools I reach for.</h2>
        <p>Not a badge wall. A working toolkit for turning ideas into software.</p>
      </header>
      <StackCanvas>
        <span className="label">STACK / 01</span>
        <div className="glow" />
        <div className="orbit" />
        <div className="core"><div><small>PRIMARY</small> FULL<br />STACK</div></div>
        <Stack>
          {stacks.map((stack, index) => <Pill key={stack} hot={index < 4}>{stack}</Pill>)}
        </Stack>
      </StackCanvas>
    </Wrapper>
  );
};