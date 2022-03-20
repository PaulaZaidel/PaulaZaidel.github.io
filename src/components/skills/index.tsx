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
          <h1>Habilidades</h1>
        </Fade>
      </style.Header>
      <style.Grid>
        <style.Item>
          <img src={desktopIcon} alt="css"></img>
          <h2>Sistemas Web</h2>
          <p>
            Planeando e desenvolvendo soluções web responsivas para todos os
            tipos de telas, utilizando as melhores práticas para oferecer e
            entregar em alta qualidade os projetos.
          </p>
        </style.Item>
        <style.Item>
          <img src={mobileIcon} alt="css"></img>
          <h2>Aplicativos para celular</h2>
          <p>
            Planeando e desenvolvendo aplicações para Android e iOS, utilizando
            as melhores práticas para oferecer e entregar em alta qualidade os
            projetos.
          </p>
        </style.Item>
      </style.Grid>
    </Container>
  );
};

export default Skills;
