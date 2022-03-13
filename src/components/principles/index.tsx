import * as style from "./styles";
import Container from "../container";

import missionIcon from "../../images/mission.svg";
import glassesIcon from "../../images/glasses.svg";
import diamountIcon from "../../images/diamount.svg";

const Principles = () => {
  return (
    <Container>
      <style.Grid>
        <div className="principle">
          <img src={missionIcon} alt="css"></img>
          <h2>Missão</h2>
          <p>
            Ajudar pessoas e empresas entregando soluções através da tecnologia
            e conhecimento.
          </p>
        </div>
        <div className="principle">
          <img src={glassesIcon} alt="css"></img>
          <h2>Visão</h2>
          <p>
            Ser uma das cinco melhores engenheiras de software reconhecida em
            entregar soluções através de conteúdo educativo e serviços de
            excelência.
          </p>
        </div>
        <div className="principle">
          <img src={diamountIcon} alt="css"></img>
          <h2>Valores</h2>
          <p>
            Transparência; Responsabilidade; Inovação; Paixão; Colaboração;
            Qualidade; Resultados.
          </p>
        </div>
      </style.Grid>
    </Container>
  );
};

export default Principles;
