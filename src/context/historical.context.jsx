import React, { useState, useEffect, createContext } from "react";

export const HistoricalContext = createContext();

export const HistoricalContextProvider = ({ children }) => {
  const [coin, setCoin] = useState("");
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {}, [coin]);

  const value = {
    coin,
    setCoin,
    coinData,
    setCoinData,
  };

  return (
    <HistoricalContext.Provider value={value}>
      {children}
    </HistoricalContext.Provider>
  );
};
