import React from "react";
import styled from "styled-components";

import Container from "../container";

const Quote = () => {
  return (
    <Container bg="black">
      <Div className="phrase-container">
        <h2>
          "Para realizar uma grande mudança no mundo, primeiro precisamos nos
          comprometer a uma pequena ação constante."
        </h2>
      </Div>
    </Container>
  );
};

const Div = styled.div`
  margin: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media all and (min-width: 900px) {
    width: 50vw;
  }
`;

export default Quote;
