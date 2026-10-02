import styled from "styled-components";

type WrapperProps = {
  inlineMargin: string;
};
export const Wrapper = styled.div<WrapperProps>`
  padding: 15px;
  font-family: "Inter", Arial, sans-serif;
  margin-inline: ${(wrapperProps) => wrapperProps.inlineMargin};
  color: rgb(51, 51, 51);

  .page-title {
    font-size: 2rem;
    font-weight: bold;
  }

  header {
    border-bottom: 1px solid rgba(163, 163, 163, 0.3);
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .hr {
    border-block-end: 1px solid rgba(163, 163, 163, 0.3);
  }

  strong {
    font-weight: bold;
  }
`;
