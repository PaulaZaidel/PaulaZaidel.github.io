import { ReactNode } from "react";
import styled from "styled-components";

type ContainerProps = {
  children: ReactNode;
  bg?: string;
};

const Container = ({ children, bg = "white" }: ContainerProps) => {
  return (
    <Div bg={bg}>
      <ContainerStyle>
        <div>{children}</div>
      </ContainerStyle>
    </Div>
  );
};

export default Container;

const ContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div<ContainerProps>`
  color: ${(props) => (props.bg === "black" ? "white" : props.bg)};
  background-color: ${(props) => props.bg};

  width: "100vw",
  height: "auto",
  overflow: "hidden",
`;
