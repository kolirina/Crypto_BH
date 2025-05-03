import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          The Ultimate <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the ultimate cryptocurrency marketplace. Sign up for free
          and find out more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Search Crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
