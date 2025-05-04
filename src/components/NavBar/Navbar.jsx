import React, { useContext } from "react";
import "./Navbar.css";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "rub": {
        setCurrency({ name: "rub", symbol: "₽" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="logo">CryptoBerry🍓</div>
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/inDevelopment"}>
          <li>Features</li>
        </Link>
        <Link to={"/inDevelopment"}>
          <li>Pricing</li>
        </Link>
        <Link to={"/inDevelopment"}>
          <li>Blog</li>
        </Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="rub">RUB</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
