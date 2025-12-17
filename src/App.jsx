import logo from "./ed-logo.png";
import "./App.css";
import Dictionary from "./Dictionary.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="ED logo" />
          <div>
            <h1>Dictionary React App</h1>
            <section>
              <Dictionary />
            </section>
          </div>
        </header>
      </div>
    </div>
  );
}
