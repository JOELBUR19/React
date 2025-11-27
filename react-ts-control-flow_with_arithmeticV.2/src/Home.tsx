import { Navbar } from "./components/ui/Navbar";
import { VideoHero } from "./components/media/VideoHero";
import { Card } from "./components/ui/Card";
import { Carousel } from "./components/ui/Carousel";
import { Footer } from "./components/ui/Footer";
import "@/styles/ui.css";
import { VariablesOps } from "./modules/VariablesOps";
import { DecisionDemo } from "./modules/DecisionDemo";
import { LoopsDemo } from "./modules/LoopsDemo";
import ArithmeticOps from "./modules/ArithmeticOps";

export function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className="container" style={{ paddingTop: 16 }}>
        <h2>Componentes y demos listos</h2>
        <p>
          Navbar, Footer, Logo, Favicon, Video, Formulario, Cards, Redes,
          Tablas, Carrusel + Variables/Decisiones/Ciclos/Aritmetica.
        </p>
      </section>

      <VideoHero />

      <section id="cards" className="container" style={{ paddingTop: 16 }}>
        <h2>Cards</h2>
        <div className="cards">
          <Card
            title="Rendimiento"
            description="Vite + HMR + DX rápida"
            cta="Ver más"
          />
          <Card
            title="Tipado fuerte"
            description="TypeScript estricto para menos bugs"
            cta="Ver más"
          />
          <Card
            title="UI limpia"
            description="Componentes reutilizables y accesibles"
            cta="Ver más"
          />
        </div>
      </section>

      <section
        className="container"
        style={{ paddingTop: 16, display: "grid", gap: 16 }}
      >
        <VariablesOps />
        <DecisionDemo />
        <LoopsDemo />
        <ArithmeticOps />
      </section>

      <section id="carousel" className="container" style={{ paddingTop: 16 }}>
        <h2>Carrusel</h2>
        <Carousel
          slides={[
            { id: "s1", content: <strong>Slide 1 - Hola 👋</strong> },
            { id: "s2", content: <strong>Slide 2 - React + TS</strong> },
            { id: "s3", content: <strong>Slide 3 - Componentizado</strong> },
          ]}
        />
      </section>
      <Footer />
    </div>
  );
}
