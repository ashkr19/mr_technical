import styled from "styled-components";

type WrapperProps = {
  inlineMargin: string;
};

export const Wrapper = styled.section<WrapperProps>`
  position: relative;
  padding: clamp(4.5rem, 9vw, 8rem) clamp(1.1rem, 4vw, 3.5rem);
  margin-inline: ${(props) => props.inlineMargin};
  color: var(--text);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--line), transparent);
  }

  .section-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin: 0 0 0.75rem;
    color: var(--lime);
    font: 700 0.72rem/1 var(--font-mono);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .section-kicker::before {
    content: "";
    width: 22px;
    height: 1px;
    background: var(--lime);
  }

  .page-title {
    max-width: 850px;
    margin: 0;
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1;
    font-weight: 850;
    letter-spacing: -0.055em;
  }

  header {
    margin-bottom: 1.2rem;
  }

  header > p {
    max-width: 700px;
    color: var(--muted);
    font-size: clamp(0.95rem, 1.7vw, 1.08rem);
  }

  .hr {
    display: none;
  }

  strong {
    font-weight: 750;
  }
`;