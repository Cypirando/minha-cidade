import React from "react";
import styled from "styled-components";
import ButtonLink from "../ButtonLink";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>História de Folianópolis</AboutTitle>
      <AboutText>
        No início do século XVI, embarcações que se deslocavam para a Bacia do
        Prata aportavam na Ilha de Santa Catarina para o abastecimento com água
        e víveres. Em torno de 1675, o bandeirante paulista Francisco Dias Velho
        fundou o povoado Nossa Senhora do Desterro (atual Florianópolis). Porém,
        a povoação enfrentou dificuldades, incluindo um ataque de piratas que
        destruiu a região e matou o fundador. Anos depois, o navegador francês
        Amadèe Frèzier encontrou cerca de 150 pessoas na ilha, lideradas por
        Manoel Manso de Avelar, marcando uma nova fase de ocupação. Desterro foi
        elevada à categoria de vila em 1726 e, devido à sua posição estratégica
        para o domínio português no Brasil, começaram a ser erguidas fortalezas
        na região. A agricultura e a indústria manufatureira prosperaram, e a
        pesca da baleia também se tornou importante economicamente. A ilha foi
        invadida pelos espanhóis em 1777, mas foi restituída à Coroa Portuguesa
        no ano seguinte. Em 1823, foi elevada à categoria de cidade e passou por
        modernização política e cultural. Durante a Guerra do Paraguai
        (1864-1870), a cidade viveu momentos de agitação, e se tornou capital da
        Província de Santa Catarina. Após a Proclamação da República em 1889, o
        nome da cidade foi alterado para Florianópolis em homenagem ao Marechal
        Floriano Peixoto. No século XX, a cidade passou por transformações
        significativas, incluindo imigração alemã e italiana, crescimento da
        construção civil, desenvolvimento de infraestrutura e impulso econômico
        na agricultura e indústria. Essa é uma visão geral da história de
        Folianópolis, destacando os principais eventos e momentos de sua
        formação e desenvolvimento ao longo dos séculos.
      </AboutText>
      <ButtonLink to="/">Voltar</ButtonLink>
      <ButtonLink to="/summary">Saber mais</ButtonLink>
    </AboutContainer>
  );
};

export default About;
