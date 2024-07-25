

/////////////////////////////////vvvvvv


import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaUser, FaSearch } from 'react-icons/fa';

const Navbar = ({ isLoggedIn, setShowLogin, username, setIsLoggedIn, setUsername }) => {
  const [menu, setMenu] = useState("menu");
  const [showSearch, setShowSearch] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img className="logo" src={assets.logo} alt="Logo" />
          </Link>
          <ul className="navbar-menu">
            <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>מארזים</Link>
            <Link to="/" onClick={() => setMenu("serving-dishes")} className={menu === "serving-dishes" ? "active" : ""}>מגשי אירוח</Link>
            <Link to="/cases" onClick={() => setMenu("packages")} className={menu === "packages" ? "active" : ""}>ללא תוספת סוכר</Link>
            <Link to="/" onClick={() => setMenu("nachis")} className={menu === "nachis" ? "active" : ""}>תבלינים</Link>
            <Link to="/" onClick={() => setMenu("sweets")} className={menu === "sweets" ? "active" : ""}>מתוקים</Link>
            <Link to="/" onClick={() => setMenu("spices")} className={menu === "spices" ? "active" : ""}>ללא מלח</Link>
            <Link to="/" onClick={() => setMenu("salt-free")} className={menu === "salt-free" ? "active" : ""}>מנצ'יס ואירוח</Link>
            <Link to="/" onClick={() => setMenu("sugar-free")} className={menu === "sugar-free" ? "active" : ""}>פירות יבשים</Link>
            <Link to="/naturalNuts" onClick={() => setMenu("naturalNuts")} className={menu === "naturalNuts" ? "active" : ""}>טבעיים</Link>
            <Link to="/roastedNuts" onClick={() => setMenu("roastedNuts")} className={menu === "roastedNuts" ? "active" : ""}>קלויים</Link>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="navbar-icons">
            <FaSearch className="icon search-icon" onClick={() => setShowSearch(!showSearch)} />
            <Link to="/cart">
              <div className="cart-icon">
                <img src={assets.basket_icon} alt="Cart" />
                {getTotalCartAmount() > 0 && <div className="dot"></div>}
              </div>
            </Link>
          </div>
          {isLoggedIn ? (
            <>
              <div className="user-info" onClick={() => navigate('/profile')}>
                <FaUser className="icon" />
                <span>שלום, {username}</span>
              </div>
              <button className="logout-button" onClick={handleLogout}>התנתק</button>
            </>
          ) : (
            <button className="login-button" onClick={() => setShowLogin(true)}>התחברות</button>
          )}
        </div>
      </div>
      {showSearch && (
        <div className="search-bar">
          <input type="text" placeholder="חפש מוצר..." />
        </div>
      )}
    </>
  );
};

export default Navbar;




