import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/svg/logo.svg";
import { Links, Content } from "./styles";

export default function Header() {
  return (
    <center>
      <Content>
        <Link to="/">
          <img src={Logo} alt="NGT" width={250} height={50} />
        </Link>
        <Links>
          <span> Sorteios </span>
          <span> Pontos de venda </span>
          <span> Produtos </span>
          <span> Contato </span>
        </Links>
        <strong> Login </strong>
      </Content>
    </center>
  );
}
