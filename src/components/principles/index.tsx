import * as style from "./styles";
import Container from "../container";

import missionIcon from "../../images/mission.svg";
import glassesIcon from "../../images/glasses.svg";
import diamountIcon from "../../images/diamount.svg";

const Principles = () => {
  return (
    <Container>
      <style.Grid>
        <style.Item>
          <img src={missionIcon} alt="css"></img>
          <h2>Missão</h2>
          <p>
            Ajudar pessoas e empresas entregando soluções através da tecnologia
            e conhecimento.
          </p>
        </style.Item>
        <style.Item>
          <img src={glassesIcon} alt="css"></img>
          <h2>Visão</h2>
          <p>
            Ser uma das cinco melhores engenheiras de software reconhecida em
            entregar soluções através de conteúdo educativo e serviços de
            excelência.
          </p>
        </style.Item>
        <style.Item>
          <img src={diamountIcon} alt="css"></img>
          <h2>Valores</h2>
          <p>
            Transparência; Responsabilidade; Inovação; Paixão; Colaboração;
            Qualidade; Resultados.
          </p>
        </style.Item>
      </style.Grid>
    </Container>
  );
};

export default Principles;
