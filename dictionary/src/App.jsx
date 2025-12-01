import logo from "./ed-logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="ED logo" />
        <div>
          <h1>Dictionary React App</h1>
        </div>
      </header>
    </div>
  );
}
