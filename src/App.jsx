// @ts-nocheck
import "./App.scss";
import TemperatureCard from "./components/Temperature";

function App() {
  // თუ ტემპერატურა 0ზე ნაკლებია, temperature დივის ბეგქრაუნდ ფერი იყოს ლურჯი, თუ მეტია 0ზე და ნაკლებია 15ზე იყოს მწვანე, 15დან 30მდე იყოს ყვითელი, ხოლო 30ის ზევით იყოს წითელი

  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <TemperatureCard initialTemperature={0} />
      <TemperatureCard initialTemperature={10} />
      <TemperatureCard initialTemperature={-25} />
    </div>
  );
}

export default App;
