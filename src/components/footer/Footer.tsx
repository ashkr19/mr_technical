import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 2rem clamp(1rem, 4vw, 3.5rem);
  margin-bottom: 2rem;
  border-top: 1px solid var(--line);
  color: #64748B;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <small>© {new Date().getFullYear()} Ashish Kumar · built with curiosity.</small>
      <a
        href={`${process.env.PUBLIC_URL}/new.pdf`}
        download
        style={{
          color: "var(--lime)",
          textDecoration: "none",
          font: "700 0.7rem/1 var(--font-mono)",
          letterSpacing: "0.08em",
        }}
      >
        DOWNLOAD RESUME ↗
      </a>
    </FooterContainer>
  );
};

export default Footer;