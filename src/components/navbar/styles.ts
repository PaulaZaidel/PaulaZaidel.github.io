import styled from "styled-components";

export const Navbar = styled.div`
  width: 80vw;
  margin: 0.9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .name {
    font-weight: 600;
    letter-spacing: 2px;
  }

  .links-wrapper {
    button {
      color: white;
      text-decoration: none;
      padding: 10px;
      font-family: "Open Sans";
      opacity: 0.6;
      transition: all 0.2s ease-in-out;
      font-size: 12px;
      background-color: transparent;
      outline: none;
      border: 0px;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }

    .active {
      color: black;
    }
  }
`;
