import React, { useState } from "react";
import { Menu } from "antd";

const { Item } = Menu;

const Home = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home">Pagina Inicial</Item>
      <Item key="about">Sobre</Item>
      <Item key="summary">Resumo</Item>
    </Menu>
  );
};

export default Home;
