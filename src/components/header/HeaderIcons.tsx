import styled from "styled-components";
import { useScrollTracking } from "../../hooks/hooks";
import { HeaderRightIcons } from "../../common/icons";
import React from "react";
import { useScrollAndMenuContext } from "../../context/context";

type HeaderCSSProps = {
  left: string;
  position: string;
};

const HeaderWrapper = styled.header<HeaderCSSProps>`
  position: ${(props) => props.position};
  top: 0;
  left: ${(props) => props.left};
  right: 0;
  width: -webkit-fill-available;
  height: 5.5rem;
  overflow: hidden;
  background: rgba(7, 10, 18, 0.72);
  border-bottom: 1px solid rgba(148,163,184,0.08);
  box-shadow: 0 15px 45px rgba(0,0,0,0.12);
  backdrop-filter: blur(18px);
  z-index: 10;
`;

const HeaderRightIconWrapper = styled.div`
  position: absolute;
  height: 100%;
  left: 2rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(148,163,184,0.1);
  color: #94A3B8;
  transition: background 180ms ease, color 180ms ease;

  &:hover {
    cursor: pointer;
    color: var(--lime);
    background: rgba(184,255,106,0.05);
  }
`;

const Header = (props: HeaderCSSProps) => {
  const { left } = props;
  const { positionType } = useScrollTracking();

  return (
    <HeaderWrapper left={left} position={positionType}>
      <RightHeader />
    </HeaderWrapper>
  );
};

const RightHeader = () => {
  const { handleMenuClick, setScrolling } = useScrollAndMenuContext();

  const menuClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleMenuClick(true);
    setScrolling(false);
  };

  return (
    <HeaderRightIconWrapper>
      {HeaderRightIcons.map((icon) => {
        const [key, IconElement] = icon.entries().next().value;
        return (
          <IconWrapper
            onClick={(event) => key === "menu" ? menuClickHandler(event) : undefined}
            key={key}
          >
            <React.Fragment>{IconElement}</React.Fragment>
          </IconWrapper>
        );
      })}
    </HeaderRightIconWrapper>
  );
};

export default Header;