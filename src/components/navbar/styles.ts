import styled from "styled-components";

export const Navigation = styled.ul`
  padding: 0 40px 0 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  list-style: none;
  margin: 0;
  background: #111;

  .logo {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    flex: 1;
    padding: 1em;
    color: white;
  }

  a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: white;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media all and (max-width: 800px) {
    justify-content: space-around;
  }

  @media all and (max-width: 600px) {
    flex-flow: column wrap;
    padding: 0;

    .logo {
      text-align: center;
    }

    a {
      text-align: center;
      padding: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    li:last-of-type a {
      border-bottom: none;
    }
  }
`;
