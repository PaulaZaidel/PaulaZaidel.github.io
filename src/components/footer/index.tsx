import React from "react";
import * as style from "./styles";
import { Fade } from "react-awesome-reveal";
import Container from "../container";

import githubIcon from "../../images/github.svg";
import instagramIcon from "../../images/instagram.svg";
import linkedinIcon from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <Container bg="black">
      <style.Main>
        <Fade direction="up" cascade>
          <h1>Contato</h1>
          <h2>Vamos criar sua próxima experiência juntos!</h2>
        </Fade>
        <a className="email-link" href={`mailto:paulazaaidel@gmail.com`}>
          paulazaaidel@gmail.com
        </a>
        <style.SocialIcons>
          <a
            href="https://github.com/paulazaidel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="icons"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/paulazaidel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="icons"></img>
          </a>
          <a
            href="https://www.instagram.com/paulazaidel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="icons"></img>
          </a>
        </style.SocialIcons>
        <span>© 2022</span>
      </style.Main>
    </Container>
  );
};

export default Footer;
