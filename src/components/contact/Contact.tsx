import { Wrapper } from "../common/Wrapper";
import { useScreen } from "../../context/context";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const ContactShell=styled.div`
 display:grid;grid-template-columns:.8fr 1.2fr;border:1px solid var(--line);margin-top:2rem;background:var(--panel);
 @media(max-width:850px){grid-template-columns:1fr;}
`;
const ContactPanel=styled.aside`
 padding:clamp(1.5rem,4vw,2.5rem);border-right:1px solid var(--line);
 @media(max-width:850px){border-right:0;border-bottom:1px solid var(--line);}
 h3{max-width:500px;margin:0;font-size:clamp(1.8rem,4vw,3rem);line-height:1;letter-spacing:-.05em;}
 .intro{max-width:500px;margin:1rem 0 1.8rem;color:var(--muted);}
`;
const ContactItemWrapper=styled.a`
 display:flex;align-items:center;gap:.85rem;padding:1rem 0;border-top:1px solid var(--line);text-decoration:none;
 svg{color:var(--accent);flex:0 0 auto;} strong{display:block;margin-bottom:.25rem;color:#667085;font:700 .62rem/1 var(--font-mono);text-transform:uppercase;} span{color:#D0D5DD;word-break:break-word;} &:hover span{color:var(--text);}
`;
const FormCard=styled.div`
 padding:clamp(1.4rem,4vw,2.5rem);
 .form-heading{margin-bottom:1.5rem;} .form-heading h3{margin:0 0 .35rem;font-size:clamp(1.5rem,3vw,2rem);letter-spacing:-.04em;} .form-heading p{margin:0;color:var(--muted);}
 .field-row{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;@media(max-width:600px){grid-template-columns:1fr;}}
 .form-control{margin-bottom:1rem;} label{margin-bottom:.45rem;color:#B8C1CF;font:700 .67rem/1 var(--font-mono);text-transform:uppercase;}
 input,textarea{width:100%;border:1px solid var(--line);border-radius:9px;background:#0B1018;color:var(--text);padding:.85rem;font:inherit;outline:none;}
 input::placeholder,textarea::placeholder{color:#475467;} input:focus,textarea:focus{border-color:rgba(96,165,250,.55);box-shadow:0 0 0 3px rgba(96,165,250,.08);}
 textarea{min-height:150px;resize:vertical;} .form-error{margin-top:.3rem;color:#FDA4AF;font-size:.75rem;}
 .submit{display:inline-flex;align-items:center;justify-content:center;gap:.55rem;width:100%;padding:.9rem 1rem;border:0;border-radius:9px;background:var(--text);color:#0A0E15;font-weight:800;cursor:pointer;}
`;
const initialValues={name:"",email:"",subject:"",message:""};
const validateSchema=Yup.object({name:Yup.string().required("Please enter your name"),email:Yup.string().email("Enter a valid email").required("Please enter your email"),subject:Yup.string().required("Please add a subject"),message:Yup.string().required("Please tell me a little about your project")});
const onSubmit=(values:typeof initialValues)=>{const subject=encodeURIComponent(values.subject);const body=encodeURIComponent(`From: ${values.name} (${values.email})\\n\\n${values.message}`);window.location.href=`mailto:ashish.kumar19097@gmail.com?subject=${subject}&body=${body}`;};
const MessageForm=()=> <FormCard><div className="form-heading"><h3>Let’s make the next step obvious.</h3><p>Send the context. I’ll take it from there.</p></div><Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateSchema}><Form><div className="field-row"><div className="form-control"><label htmlFor="name">Name</label><Field id="name" type="text" name="name" placeholder="Your name" autoComplete="name"/><ErrorMessage name="name" component="div" className="form-error"/></div><div className="form-control"><label htmlFor="email">Email</label><Field id="email" type="email" name="email" placeholder="you@company.com" autoComplete="email"/><ErrorMessage name="email" component="div" className="form-error"/></div></div><div className="form-control"><label htmlFor="subject">The problem</label><Field id="subject" type="text" name="subject" placeholder="What are you trying to build or fix?"/><ErrorMessage name="subject" component="div" className="form-error"/></div><div className="form-control"><label htmlFor="message">Context</label><Field id="message" as="textarea" name="message" placeholder="Goal, current state, constraints..."/><ErrorMessage name="message" component="div" className="form-error"/></div><button className="submit" type="submit">Send it <FaArrowRight size={13}/></button></Form></Formik></FormCard>;

export const Contact=()=>{const screenType=useScreen();const inlineMargin=screenType==="desktop"?"1.2rem":"0";return <Wrapper id="contact" inlineMargin={inlineMargin}><header><p className="section-kicker">LET’S TALK</p><h2 className="page-title">Start with the problem.</h2></header><ContactShell><ContactPanel><h3>Good software starts with a useful conversation.</h3><p className="intro">Product idea, internal tool, API, AI-assisted workflow or production issue — send the context and let’s figure out the next step.</p><ContactItemWrapper href="mailto:ashish.kumar19097@gmail.com"><IoMdMail size={21}/><div><strong>Email</strong><span>ashish.kumar19097@gmail.com</span></div></ContactItemWrapper><ContactItemWrapper href="tel:+918507041736"><IoCall size={21}/><div><strong>Call</strong><span>+91-8507041736</span></div></ContactItemWrapper><ContactItemWrapper href="#contact"><FaLocationDot size={21}/><div><strong>Based in</strong><span>Electronic City, Bengaluru, India</span></div></ContactItemWrapper></ContactPanel><MessageForm/></ContactShell></Wrapper>;};
