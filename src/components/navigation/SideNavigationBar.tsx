import { ReactElement } from "react";
import styled from "styled-components";
import { ScreenType } from "../../utils/custom-types";
import { useScreen, useScrollAndMenuContext } from "../../context/context";
import photo from "../../assets/images/ash.jpeg";
import UnderlinedText from "../common/UnderlinedText";
import { socialMediaIconElements } from "../../common/icons";

type NavBarCSSProps = {
  width: string;
  left: string;
};

const NavBar = styled.aside<NavBarCSSProps>`
  position: fixed;
  height: 100vh;
  background: rgba(5, 7, 13, 0.86);
  border-right: 1px solid rgba(148,163,184,0.1);
  backdrop-filter: blur(18px);
  overflow-y: auto;
  left: 0;
  top: 0;
  width: ${(props) => props.width};
  transition: width 0.5s, background 0.3s;
  z-index: 20;
  box-shadow: 18px 0 60px rgba(0,0,0,0.18);
`;

const NavBarContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  padding: 3px;
  border-radius: 50%;
  background: conic-gradient(var(--lime), var(--cyan), var(--violet), var(--lime));
  animation: rotateBorder 8s linear infinite;

  @keyframes rotateBorder {
    to { transform: rotate(360deg); }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #070A12;
`;

const Name = styled.h2`
  margin: 0.9rem 0 0.2rem;
  color: var(--text);
  font-size: 1.15rem;
  font-weight: 850;
  letter-spacing: -0.04em;
`;

const Role = styled.span`
  color: var(--lime);
  font: 600 0.6rem/1 var(--font-mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const NameWrapper = styled.div`
  text-align: center;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 220px;
  margin-top: 2.2rem;
`;

const NavItem = styled.div`
  border-radius: 10px;
  transition: background 160ms ease, transform 160ms ease;

  &:hover {
    background: rgba(255,255,255,0.045);
    transform: translateX(3px);
  }

  a {
    display: block;
    width: 100%;
    padding: 0.55rem 0.7rem;
    text-decoration: none;
    color: #94A3B8;
    font-size: 0.82rem;
    font-weight: 700;
  }

  &:hover a {
    color: var(--text);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 0.35rem;
  margin-top: 2.2rem;
`;

const Social = styled.div`
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: #94A3B8;
  transition: all 180ms ease;

  &:hover {
    color: var(--lime);
    border-color: rgba(184,255,106,0.45);
    transform: translateY(-3px);
  }
`;

const SideNavigationBar = (): ReactElement => {
  const {
    isMenuButtonClicked,
    isScrollingDown,
    handleMenuClick,
    setScrolling,
  } = useScrollAndMenuContext();

  const screenType: ScreenType = useScreen();

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    event.preventDefault();
    if (!isScrollingDown) {
      handleMenuClick(false);
      setScrolling(true);
    }
  };

  const getNavBarWidth = (
    currentScreen: ScreenType,
    menuClicked: boolean,
    scrollingDown: boolean
  ): string => {
    switch (currentScreen) {
      case "desktop":
        if (scrollingDown && !menuClicked) return "300px";
        if (!menuClicked && !scrollingDown) return "100%";
        break;
      case "mobile":
      case "tabs":
        if (scrollingDown && !menuClicked) return "8px";
        if (menuClicked && !scrollingDown) return "100%";
        break;
      default:
        return "100%";
    }
    return "100%";
  };

  const handleEvent = () => {
    if (!isScrollingDown) {
      handleMenuClick(false);
      setScrolling(true);
    }
  };

  return (
    <NavBar
      id="side-nav"
      width={getNavBarWidth(screenType, isMenuButtonClicked, isScrollingDown)}
      left="0px"
      onTouchMove={handleEvent}
      onMouseDown={handleEvent}
      onScroll={handleScroll}
    >
      <NavBarContent>
        <ImageWrapper>
          <Image src={photo} alt="Portrait of Ashish Kumar" />
        </ImageWrapper>
        <NameWrapper>
          <Name>Ashish Kumar</Name>
          <Role>software engineer / builder</Role>
        </NameWrapper>
        <NavScreen />
        <SocialMediaNavigations />
      </NavBarContent>
    </NavBar>
  );
};

const NavScreen = () => {
  const navList = [
    ["Home", "home"],
    ["Build", "services"],
    ["Work", "projects"],
    ["Engineering", "engineering"],
    ["Collaborate", "freelance"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  return (
    <NavList aria-label="Main navigation">
      {navList.map(([label, targetId]) => (
        <NavItem key={label}>
          <UnderlinedText
            text={label}
            targetId={targetId}
            tag="a"
            color="#94A3B8"
            fontFamily="var(--font-sans)"
            underlinePosition="0.25rem"
            margin="0"
            fontSize="0.82rem"
          />
        </NavItem>
      ))}
    </NavList>
  );
};

export default SideNavigationBar;

const SocialMediaNavigations = () => {
  return (
    <Socials>
      {socialMediaIconElements.map((icon) => {
        const [key, value] = icon.entries().next().value;
        return <Social key={key}>{value}</Social>;
      })}
    </Socials>
  );
};