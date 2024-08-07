"use client"
import { IoIosRefreshCircle } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";

const refreshPage = () => {
  window.location.reload();
};

const fetchStockPrice = async () => {
  try {
    const response = await axios.get('/api/stock-price');
    const currentPrice = response.data.chart.result[0].meta.regularMarketPrice;
    return currentPrice;
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};

export default function Home() {
  const totalSpent = 700000;
  const ownedStocks = 22987.704918;
  const buyCost = 30.45;

  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPrice = async () => {
      try {
        const price = await fetchStockPrice();
        setCurrentPrice(price);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      } finally {
        setLoading(false);
      }
    };

    getPrice();
  }, []);

  const totalValue = currentPrice ? currentPrice * ownedStocks : 0;
  const profitOrLoss = totalValue - totalSpent;
  const currentMarketValue = totalSpent + profitOrLoss;

  return (
    <>
      <main className="flex flex-col min-h-screen items-center p-6 md:p-18 bg-black text-black">
        <h1 className="text-3xl md:text-5xl font-bold mb-1 text-white">Intel Stock Guy</h1>
        <p className="text-white underline mb-2"><a href="https://www.reddit.com/r/wallstreetbets/comments/1ehjuzj/i_bought_700k_worth_of_intel_stock_today/" target="_blank">Context</a></p>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-10 relative">
          <button
            className="text-5xl md:text-5xl text-black absolute top-2 right-2 p-5 font-bold hover:animate-spin"
            onClick={refreshPage}
          >
            <IoIosRefreshCircle />
          </button>
          <h2 className="text-xl md:text-2xl font-bold">Total Money Spent</h2>
          <p className="text-lg md:text-xl mb-4 font-semibold">${totalSpent.toLocaleString()}</p>
          <h2 className="text-xl md:text-2xl font-bold">Total Stocks Purchased</h2>
          <p className="text-lg md:text-xl mb-4 font-semibold">{ownedStocks.toLocaleString()}</p>
          <h2 className="text-xl md:text-2xl font-bold">Average Cost</h2>
          <p className="text-lg md:text-xl mb-4 font-semibold">${buyCost}</p>
          <h2 className="text-xl md:text-2xl font-bold">Current Stock Price</h2>
          {loading ? (
            <p className="text-lg md:text-xl font-semibold mb-4">Loading...</p>
          ) : (
            <p className="text-lg md:text-xl font-semibold mb-4">${currentPrice?.toLocaleString()}</p>
          )}
          <h2 className="text-xl md:text-2xl font-bold">Profit / Loss</h2>
          {loading ? (
            <p className="text-lg md:text-xl font-semibold mb-4">Loading...</p>
          ) : (
            <p className="text-lg md:text-xl font-semibold mb-4">${profitOrLoss.toLocaleString()}</p>
          )}
          <h2 className="text-xl md:text-2xl font-bold">Current Market Value</h2>
          {loading ? (
            <p className="text-lg md:text-xl font-semibold">Loading...</p>
          ) : (
            <p className="text-lg md:text-xl font-semibold">${currentMarketValue.toLocaleString()}</p>
          )}
        </div>
        <p className="text-white mt-3">Ayush Desai | <a className="hover:underline" href="https://github.com/adesai1000/intel-stock-guy" target="_blank">Source Code</a></p>
      </main>
    </>
  );
}
