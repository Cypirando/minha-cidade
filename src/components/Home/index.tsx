import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  InfoCircleOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e: { key: React.SetStateAction<string> }) => {
    setCurrent(e.key);
  };

  return (
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
  );
};

export default Navbar;
