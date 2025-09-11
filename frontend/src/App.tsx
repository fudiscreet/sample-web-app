import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is a sample app. see repo at{" "}
          <a href="https://github.com/">GitHub</a>
        </p>
      </header>
    </div>
  );
}

export default App;
