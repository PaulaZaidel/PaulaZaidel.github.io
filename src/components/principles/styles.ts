import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10vh 30vh;
  grid-gap: 50px;
  @include media(">=phone", "<lgphone") {
    grid-template-columns: 1fr;
  }
  @include media(">=lgphone", "<tablet") {
    grid-template-columns: 1fr;
  }
  @include media(">=tablet", "<desktop") {
    grid-template-columns: 1fr 1fr;
  }
  .principle {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      height: 3rem;
    }
    p {
      font-size: 14px;
    }
  }
  }
`;
