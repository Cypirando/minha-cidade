import React, { useState } from "react";
import { Menu, Carousel } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HomeOutlined,
  InfoCircleOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { Item } = Menu;


const ContentContainer = styled.div`
  height: calc(100% - 64px); /* Desconta a altura do menu */
`;
const CustomImage = styled.img`
  max-width: 40%;
  max-height: 40%;
  margin: auto;
`;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e: { key: React.SetStateAction<string> }) => {
    setCurrent(e.key);
  };
  const imUm = "/images/um.JPG";
  const imDois = "/images/dois.JPG";
  const imtres = "/images/tres.JPG";
  const imQuatro = "/images/quatro.JPG";
  const imCinco = "/images/cinco.JPG";

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Pagina Inicial</Link>
        </Item>
        <Item key="about" icon={<InfoCircleOutlined />}>
          <Link to="/about">Sobre</Link>
        </Item>
        <Item key="summary" icon={<FileOutlined />}>
          <Link to="/summary">Contato</Link>
        </Item>
      </Menu>

      <ContentContainer>
        <Carousel autoplay>
          <div>
            <CustomImage src={imUm} alt="Image 1" />
          </div>
          <div>
            <CustomImage src={imDois} alt="Image 2" />
          </div>
          <div>
            <CustomImage src={imtres} alt="Image 3" />
          </div>
          <div>
            <CustomImage src={imQuatro} alt="Image 4" />
          </div>
          <div>
            <CustomImage src={imCinco} alt="Image 5" />
          </div>
        </Carousel>
      </ContentContainer>
    </>
  );
};

export default Navbar;
