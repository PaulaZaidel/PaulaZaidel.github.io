import React from "react";
import styled from "styled-components";

import Container from "../container";

const Quote = () => {
  return (
    <Container bg="black">
      <Div className="phrase-container">
        <h2>Sendo 1% melhor todos os dias.</h2>
      </Div>
    </Container>
  );
};

const Div = styled.div`
  width: 80vw;
  margin: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Quote;
