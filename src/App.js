import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CryptoChart from "./components/chart";
import CryptoTable from "./components/table";
import NavigationBar from "./components/navbar";
import NewsCard from "./components/card";

function App() {
  const [coins, setCoins] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("coinGecko:", response);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        "https://newsapi.org/v2/everything?q=Bitcoin&from=2022-09-28&sortBy=popularity&apiKey=2470c35134b94d4391f6b0a195fab4a2"
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <CryptoChart />
      <CryptoTable coins={coins} />
      <div className="card-container">
        {news.length > 0 ? (
          news.map((data, index) => {
            if (index < 8) {
              return <NewsCard key={index} news={data} />;
            }
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
