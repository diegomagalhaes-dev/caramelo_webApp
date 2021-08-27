import React from "react";
import logo from "../../Images/logo.svg";
import homeImg from "../../Images/homePage.svg";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Bone from "../../Images/bone_white.svg";

import { StyLanding } from "./StyLanding";

const Landing = () => {
  return (
    <StyLanding>
      <main>
        <header className="header">
          <img src={logo} alt="logo" />
            <Link to="/login">
              <BsFillPersonFill size={24} color="#ffffff" /> Acesso Restrito
            </Link>
        </header>

        <article>
          <section className="content">
            <h1>
              Alimente um amigo <br /> de quatro patas.
            </h1>
            <p>Encontre comedouros próximos a você.</p>
            <Link className="button" to="/app">
              <img src={Bone} alt="ícone no botão" />
              <span>Começar</span>
            </Link>
          </section>
          <img id="home_img" src={homeImg} alt="dogs" />
        </article>
      </main>
    </StyLanding>
  );
};

export default Landing;
