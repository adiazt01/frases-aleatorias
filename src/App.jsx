import { useState } from "react";
import "./App.css";

function App() {
  const color = ["blue", "red", "green", "purple"];
  const [data, setData] = useState(false);
  const [BackgroundColor, setBackgroundColor] = useState(color[1]);
  const [loading, setLoading] = useState(false);

  function getData() {
    const colorSelection = Math.floor(Math.random() * color.length);
    setBackgroundColor(color[colorSelection]);

    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": "p2zQjNrMwT8XZZigj7HZWg==2PJ602CyGSU5EJ0g",
      },
    };

    setLoading(true);
    fetch("https://api.api-ninjas.com/v1/quotes", options)
      .then((res) => res.json())
      .then((res) => {
        let randomNumber = Math.floor(Math.random() * res.length);
        setData(res[randomNumber]);
        setLoading(false);
      });
  }

  return (
    <div className="App" style={{ backgroundColor: BackgroundColor }}>
      <div className="quoteContainer" id="quote-box">
        <p className="quoteContainer-quote" id="text">
          {loading && !data ? "" : data.quote}
        </p>
        <p className="quoteContainer-author" id="author">
          {loading && !data ? "" : data.author}
        </p>
        <button
          onClick={getData}
          className="quoteContainer-button"
          id="new-quote"
          disabled={loading}
          style={{backgroundColor: BackgroundColor}}
        >
          {loading == true ? "Loading" : "New Quote"}
        </button>
      </div>
    </div>
  );
}

export default App;
