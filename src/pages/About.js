import "./About.css";

import Title from "../components/UI/Title";
import BackButton from "../components/UI/BackButton";

const About = () => {
  return (
    <div className="about-main-container">
      <BackButton path="/unati"/>
      <div className="title-container">
        <Title>Ficha Técnica</Title>
      </div>
      <div className="about-inner-container">
        <div className="about-description">
          <div>Equipe:</div>
        </div>
        <div className="about-items">
          <div>Naine Terena de Jesus</div>
          <div>Tatiana Dias</div>
          <div>Alessandra Alonso</div>
          <div>Arcênio Dias</div>
          <div>Dhoze Kali Sini</div>
          <div>Niara Terena</div>
          <div>Évelin Hekere</div>
          <div>Gustavo Caboco Wapixana</div>
          <div>Karine Mattos - Instituto Elevar</div>
          <div>Sane Martins</div>
          <div>Guilherme Kominami</div>
          <span>&nbsp;</span>
          <div>
            <b>Realização: </b>Oráculo Comunicação, Educação e Cultura
          </div>
          <span>&nbsp;</span>
          <div>
            <b>Apoio: </b>
            Keepers of the Earth Team / Equipo Guardianes de la Tierra Cultural
            Survival
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
