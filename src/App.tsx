import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState<any>([]);
  const [randomNumber, setRandomNumber] = useState<any>(0);

  const fetchQuotes = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();
    setQuotes(json);
  };

  useEffect(() => {
    fetchQuotes("https://type.fit/api/quotes");
  }, []);

  const handlerClick = () => {
    setRandomNumber(Math.floor(Math.random() * quotes.length));
  };

  console.log(randomNumber);

  return (
    <div className="App">
      <h1>Quotes</h1>
      <h2>"https://type.fit/api/quotes"</h2>
      <button onClick={handlerClick}>Generate Random Quote</button>
      <p>
        {quotes[randomNumber]?.text}
        <br /> ({quotes[randomNumber]?.author})
      </p>
      {/* <h3>All Quotes</h3>
      <ul>
        {quotes.map((element: any, index: number) => {
          return (
            <li key={index}>
              ({element.author}) {element.text}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
