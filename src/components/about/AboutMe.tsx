import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import pho from "../../assets/images/ash.jpeg";

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 0.45fr) minmax(0, 1fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Portrait = styled.div`
  position: relative;
  max-width: 300px;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 24px;
    filter: saturate(0.85);
    border: 1px solid var(--line);
  }

  &::after {
    content: "ASHISH / BUILDER";
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    padding: 0.45rem 0.6rem;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 999px;
    background: rgba(7,10,18,0.72);
    color: var(--lime);
    font: 700 0.62rem/1 var(--font-mono);
    backdrop-filter: blur(10px);
  }
`;

const Copy = styled.div`
  .lead {
    max-width: 850px;
    margin: 0;
    color: #E2E8F0;
    font-size: clamp(1.45rem, 3vw, 2.3rem);
    line-height: 1.15;
    letter-spacing: -0.035em;
  }

  .detail {
    max-width: 720px;
    margin-top: 1.3rem;
    color: var(--muted);
  }

  .signals {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 1.5rem;
  }

  .signals span {
    padding: 0.42rem 0.6rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: #CBD5E1;
    font: 600 0.68rem/1 var(--font-mono);
  }
`;

const AboutMe = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="about" inlineMargin={inlineMargin}>
      <header>
        <p className="section-kicker">A LITTLE CONTEXT</p>
        <h2 className="page-title">I like the part where things get complicated.</h2>
      </header>
      <AboutLayout>
        <Portrait><img src={pho} alt="Portrait of Ashish Kumar" /></Portrait>
        <Copy>
          <p className="lead">
            I’m a software engineer who enjoys turning unclear requirements,
            tricky systems and rough ideas into something people can actually use.
          </p>
          <p className="detail">
            My work has taken me through Insurance, E-commerce and EdTech.
            I’m most interested in the intersection of product behaviour and
            engineering underneath it: APIs, data, distributed workflows,
            performance and practical AI-assisted experiences.
          </p>
          <div className="signals">
            <span>CURIOUS</span><span>SYSTEMS THINKING</span><span>HANDS-ON</span><span>ALWAYS LEARNING</span>
          </div>
        </Copy>
      </AboutLayout>
    </Wrapper>
  );
};

export default AboutMe;