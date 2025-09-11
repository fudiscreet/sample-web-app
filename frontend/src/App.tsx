import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HealthResponse } from "../../common/type/healthResponse";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/healtz")
      .then((res) => res.json() as Promise<HealthResponse>)
      .then((data) => setMessage(data.status))
      .catch((err) => {
        console.error("API fetch error:", err);
        setMessage("API呼び出しに失敗しました");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is a sample app. see repo at{" "}
          <a href="https://github.com/fudiscreet/sample-web-app">GitHub</a>
        </p>
        <p>Backend says: {message || "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
