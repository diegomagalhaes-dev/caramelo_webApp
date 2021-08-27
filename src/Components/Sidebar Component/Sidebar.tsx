import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import ArrowLeft from "../../Images/arrow-left.svg";

import logo from "../../Images/logo.svg";

import { StySidebar } from "./stySidebar";

const Sidebar = () => {
  const { goBack } = useHistory();
  return (
    <StySidebar>
      <header>
        <button onClick={goBack} type="button">
          <img src={ArrowLeft} alt="Voltar" />
        </button>
        <img src={logo} alt="Comedouro" />
      </header>
      <aside>
        <h1>Fico feliz por sua boa ação!</h1>
        <p>
          Preencha o formulário para que <br /> todos possam localizar o
          comedouro e ajudar.
        </p>
      </aside>
    </StySidebar>
  );
};

export default Sidebar;
