import { ReactElement } from "react";
import styled from "styled-components";
import { ScreenType } from "../../utils/custom-types";
import { useScreen, useScrollAndMenuContext } from "../../context/context";
import photo from "../../assets/images/ash.jpeg";
import UnderlinedText from "../common/UnderlinedText";
import { socialMediaIconElements } from "../../common/icons";

type NavBarCSSProps={width:string;left:string};
const NavBar=styled.aside<NavBarCSSProps>`
 position:fixed;height:100vh;background:rgba(8,11,18,.96);border-right:1px solid var(--line);overflow-y:auto;left:0;top:0;width:${p=>p.width};transition:width .35s ease;z-index:20;
`;
const NavBarContent=styled.div`display:flex;width:100%;min-height:100vh;padding:2rem 1.2rem;flex-direction:column;justify-content:center;align-items:center;`;
const ImageWrapper=styled.div`width:5.2rem;height:5.2rem;padding:2px;border:1px solid var(--line-strong);border-radius:50%;`;
const Image=styled.img`width:100%;height:100%;border-radius:50%;object-fit:cover;border:2px solid #080B12;`;
const Name=styled.h2`margin:.9rem 0 .2rem;color:var(--text);font-size:1.1rem;font-weight:800;letter-spacing:-.04em;`;
const Role=styled.span`color:var(--accent);font:600 .58rem/1 var(--font-mono);letter-spacing:.12em;text-transform:uppercase;`;
const NameWrapper=styled.div`text-align:center;`;
const NavList=styled.nav`display:flex;flex-direction:column;align-items:stretch;width:100%;max-width:220px;margin-top:2.2rem;`;
const NavItem=styled.div`border-radius:8px;transition:background 140ms ease;&:hover{background:rgba(255,255,255,.035);}a{display:block;width:100%;padding:.5rem .65rem;text-decoration:none;color:#98A2B3;font-size:.8rem;font-weight:700;}&:hover a{color:var(--text);}`;
const Socials=styled.div`display:flex;gap:.35rem;margin-top:2rem;`;
const Social=styled.div`display:grid;place-items:center;width:2.1rem;height:2.1rem;border:1px solid var(--line);border-radius:8px;color:#98A2B3;&:hover{color:var(--accent);border-color:rgba(96,165,250,.4);}`;

const SideNavigationBar=():ReactElement=>{
 const {isMenuButtonClicked,isScrollingDown,handleMenuClick,setScrolling}=useScrollAndMenuContext();
 const screenType:ScreenType=useScreen();
 const handleScroll=(event:React.UIEvent<HTMLElement>)=>{event.preventDefault();if(!isScrollingDown){handleMenuClick(false);setScrolling(true);}};
 const getNavBarWidth=(current:ScreenType,menu:boolean,scrolling:boolean):string=>{switch(current){case"desktop":if(scrolling&&!menu)return"300px";if(!menu&&!scrolling)return"100%";break;case"mobile":case"tabs":if(scrolling&&!menu)return"8px";if(menu&&!scrolling)return"100%";break;default:return"100%";}return"100%";};
 const handleEvent=()=>{if(!isScrollingDown){handleMenuClick(false);setScrolling(true);}};
 return <NavBar id="side-nav" width={getNavBarWidth(screenType,isMenuButtonClicked,isScrollingDown)} left="0px" onTouchMove={handleEvent} onMouseDown={handleEvent} onScroll={handleScroll}><NavBarContent><ImageWrapper><Image src={photo} alt="Portrait of Ashish Kumar"/></ImageWrapper><NameWrapper><Name>Ashish Kumar</Name><Role>software engineer / builder</Role></NameWrapper><NavScreen/><SocialMediaNavigations/></NavBarContent></NavBar>;
};
const NavScreen=()=>{const navList=[["Home","home"],["Build","services"],["Work","projects"],["Engineering","engineering"],["Collaborate","freelance"],["About","about"],["Contact","contact"]];return <NavList aria-label="Main navigation">{navList.map(([label,targetId])=><NavItem key={label}><UnderlinedText text={label} targetId={targetId} tag="a" color="#98A2B3" fontFamily="var(--font-sans)" underlinePosition=".25rem" margin="0" fontSize=".8rem"/></NavItem>)}</NavList>;};
export default SideNavigationBar;
const SocialMediaNavigations=()=> <Socials>{socialMediaIconElements.map(icon=>{const [key,value]=icon.entries().next().value;return <Social key={key}>{value}</Social>;})}</Socials>;
