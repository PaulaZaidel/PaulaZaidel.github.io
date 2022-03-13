import React from "react";
import * as style from "./styles";
import { Fade } from "react-awesome-reveal";

import Container from "../container";

import profileImg from "../../images/profile.jpg";

const About = () => {
  return (
    <Container>
      <style.Main>
        <div className="content">
          <Fade direction="up" cascade>
            <h1>About Me</h1>
          </Fade>
          <p>
            Quem é Paula Zaidel Sou formada em Sistemas de Informação desde 2017
            e apaixonada pela tecnologia desde que me lembro por gente, risos.
            Aprendi a programar já na faculdade e quando vi ali as minhas
            primeiras linhas de código executando, não tive dúvidas de que era
            aquilo que eu gostaria de fazer no decorrer da minha vida. Já ali no
            meu segundo período da faculdade consegui meu primeiro estágio como
            programadora, sendo o ponta pé inicial para iniciar minha carreira,
            que tenho tanto orgulho, na área de tecnologia. Em 2016 realizei um
            dos meus sonhos: Participar de uma Campus Party: O maior evento de
            tecnologia no Brasil. Este evento me marcou bastante, pois um dia
            estava em uma palestra sobre empreendedorismo e ali eu fui marcada
            pelo acordar da “Paula Empreendedora”. Desde então sempre tive o
            desejo de poder liderar a criação de um produto que pudesse ser a
            solução no dia a dia de todos nós. Realizei a tentativa da criação
            de uns produtos mas no meio do caminho forças maiores fizeram com
            que não fosse possível seguir em frente com a ideia. Porém,
            aprendizados foram gerados e a força de vontade em ainda fazer
            acontecer, permanece. Já em 2017 em uma das empresas que trabalhei
            senti a real necessidade de conseguir me comunicar em inglês e o
            quanto essa skill me ajudaria a alçar conquistas maiores. Sem
            delongas, decidi que realizaria um intercâmbio e dali em diante
            comecei a planejar e realizar todo o possível (até o impossível com
            a ajuda de Deus) para isso acontecer. Em maio de 2018 estava eu
            andando pelo aeroporto de Guarulhos com meu passaporte e uma
            passagem para Irlanda! Morei na Irlanda durante um ano e seis meses
            estudando inglês e passando perrengues por não falar inglês, risos.
            Poderia passar horas aqui escrevendo o quando esse intercâmbio foi
            maravilhoso na minha evolução e no meu alto conhecimento, mas que
            tal deixarmos esta parte para um café? ❤️ Após esse tempo na Irlanda
            tive a oportunidade de ir morar em Portugal com uma oportunidade de
            trabalhar como programadora (meu primeiro emprego na área, fora do
            Brasil). Fiquei morando por lá por mais um ano e seis meses, quando
            em regime de home office decidi retornar ao Brasil para ficar perto
            da família e trabalhar em cima de sonhos que tenho queimando dentro
            desse coração, risos. Hoje trabalho em uma das melhores empresas do
            Brasil e que sou mega feliz em estar ali junto construindo uma
            solução para conectar todo o Brasil, a Loggi Tecnologia. Junto,
            divido meu tempo entre ser Crossfiteira, amigos, família e meu
            espírito “Paula empreendedora” que insiste em procurar problemas
            para levar soluções. https://youtu.be/19sydkboOyU S
          </p>
        </div>
        <div className="image-wrapper">
          <img src={profileImg} alt="about"></img>
        </div>
      </style.Main>
    </Container>
  );
};

export default About;
