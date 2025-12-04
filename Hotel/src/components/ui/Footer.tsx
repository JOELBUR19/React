import React from "react";
import { SocialIcons } from "./SocialIcons";
import "@/styles/ui.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "grid", gap: 8 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <small>
            &copy; {new Date().getFullYear()} Hotel Trivago - Todos los derechos
            reservados
          </small>
          <SocialIcons />
          <small>Hecho con Vite + React + TypeScript</small>
        </div>
      </div>
    </footer>
  );
}
