import React from "react";
import logo from "../../Images/logo.svg";
import homeImg from "../../Images/homePage.svg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { StyLanding } from "./StyLanding";

const Landing = () => {
  return (
    <StyLanding>
      <main>
        <header className="header">
          <img src={logo} alt="logo" />
        </header>
        <article>
          <section className="content">
            <h1>Alimente um amigo de quatro patas.</h1>
            <Link className="button" to="/app">
              <span>Começar</span>
              <FiArrowRight size={24} color="#fff" />
            </Link>
          </section>
          <img id="home_img" src={homeImg} alt="dogs" />
        </article>
      </main>
    </StyLanding>
  );
};

export default Landing;
