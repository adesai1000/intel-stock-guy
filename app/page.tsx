"use client"
import { IoIosRefreshCircle } from "react-icons/io";
const refreshPage = () => {
  window.location.reload();
};
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-6 md:p-18 bg-black text-black">
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">Intel Stock Guy</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-10 relative">
        <p className="text-xl md:text-2xl text-black absolute top-2 right-2 p-5 font-bold hover:animate-spin" onClick={refreshPage}><IoIosRefreshCircle />
        </p>
        <h2 className="text-xl md:text-2xl mb-4 font-bold">Total Money Spent</h2>
        <p className="text-lg md:text-xl mb-6 font-semibold">$700,000</p>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Total Stocks Purchased</h2>
        <p className="text-lg md:text-xl mb-6 font-semibold">22,987.704918</p>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Average Cost</h2>
        <p className="text-lg md:text-xl mb-6 font-semibold">$30.45</p>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Current Stock Price</h2>
        <p className="text-lg md:text-xl font-semibold">$70</p>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Profit / Loss</h2>
        <p className="text-lg md:text-xl font-semibold">$-400,000</p>
      </div>
      <p className="text-white mt-3">Ayush Desai | <a href="https://github.com/adesai1000">Source Code</a></p>
    </main>
  );
}