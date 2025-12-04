import React from "react";
import logo from "@/assets/logo.svg";
import "@/styles/ui.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <img src={logo} alt="logo" />
          <span>React TS Demo</span>
        </div>
        <div className="nav-links">
          <a href="#home">Inicio</a>
          <a href="#cards">Cards</a>
          <a href="#table">Tablas</a>
          <a href="#carousel">Carrusel</a>
          <a href="#auth">Auth</a>
        </div>
        <div className="nav-actions">
          <a href="#video" className="btn">
            Video
          </a>
          <a href="#contacto" className="btn primary">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
