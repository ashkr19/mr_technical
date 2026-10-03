import { Wrapper } from "../common/Wrapper";
import { useScreen } from "../../context/context";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaArrowRight, FaRegClock } from "react-icons/fa";

const ContactShell = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.8fr) minmax(360px, 1.2fr);
  gap: 1px;
  margin-top: 2rem;
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
  background: var(--line);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const ContactPanel = styled.aside`
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  color: white;
  background:
    radial-gradient(circle at 80% 15%, rgba(139,92,246,0.24), transparent 15rem),
    radial-gradient(circle at 10% 90%, rgba(34,211,238,0.12), transparent 16rem),
    #0B1020;

  h3 {
    position: relative;
    margin: 0;
    max-width: 500px;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
  }

  .intro {
    position: relative;
    max-width: 500px;
    margin: 1rem 0 1.8rem;
    color: var(--muted);
  }
`;

const ContactItemWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 0;
  color: white;
  text-decoration: none;
  border-top: 1px solid rgba(255,255,255,0.08);

  svg {
    flex: 0 0 auto;
    color: var(--cyan);
  }

  strong {
    display: block;
    font: 700 0.62rem/1 var(--font-mono);
    color: #64748B;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
  }

  span {
    word-break: break-word;
    color: #E2E8F0;
  }

  &:hover span {
    color: var(--lime);
  }
`;

const MapFrame = styled.iframe`
  position: relative;
  display: block;
  width: 100%;
  height: 165px;
  margin-top: 1rem;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  opacity: 0.72;
  filter: grayscale(0.6) contrast(1.1);
`;

const FormCard = styled.div`
  padding: clamp(1.4rem, 4vw, 2.5rem);
  background: #0F172A;

  .form-heading {
    margin-bottom: 1.5rem;

    h3 {
      margin: 0 0 0.35rem;
      color: var(--text);
      font-size: clamp(1.5rem, 3vw, 2rem);
      letter-spacing: -0.04em;
    }

    p {
      margin: 0;
      color: var(--muted);
    }
  }

  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .form-control {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.45rem;
    color: #CBD5E1;
    font: 700 0.7rem/1 var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: #0A0F1D;
    color: var(--text);
    padding: 0.9rem;
    font: inherit;
    outline: none;
    transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: #475569;
  }

  input:focus,
  textarea:focus {
    border-color: rgba(34,211,238,0.65);
    background: #0B1020;
    box-shadow: 0 0 0 4px rgba(34,211,238,0.08);
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  .form-error {
    margin-top: 0.35rem;
    color: #FDA4AF;
    font-size: 0.78rem;
  }

  .submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
    margin-top: 0.25rem;
    padding: 0.95rem 1.1rem;
    border: 0;
    border-radius: 12px;
    background: var(--lime);
    color: #071008;
    font: inherit;
    font-weight: 850;
    cursor: pointer;
    transition: transform 160ms ease, box-shadow 160ms ease;
  }

  .submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(184,255,106,0.15);
  }
`;

const initialValues = { name: "", email: "", subject: "", message: "" };

const validateSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email("Enter a valid email").required("Please enter your email"),
  subject: Yup.string().required("Please add a subject"),
  message: Yup.string().required("Please tell me a little about your project"),
});

const onSubmit = (values: typeof initialValues) => {
  const subject = encodeURIComponent(values.subject);
  const body = encodeURIComponent(`From: ${values.name} (${values.email})\n\n${values.message}`);
  window.location.href = `mailto:ashish.kumar19097@gmail.com?subject=${subject}&body=${body}`;
};

const MessageForm = () => (
  <FormCard>
    <div className="form-heading">
      <h3>Let’s make the next step obvious.</h3>
      <p>Send the context. I’ll take it from there.</p>
    </div>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateSchema}>
      <Form>
        <div className="field-row">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" name="name" placeholder="Your name" autoComplete="name" />
            <ErrorMessage name="name" component="div" className="form-error" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="you@company.com" autoComplete="email" />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="subject">The problem</label>
          <Field id="subject" type="text" name="subject" placeholder="What are you trying to build or fix?" />
          <ErrorMessage name="subject" component="div" className="form-error" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Context</label>
          <Field id="message" as="textarea" name="message" placeholder="A few lines are enough. Goal, current state, constraints..." />
          <ErrorMessage name="message" component="div" className="form-error" />
        </div>
        <button className="submit" type="submit">Send it <FaArrowRight size={13} /></button>
      </Form>
    </Formik>
  </FormCard>
);

export const Contact = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";

  return (
    <Wrapper id="contact" inlineMargin={inlineMargin}>
      <header>
        <p className="section-kicker">LET’S TALK</p>
        <h2 className="page-title">Start with the problem.</h2>
      </header>
      <ContactShell>
        <ContactPanel>
          <h3>Good software starts with a useful conversation.</h3>
          <p className="intro">
            Product idea, internal tool, API, AI-assisted workflow or production issue —
            send the context and let’s figure out the next step.
          </p>
          <ContactItemWrapper href="mailto:ashish.kumar19097@gmail.com">
            <IoMdMail size={22} />
            <div><strong>Email</strong><span>ashish.kumar19097@gmail.com</span></div>
          </ContactItemWrapper>
          <ContactItemWrapper href="tel:+918507041736">
            <IoCall size={22} />
            <div><strong>Call</strong><span>+91-8507041736</span></div>
          </ContactItemWrapper>
          <ContactItemWrapper href="#contact">
            <FaLocationDot size={22} />
            <div><strong>Based in</strong><span>Electronic City, Bengaluru, India</span></div>
          </ContactItemWrapper>
          <div style={{ position: "relative", display: "flex", gap: "0.45rem", alignItems: "center", marginTop: "1rem", color: "#64748B", fontSize: "0.78rem" }}>
            <FaRegClock size={13} /> Available for selected freelance projects.
          </div>
          <MapFrame
            title="Map of Electronic City, Bengaluru"
            src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d15556.741968558763!2d77.6310152!3d12.8957911!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d12.8948281!2d77.6338468!4m3!3m2!1d12.894933499999999!2d77.6338476!5e0!3m2!1sen!2sin!4v1706935107730!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen={false}
          />
        </ContactPanel>
        <MessageForm />
      </ContactShell>
    </Wrapper>
  );
};