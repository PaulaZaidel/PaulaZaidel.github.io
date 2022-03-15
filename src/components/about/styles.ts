import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;

  & > * {
    flex: 1 100%;
  }

  h1 {
    font-size: 3rem;
    line-height: 20px;
    padding-bottom: 20px;
  }
`;

export const TextColumn = styled.div`
  p {
    text-align: justify;
  }

  @media all and (min-width: 900px) {
    flex: 1 0 0;
  }

  @media all and (max-width: 800px) {
    order: 2;
  }
`;

export const ImageColumn = styled.div`
  margin-bottom: auto;

  img {
    height: 75%;
    width: 75%;
  }

  @media all and (min-width: 900px) {
    flex: 1 0 0;
  }

  @media all and (max-width: 800px) {
    margin: auto;
    order: 1;

    img {
      width: 90%;
    }
  }
`;
