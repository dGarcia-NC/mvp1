import { useState, useContext, useEffect } from "react";
import Chart from "react-apexcharts";
import { HistoricalContext } from "../context/historical.context";

const CryptoChart = () => {
  const [price, setPrices] = useState([]);
  const [yDates, setYDates] = useState([]);
  const { coinData } = useContext(HistoricalContext);

  useEffect(() => {
    if (coinData.prices) {
      var prices = coinData.prices.map((price) => price[1].toFixed(2));
      var dat = coinData.prices.map(
        (date) => new Date(date[0]).toString().split(" GMT")[0]
      );
      setPrices([...prices]);
      setYDates([...dat]);
    }
  }, [coinData]);

  var data = {
    series: [
      {
        name: "Price",
        data: price.length > 0 ? price : [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories:
          yDates.length > 0
            ? yDates
            : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
  };
  return (
    <div id="chart">
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default CryptoChart;
