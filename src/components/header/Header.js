import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  workExperiences,
  educationInfo,
  skillsSection,
  openSource,
  cartographicExamples,
  deployedProjects,
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewOpenSource = openSource.display;
  const viewCartographicExamples = cartographicExamples.display;
  const viewDeployedApps=deployedProjects.display;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"></span>
          <span className="grey-color"></span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewCartographicExamples && (
            <li>
              <a href="#cartographicexamples">Cartographic Examples</a>
            </li>
          )}     
          {viewDeployedApps && (
            <li>
              <a href="#deployedapps">Deployed Apps</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">GitHub Projects</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
