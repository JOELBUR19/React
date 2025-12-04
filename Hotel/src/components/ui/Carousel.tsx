import React from "react";
import "@/styles/ui.css";

type Slide = { id: string; content: React.ReactNode };
type Props = { slides: Slide[]; autoMs?: number };

export function Carousel({ slides, autoMs = 4000 }: Props) {
  const [idx, setIdx] = React.useState(0);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      autoMs
    );
    return () => clearInterval(id);
  }, [slides.length, autoMs]);

  React.useEffect(() => {
    const track = trackRef.current;
    if (track) track.style.transform = ` translateX(-${idx * 100}%)`;
  }, [idx]);

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {slides.map((s) => (
          <div className="carousel-slide" key={s.id}>
            {s.content}
          </div>
        ))}
      </div>
      <div className="carousel-controls" aria-hidden>
        <button
          onClick={() =>
            setIdx((i) => (i - 1 + slides.length) % slides.length)
          }>
          &lt;
        </button>
        <button onClick={() => setIdx((i) => (i + 1) % slides.length)}>
          &gt;
        </button>
      </div>
    </div>
  );
}
