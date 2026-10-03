import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import pho from "../../assets/images/ash.jpeg";

const AboutLayout = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-top: 1.2rem;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

const AboutImage = styled.img`
  width: 9rem;
  height: 9rem;
  flex: 0 0 9rem;
  border-radius: 50%;
  object-fit: cover;
`;

const AboutMe = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="about" inlineMargin={inlineMargin}>
      <header>
        <h2 className="page-title">About Ashish</h2>
        <div className="hr pb0" />
      </header>
      <AboutLayout>
        <div>
          <p>
            I’m a Senior Software Engineer and Full Stack Developer with 5+
            years of experience building production applications across
            Insurance, E-commerce and EdTech.
          </p>
          <p>
            My primary engineering stack is Java, Spring Boot, React and
            Node.js, with experience designing REST APIs, microservices,
            data-driven applications, asynchronous workflows, caching and
            cloud-based systems.
          </p>
          <p>
            I enjoy problems where software needs to be more than functional:
            it should be reliable, observable, maintainable and ready for
            production.
          </p>
          <p>
            I’m also interested in AI-powered applications, system design,
            distributed systems and practical technical problem solving. I
            work with businesses and individuals who need help turning an
            idea, workflow or technical problem into working software.
          </p>
        </div>
        <AboutImage src={pho} alt="Portrait of Ashish Kumar" />
      </AboutLayout>
    </Wrapper>
  );
};

export default AboutMe;
