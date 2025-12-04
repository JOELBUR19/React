import React from "react";
import logo from "@/assets/logo.svg";
import "@/styles/ui.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links"></div>
        <div className="nav-actions">
          <a href="#contacto" className="btn primary">
            Contactanos
          </a>
        </div>
      </div>
    </nav>
  );
}
