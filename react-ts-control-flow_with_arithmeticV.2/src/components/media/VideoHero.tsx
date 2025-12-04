import React from "react";
import "@/styles/ui.css";
type Props = {
  src?: string;
  poster?: string;
  title?: string;
  subtitle?: string;
};
export function VideoHero({
  title = "Aprende React + TS",
  subtitle = "Vite - Estado - Hooks - UI",
}: Props) {
  return (
    <section
      id="video"
      className="container"
      style={{ display: "grid", gap: 12, paddingTop: 16 }}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p style={{ marginTop: 0, color: "#6b7280" }}>{subtitle}</p>
      <iframe
        width="100%"
        height="700"
        src="https://www.youtube.com/embed/1NPa3qotT4c?si=GRf0DVGbM3JTBE6I"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
}
