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
  background-color: black;
  overflow-y: scroll;
  left: 0;
  top: 0;
  width: ${(props) => props.width};
  transition: width 0.5s;
  z-index: 2;
`;

const NavBarContent = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  background-color: #2c2f3f;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h2`
  color: white;
  font-family: cursive;
  font-size: 1.9rem;
  padding: 0.5rem;
  margin: 0;
`;

const NameWrapper = styled.div`
  border-bottom: 1px solid white;
`;

const SocialMediaIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-bottom: 3px solid #2c2f3f;

  &:hover {
    border-bottom: 3px solid #00a6eb;
    cursor: pointer;
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
    ["What I Build", "services"],
    ["Selected Work", "projects"],
    ["Engineering", "engineering"],
    ["Freelance", "freelance"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  return (
    <nav
      aria-label="Main navigation"
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {navList.map(([label, targetId]) => (
        <UnderlinedText
          key={label}
          text={label}
          targetId={targetId}
          tag="a"
          color="white"
          fontFamily="cursive"
          underlinePosition=""
          margin="0.35rem"
          fontSize="1rem"
        />
      ))}
    </nav>
  );
};

export default SideNavigationBar;

const SocialMediaNavigations = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        bottom: "-2rem",
      }}
    >
      {socialMediaIconElements.map((icon) => {
        const [key, value] = icon.entries().next().value;
        return (
          <SocialMediaIconWrapper key={key}>{value}</SocialMediaIconWrapper>
        );
      })}
    </div>
  );
};
