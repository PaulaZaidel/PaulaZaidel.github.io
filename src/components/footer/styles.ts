import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    line-height: 20px;
  }
  h2 {
    font-size: 1.5rem;
    overflow: hidden;
    @include media(">=phone", "<lgphone") {
      display: none;
    }
    @include media(">=lgphone", "<tablet") {
      font-size: 14px;
    }
    @include media(">=tablet", "<desktop") {
      font-size: 1.2rem;
    }
  }
  .email-link {
    font-size: 1.5rem;
    color: white;
  }
  .social-icons {
    margin-top: 20px;
    img {
      height: 2rem;
      margin: 10px;
    }
  }
  span {
    margin-top: 10px;
  }
  icon {
    color: red;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  img {
    height: 2rem;
    margin: 10px;
  }
  span {
    margin-top: 10px;
  }
`;
