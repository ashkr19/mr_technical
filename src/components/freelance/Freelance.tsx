import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import { FaArrowRight, FaSparkles } from "react-icons/fa6";

const FreelanceBox = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  padding: clamp(1.6rem, 5vw, 3.5rem);
  border: 1px solid rgba(184,255,106,0.25);
  border-radius: 30px;
  background:
    radial-gradient(circle at 90% 10%, rgba(244,114,182,0.18), transparent 25rem),
    radial-gradient(circle at 15% 90%, rgba(34,211,238,0.15), transparent 25rem),
    linear-gradient(135deg, #101827, #0A0F1D);
  box-shadow: 0 30px 80px rgba(0,0,0,0.25);

  &::before {
    content: "OPEN FOR SELECT PROJECTS";
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: var(--lime);
    font: 700 0.65rem/1 var(--font-mono);
    letter-spacing: 0.12em;
  }

  .spark {
    color: var(--lime);
    margin-bottom: 1.2rem;
  }

  h3 {
    max-width: 850px;
    margin: 0;
    font-size: clamp(2.1rem, 5vw, 4.6rem);
    line-height: 0.95;
    letter-spacing: -0.06em;
  }

  p {
    max-width: 680px;
    margin: 1.4rem 0 0;
    color: var(--muted);
    font-size: 1rem;
  }

  .cta-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.9rem 1.1rem;
    border-radius: 999px;
    background: var(--lime);
    color: #071008;
    text-decoration: none;
    font-weight: 850;
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  a:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(184,255,106,0.18);
  }

  .note {
    color: #64748B;
    font: 600 0.72rem/1 var(--font-mono);
  }
`;

export const Freelance = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="freelance" inlineMargin={inlineMargin}>
      <header>
        <p className="section-kicker">WORK WITH ME</p>
      </header>
      <FreelanceBox>
        <FaSparkles className="spark" size={20} />
        <h3>Have a messy idea? Let’s make it tangible.</h3>
        <p>
          New product, internal tool, API, AI-assisted workflow or a stubborn
          production issue — bring the problem. We’ll turn it into a clear next step.
        </p>
        <div className="cta-row">
          <a href="#contact">Tell me about it <FaArrowRight size={13} /></a>
          <span className="note">no pitch deck required</span>
        </div>
      </FreelanceBox>
    </Wrapper>
  );
};