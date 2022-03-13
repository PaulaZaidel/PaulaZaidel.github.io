import styled from "styled-components";

export const Main = styled.div`
  width: 80vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
    text-align: center;
    @include media(">=phone", "<lgphone") {
      font-size: 14px;
    }
    @include media(">=lgphone", "<tablet") {
      font-size: 16px;
    }
    @include media(">=tablet", "<desktop") {
      font-size: 16px;
    }
  }
  .heading-wrapper {
    h1 {
      font-size: 4rem;
      text-align: center;
      line-height: 20px;
      @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
        line-height: 10px;
      }
    }
  }
  p {
    text-align: center;
    overflow: hidden;
  }
`;
