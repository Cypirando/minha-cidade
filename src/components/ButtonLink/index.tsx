import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BtnAntd } from "./styles";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
}

const ButtonLink = ({ to, children }: ButtonLinkProps) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <BtnAntd>{children}</BtnAntd>
    </Link>
  );
};

export default ButtonLink;
