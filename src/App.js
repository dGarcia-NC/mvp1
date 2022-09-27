import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CryptoChart from "./components/chart";
import CryptoTable from "./components/table";
import NavigationBar from "./components/navbar";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        console.log(coins);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <CryptoChart />
      <CryptoTable coins={coins} />
    </div>
  );
}

export default App;
