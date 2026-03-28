import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coding by Laura and is open-sources on{" "}
        <a
          href="https://github.com/Laura-html/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
