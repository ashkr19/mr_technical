import { ReactElement } from "react";
import {
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDev, FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaJava } from "react-icons/fa6";
import { SiEclipseide } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import web from "../assets/images/web.png";
import mob from "../assets/images/mob.png";
import crm from "../assets/images/crm.png";
import inno from "../assets/images/inno.png";
import games from "../assets/images/games.png";
import bots from "../assets/images/bots.png";
import { Link } from "react-router-dom";

//Side navigation bar icons
export const socialMediaIconElements: Map<String, ReactElement>[] = [
  new Map<String, ReactElement>().set(
    "github",
    <Link to={"https://github.com/ashkr19"}>
      <AiOutlineGithub color="white" />
    </Link>
  ),
  new Map<String, ReactElement>().set(
    "twitter",
    <Link to={"https://twitter.com/ashwaraj2719"}>
      <AiOutlineTwitter color="white" />
    </Link>
  ),
  new Map<String, ReactElement>().set(
    "linkdin",
    <Link to={"https://www.linkedin.com/in/ashish-kumar-4/"}>
      <FaLinkedinIn color="white" />
    </Link>
  ),
  new Map<String, ReactElement>().set(
    "dev",
    <Link to={"https://dev.to/ashishkr"}>
      <FaDev color="white" />
    </Link>
  ),
  new Map<String, ReactElement>().set(
    "medium",
    <Link to={"https://medium.com/@ashish.kumar19097"}>
      <AiOutlineMedium color="white" />
    </Link>
  ),
];

//Left side Header Icons
export const HeaderLeftIcons: Map<string, ReactElement>[] = [
  new Map<string, ReactElement>().set(
    "github",
    <VscGithub style={{ width: "2em", height: "2em" }} />
  ),
];

export const HeaderRightIcons: Map<string, ReactElement>[] = [
  new Map<string, ReactElement>().set(
    "menu",
    <GiHamburgerMenu style={{ width: "1.5em", height: "1.5em" }} />
  ),
  new Map<string, ReactElement>().set(
    "github",
    <Link
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
      to={"https://github.com/ashishkrr"}
    >
      <AiOutlineGithub style={{ width: "1.5em", height: "1.5em" }} />
    </Link>
  ),
];

export const SkillsIcons: Map<string, ReactElement>[] = [
  new Map<string, ReactElement>().set(
    "java",
    <FaJava style={{ width: "1.5em", height: "1.5em" }} />
  ),
  new Map<string, ReactElement>().set(
    "github",
    <AiOutlineGithub style={{ width: "1.5em", height: "1.5em" }} />
  ),
  new Map<string, ReactElement>().set(
    "eclipes",
    <SiEclipseide style={{ width: "1.5em", height: "1.5em" }} />
  ),
  new Map<string, ReactElement>().set(
    "jira",
    <SiJira style={{ width: "1.5em", height: "1.5em" }} />
  ),
  new Map<string, ReactElement>().set(
    "postman",
    <SiPostman style={{ width: "1.5em", height: "1.5em" }} />
  ),
  new Map<string, ReactElement>().set(
    "jenkins",
    <FaJenkins style={{ width: "1.5em", height: "1.5em" }} />
  ),
];

//skills images
export const TechImages: string[] = [];

//services images
export const serviceImages: string[] = [web, mob, crm, games, bots, inno];

export const services: Map<string, string>[] = [
  new Map<string, string>().set(
    "Web Development",
    "Adept at integrating cutting-edge technologies into web projects. Committed to delivering exceptional user-centric web experiences."
  ),
  new Map<string, string>().set(
    "Mobile Apps",
    "Crafting intuitive mobile apps for a seamless user experience and optimizing apps for optimal performance and usability."
  ),
  new Map<string, string>().set(
    "CRM Tools",
    "Crafting intuitive mobile apps for a seamless user experience and optimizing apps for optimal performance and usability."
  ),
  new Map<string, string>().set(
    "Web Games",
    "Committed to providing users with exciting and interactive web gaming experiences. Efficient coding for dynamic and visually stunning web game interfaces."
  ),
  new Map<string, string>().set(
    "Chat Bots",
    "Building intelligent chat bots for seamless and personalized user interactions. Proficient in end-to-end chat bot development for diverse applications."
  ),
  new Map<string, string>().set(
    "Innovative Ideas",
    "Pioneering inventive ideas to solve challenges and inspire transformation. Championing creativity to bring fresh, inventive approaches to the forefront."
  ),
];
