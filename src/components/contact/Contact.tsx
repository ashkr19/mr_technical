import { ReactElement } from "react";
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
  gap: 1.2rem;
  margin-top: 1.5rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const ContactPanel = styled.aside`
  position: relative;
  overflow: hidden;
  padding: 1.6rem;
  border-radius: 20px;
  color: white;
  background: linear-gradient(145deg, #111827 0%, #172554 55%, #0f766e 130%);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);

  &::before {
    content: "";
    position: absolute;
    width: 190px;
    height: 190px;
    right: -80px;
    top: -80px;
    border-radius: 50%;
    background: rgba(45, 212, 191, 0.16);
  }

  h3 {
    position: relative;
    margin: 0;
    font-size: 1.5rem;
  }

  .intro {
    position: relative;
    margin: 0.7rem 0 1.4rem;
    color: #cbd5e1;
    line-height: 1.6;
  }
`;

const ContactItemWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.8rem 0;
  color: white;
  text-decoration: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    flex: 0 0 auto;
    color: #5eead4;
  }

  strong {
    display: block;
    font-size: 0.85rem;
    color: #94a3b8;
    margin-bottom: 0.15rem;
  }

  span {
    word-break: break-word;
  }

  &:hover span {
    color: #99f6e4;
  }
`;

const MapFrame = styled.iframe`
  position: relative;
  display: block;
  width: 100%;
  height: 175px;
  margin-top: 1rem;
  border: 0;
  border-radius: 12px;
  opacity: 0.86;
`;

const FormCard = styled.div`
  padding: clamp(1.3rem, 3vw, 2rem);
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);

  .form-heading {
    margin-bottom: 1.4rem;

    h3 {
      margin: 0 0 0.35rem;
      font-size: 1.5rem;
      color: #0f172a;
    }

    p {
      margin: 0;
      color: #64748b;
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
    color: #334155;
    font-size: 0.88rem;
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    background: #f8fafc;
    color: #0f172a;
    padding: 0.82rem 0.9rem;
    font: inherit;
    outline: none;
    transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
  }

  input:focus,
  textarea:focus {
    border-color: #14b8a6;
    background: white;
    box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.12);
  }

  textarea {
    min-height: 145px;
    resize: vertical;
  }

  .form-error {
    margin-top: 0.35rem;
    color: #dc2626;
    font-size: 0.78rem;
  }

  .submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
    margin-top: 0.25rem;
    padding: 0.9rem 1.1rem;
    border: 0;
    border-radius: 10px;
    background: linear-gradient(135deg, #0f766e, #0f172a);
    color: white;
    font: inherit;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 10px 22px rgba(15, 118, 110, 0.2);
    transition: transform 160ms ease, box-shadow 160ms ease;
  }

  .submit:hover {
    transform: translateY(-1px);
    box-shadow: 0 13px 28px rgba(15, 118, 110, 0.28);
  }
`;

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validateSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email("Enter a valid email").required("Please enter your email"),
  subject: Yup.string().required("Please add a subject"),
  message: Yup.string().required("Please tell me a little about your project"),
});

const onSubmit = (values: typeof initialValues) => {
  const subject = encodeURIComponent(values.subject);
  const body = encodeURIComponent(
    `From: ${values.name} (${values.email})\n\n${values.message}`
  );
  window.location.href = `mailto:ashish.kumar19097@gmail.com?subject=${subject}&body=${body}`;
};

const MessageForm = () => (
  <FormCard>
    <div className="form-heading">
      <h3>Let’s build something useful.</h3>
      <p>Tell me what you’re building, what’s not working, or what you want to improve.</p>
    </div>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validateSchema}
    >
      <Form>
        <div className="field-row">
          <div className="form-control">
            <label htmlFor="name">Your name</label>
            <Field id="name" type="text" name="name" placeholder="John Doe" autoComplete="name" />
            <ErrorMessage name="name" component="div" className="form-error" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email address</label>
            <Field id="email" type="email" name="email" placeholder="you@company.com" autoComplete="email" />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="subject">What can I help with?</label>
          <Field id="subject" type="text" name="subject" placeholder="Web app, API, AI feature, performance issue..." />
          <ErrorMessage name="subject" component="div" className="form-error" />
        </div>

        <div className="form-control">
          <label htmlFor="message">Project details</label>
          <Field
            id="message"
            as="textarea"
            name="message"
            placeholder="Share your goal, current problem, timeline, or anything useful..."
          />
          <ErrorMessage name="message" component="div" className="form-error" />
        </div>

        <button className="submit" type="submit">
          Send Project Brief <FaArrowRight size={14} />
        </button>
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
        <h2 className="page-title">Let’s Talk</h2>
        <div className="hr pb0" />
      </header>
      <ContactShell>
        <ContactPanel>
          <h3>Have a project in mind?</h3>
          <p className="intro">
            Whether it’s a new product, backend system, AI feature, or a
            production problem, send me the details and let’s start a conversation.
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

          <div style={{ position: "relative", display: "flex", gap: "0.45rem", alignItems: "center", marginTop: "1rem", color: "#94a3b8", fontSize: "0.82rem" }}>
            <FaRegClock size={13} /> Usually responds within a reasonable working window.
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
