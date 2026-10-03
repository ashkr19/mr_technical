import { ReactElement } from "react";
import styled from "styled-components";
import SideNavigationBar from "../components/navigation/SideNavigationBar";
import { useScreen } from "../context/context";
import { ScreenType } from "../utils/custom-types";
import Header from "../components/header/HeaderIcons";
import Footer from "../components/footer/Footer";
import Introduction from "../components/into/Introduction";
import "../App.css";
import { Skills } from "../components/skills/Skills";
import { Contact } from "../components/contact/Contact";
import { Services } from "../components/service/Services";
import { AboutMe } from "../components/about/AboutMe";
import { Projects } from "../components/projects/Projects";
import { Engineering } from "../components/engineering/Engineering";
import { Freelance } from "../components/freelance/Freelance";

type PageContentCSSProps = {
  left: string;
};

const Content = styled.div`
  width: 100%;
  height: 100vh;
`;

const NavContent = styled.main<PageContentCSSProps>`
  position: absolute;
  top: 0;
  left: ${(pageContentCSSProps) => `${pageContentCSSProps.left}`};
  right: 0;
  margin-top: 5.5rem;
  margin-inline: 1.2rem;
  overflow-y: hidden;
  width: -webkit-fill-available;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
`;

const Landing = (): ReactElement => {
  return (
    <Content id="content">
      <PageContent />
      <SideNavigationBar />
    </Content>
  );
};

const PageContent = () => {
  const screenType: ScreenType = useScreen();

  const getPageLeftPosition = (): string => {
    switch (screenType) {
      case "desktop":
        return "300px";
      case "mobile":
      case "tabs":
        return "0";
      default:
        return "0";
    }
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header left={getPageLeftPosition()} position={""} />
      <NavContent id="main-content" left={getPageLeftPosition()}>
        <Introduction />
        <Skills />
        <Services />
        <Projects />
        <Engineering />
        <Freelance />
        <AboutMe />
        <Contact />
        <Footer />
      </NavContent>
    </>
  );
};

export default Landing;
