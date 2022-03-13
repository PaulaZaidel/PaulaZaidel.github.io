import * as style from "./styles";
import { Fade } from "react-awesome-reveal";

import Container from "../container";

const Header = () => {
  return (
    <Container>
      <style.Main>
        <Fade direction="up">
          <h2>
            Olá Mundo!
            <span role="img" aria-label="Emoji" style={{ padding: "10px" }}>
              👋
            </span>
            Eu sou
          </h2>
        </Fade>
        <Fade direction="up" cascade>
          <div className="heading-wrapper">
            <h1>Paula Zaidel</h1>
          </div>
        </Fade>
        <Fade direction="up">
          <p>Software Engineer</p>
        </Fade>
      </style.Main>
    </Container>
  );
};

export default Header;
