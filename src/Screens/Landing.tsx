import React from "react";
import "../Styles/global.css";
import "../Styles/Screens_sty/landing.css";
import logo from "../Images/logo.svg";
import homeImg from "../Images/homePage.svg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div id="page-landing">
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
    </div>
  );
};

export default Landing;
