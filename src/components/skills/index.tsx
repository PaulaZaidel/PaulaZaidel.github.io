import React from "react";
import * as style from "./styles";
import { Fade } from "react-awesome-reveal";

import Container from "../container";

import mobileIcon from "../../images/mobile.svg";
import desktopIcon from "../../images/desktop.svg";

const Skills = () => {
  return (
    <Container>
      <style.Header>
        <Fade direction="up" cascade>
          <h1>Skills</h1>
        </Fade>
      </style.Header>
      <style.Grid>
        <div className="skill">
          <img src={desktopIcon} alt="css"></img>
          <h2>Sistemas Web</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="skill">
          <img src={mobileIcon} alt="css"></img>
          <h2>Aplicativos para celular</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </style.Grid>
    </Container>
  );
};

export default Skills;
