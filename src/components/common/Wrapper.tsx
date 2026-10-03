import styled from "styled-components";

type WrapperProps = {
  inlineMargin: string;
};

export const Wrapper = styled.section<WrapperProps>`
  padding: 24px 15px;
  font-family: "Noto Sans, Helvetica, Arial, sans-serif";
  margin-inline: ${(props) => props.inlineMargin};
  color: #0f172a;

  .page-title {
    margin: 0.25rem 0;
    font-size: clamp(1.7rem, 3vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.025em;
  }

  header {
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 0;
    padding-bottom: 0.35rem;
  }

  .hr {
    width: 3.5rem;
    margin-top: 0.65rem;
    border: 0;
    border-block-end: 3px solid #14b8a6;
    border-radius: 999px;
  }

  strong {
    font-weight: bold;
  }
`;
