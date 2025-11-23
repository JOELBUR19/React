import RoomPricing from "./components/RoomPricing";

function App() {
  return (
    <>
      <header>
        <h1>Bienvenido al Hotel Trivago</h1>
        <p>Los precios del Hotel Trivago Son:</p>
      </header>
      <main>
        <section className="hero">
          <table>
            <tr>
              <th colSpan={2}>Precios</th>
            </tr>
            <tr>
              <td>Individual</td>
              <td>$2.500</td>
            </tr>
            <tr>
              <td>Doble</td>
              <td>$4.600</td>
            </tr>
            <tr>
              <td>Familiar</td>
              <td>$5.200</td>
            </tr>
          </table>
        </section>

        <section>
          <RoomPricing />
        </section>
      </main>
    </>
  );
}

export default App;
