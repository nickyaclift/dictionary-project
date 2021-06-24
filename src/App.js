import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1> Dictionary</h1>
          <Dictionary />
          <span className="Nicky">
            <a href="https://github.com/nickyaclift/dictionary-project">
              Coded
            </a>{" "}
            by
            <a href="https://quirky-lamport-3ae9a9.netlify.app/">
              {" "}
              Nicky Clift
            </a>
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
