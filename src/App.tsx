import styled from "styled-components";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Quote from "./components/quote";
import Principles from "./components/principles";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Main>
        <Navbar></Navbar>
        <Header></Header>
        <Quote></Quote>
        <Principles></Principles>
        <About></About>
        <Skills></Skills>
        <Footer></Footer>
      </Main>
    </>
  );
}

const Main = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;
`;

export default App;
