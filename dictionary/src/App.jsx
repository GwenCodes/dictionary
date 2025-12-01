import logo from "./ed-logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="src/ed-logo.png" target="_blank">
          <img src={logo} className="logo img-fluid" alt="ED logo" />
        </a>
        <div>
          <h1>Dictionary React App</h1>
        </div>
      </header>
    </div>
  );
}
