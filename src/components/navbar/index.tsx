import * as style from "./styles";

const Navbar = () => {
  return (
    <style.Navigation>
      <li className="logo">paulazaidel.dev</li>
      <li>
        <a href="#">Sobre</a>
      </li>
      <li>
        <a href="#">Skills</a>
      </li>
      <li>
        <a href="#">Contato</a>
      </li>
    </style.Navigation>
  );
};

export default Navbar;
