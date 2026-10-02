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

const NavBar = styled.div<NavBarCSSProps>`
  position: fixed;
  height: 100vh;
  background-color: black;
  overflow-y: scroll;
  left: 0;
  top: 0;
  width: ${(navBarCssProps) => navBarCssProps.width};
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
  font-family: "Inter", Arial, sans-serif;
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

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isScrollingDown) {
      handleMenuClick(false);
      setScrolling(true);
    }
  };

  const getNavBarWidth = (
    screenType: ScreenType,
    isMenuButtonClicked: boolean,
    isScrollingDown: boolean
  ): string => {
    switch (screenType) {
      case "desktop":
        if (isScrollingDown && !isMenuButtonClicked) {
          return "300px";
        } else if (!isMenuButtonClicked && !isScrollingDown) {
          console.log("here--came desk");
          return "100%";
        }
        break;

      case "mobile":
      case "tabs":
        if (isScrollingDown && !isMenuButtonClicked) {
          return "8px";
        } else if (isMenuButtonClicked && !isScrollingDown) {
          console.log("here--came mob/tab");
          return "100%";
        }
        break;

      default:
        return "100%";
    }
    return "100%";
  };

  const handleEvent = (event: any) => {
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
      onTouchMove={(event) => handleEvent(event)}
      onMouseDown={(event) => handleEvent(event)}
      onScroll={(event) => handleScroll(event)}
    >
      <NavBarContent>
        <ImageWrapper>
          <Image src={photo} />
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
    "Heyi",
    "Skills",
    "Services",
    "About",
    "Contact",
  ];

  return (
    <div
      style={{ marginTop: "2rem", display: "flex", flexDirection: "column" , alignItems: "center"}}
    >
      {navList.map((item, key) => {
        return (
          <UnderlinedText
            key={item}
            text={item}
            tag={"a"}
            color="white"
            fontFamily="Inter, Arial, sans-serif"
            underlinePosition={""}
            margin="0.4rem"
            fontSize="1.1rem"
          />
        );
      })}
    </div>
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
          <SocialMediaIconWrapper key={key}>
           {value}
          </SocialMediaIconWrapper>
        );
      })}
    </div>
  );
};
