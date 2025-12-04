import React from "react";
import "@/styles/ui.css";

type Props = {
  title: string;
  description: string;
  cta?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function Card({ title, description, cta, onClick, children }: Props) {
  return (
    <div className="card">
      <h4>{title}</h4>
      {description && <p>{description}</p>}
      {children}
      {cta && (
        <button className="btn" onClick={onClick}>
          {cta}
        </button>
      )}
    </div>
  );
}
