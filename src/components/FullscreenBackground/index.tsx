import React from "react";
import styled from "styled-components";

interface FullscreenBackgroundProps {
  imageUrl: string;
}

const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const BackgroundImage = styled.div<FullscreenBackgroundProps>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

const FullscreenBackground: React.FC<FullscreenBackgroundProps> = ({
  imageUrl,
}) => {
  return (
    <BackgroundContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Title>Florianópolis</Title>
    </BackgroundContainer>
  );
};

export default FullscreenBackground;
