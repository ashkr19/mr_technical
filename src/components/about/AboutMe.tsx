import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import pho from "../../assets/images/ash.jpeg";
export const AboutMe = () => {
    const screenType = useScreen();
    const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";
    return (
      <Wrapper id="about" inlineMargin={inlineMargin}>
        <header>
          <h1 className="page-title">Who am I?</h1>
          <div className="hr pb0" />
        </header>
        <div>
          <img
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              float: "right",
            }}
            src={pho}
            alt=""
          />
          <p
            style={{
              fontFamily: "Inter, Arial, sans-serif",
              lineHeight: 1.4,
              fontSize: "1.1rem",
              fontWeight: 400,
              padding: 10,
              color: "rgb(51, 51, 51)",
            }}
          >
            <strong>Ashish</strong> works in Software Industries, He is a
            self-motivated person and keeps lots of interest in many different IT
            Domains. He describes himself as a <strong>curious learner</strong>,{" "}
            <strong>Multipotentialite</strong> and a <strong>nerdy geek</strong>.
            Hobbies and Passions? <strong>Leadership</strong>,{" "}
            <strong>Software Engineering</strong>, <strong>Cyber Security</strong>{" "}
            and <strong>Science</strong>. Other things? Amateur (frustrated) cook.
          </p>
        </div>
      </Wrapper>
    );
  };
  