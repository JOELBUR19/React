import { Navbar } from "./components/ui/Navbar";
import { Card } from "./components/ui/Card";
import { Carousel } from "./components/ui/Carousel";
import { Footer } from "./components/ui/Footer";
import "@/styles/ui.css";
import RoomPricing from "./modules/RoomPricing";

export function Home() {
  return (
    <div>
      <Navbar />

      <section id="home" className="container" style={{ paddingTop: 16 }}>
        <h2>Bienvenido al Hotel Trivago</h2>
        <p>
          Descubre un lugar donde la comodidad, el estilo y la atención
          personalizada se combinan para ofrecerte una experiencia inolvidable.
          Nuestro hotel cuenta con habitaciones amplias y acogedoras, decoradas
          con elegancia y equipadas con todas las comodidades modernas para que
          te sientas como en casa.
        </p>
      </section>

      <section id="cards" className="container" style={{ paddingTop: 16 }}>
        <div className="cards">
          <Card
            title="Habitaciones Confortables"
            description="Disfruta de habitaciones amplias y elegantemente decoradas, equipadas con todas las comodidades modernas."
            cta="Ver más"
          />
          <Card
            title="Gastronomía Exquisita"
            description="Saborea platos locales e internacionales en nuestro restaurante, preparados con ingredientes frescos y de calidad."
            cta="Ver más"
          />
          <Card
            title="Servicios y Bienestar"
            description="Relájate en nuestro spa, disfruta de la piscina o mantente activo en nuestro gimnasio, todo pensado para tu confort."
            cta="Ver más"
          />
        </div>
      </section>

      <section id="carousel" className="container" style={{ paddingTop: 16 }}>
        <Carousel
          slides={[
            {
              id: "s1",
              content: (
                <strong>
                  Bienvenido a tu escape perfecto – un lugar donde el confort y
                  la elegancia se encuentran 🌿✨
                </strong>
              ),
            },
            {
              id: "s2",
              content: (
                <strong>
                  Relájate en nuestras habitaciones amplias y acogedoras,
                  diseñadas para que cada noche sea inolvidable 🛏️🌙
                </strong>
              ),
            },
            {
              id: "s3",
              content: (
                <strong>
                  Disfruta de gastronomía deliciosa, spa revitalizante y
                  experiencias únicas que harán de tu estancia un recuerdo
                  imborrable 🍽️💆‍♀️🌅
                </strong>
              ),
            },
          ]}
        />
      </section>

      <section
        id="room-pricing"
        className="container"
        style={{ paddingTop: 16 }}
      >
        <h2 style={{ textAlign: "center" }}>Precios del Hotel Trivago</h2>
        <RoomPricing />
      </section>

      <Footer />
    </div>
  );
}
