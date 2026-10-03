import styled from "styled-components";

type WrapperProps = { inlineMargin: string };

export const Wrapper = styled.section<WrapperProps>`
  position: relative;
  max-width: calc(var(--content-width) + 7rem);
  margin-inline: auto;
  padding: clamp(5rem, 9vw, 7.5rem) clamp(1.1rem, 4vw, 3.5rem);
  color: var(--text);
  scroll-margin-top: 5.5rem;

  &::after {
    content: "";
    position: absolute;
    left: clamp(1.1rem, 4vw, 3.5rem);
    right: clamp(1.1rem, 4vw, 3.5rem);
    bottom: 0;
    height: 1px;
    background: var(--line);
  }

  .section-kicker {
    display:inline-flex; align-items:center; gap:.6rem;
    margin:0 0 .8rem; color:var(--accent);
    font:700 .68rem/1 var(--font-mono); letter-spacing:.14em; text-transform:uppercase;
  }
  .section-kicker::before { content:""; width:24px; height:1px; background:var(--accent); }
  .page-title {
    max-width:780px; margin:0; font-size:clamp(2.1rem,5vw,4rem);
    line-height:1.02; font-weight:800; letter-spacing:-.055em;
  }
  header { margin-bottom:2rem; }
  header > p { max-width:680px; color:var(--muted); font-size:1rem; margin-bottom:0; }
  strong { font-weight:750; }
`;
