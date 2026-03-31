import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      {" "}
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
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://reactweatherapp03.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
