import * as style from "./styles";
import Container from "../container";

const Navbar = () => {
  return (
    <Container bg="black">
      <style.Navbar>
        <div role="button" className="name" tabIndex={0}>
          paulazaidel.dev
        </div>
        <div className="links-wrapper">
          <button>Work</button>
          <button>Sobre</button>
          <button>Contato</button>
        </div>
      </style.Navbar>
    </Container>
  );
};

export default Navbar;
