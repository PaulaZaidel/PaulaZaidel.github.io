import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media all and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    height: 3rem;
  }

  p {
    width: 70%;
    font-size: 14px;
  }

  @media all and (max-width: 600px) {
    p {
      width: 100%;
    }
  }
`;
