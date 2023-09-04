import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "../../Styles/Header.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Header: React.FC = (props) => {
  const [dropdown, setDropDown] = useState<boolean>(false);
  const [secondDropdown, setSecondDropdown] = useState<boolean>(false);

  const showDropDown = () => {
    if (dropdown) setDropDown(false);
    else setDropDown(true);
  };

  const showSecondDropDown = () => {
    if (secondDropdown) setSecondDropdown(false);
    else setSecondDropdown(true);
  };

  const signOutHandler = () => {
    console.log("logout");
  };

  const [query, setQuery] = useState<string>("");

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">E-Commerce</Link>
          </div>

          <div className="search-bar">
            <input
              className="search-input"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              value={query}
            ></input>

            <div className="search-btn">
              <Link to={`/searchresults/${query}`}>
                <AiOutlineSearch />
              </Link>
            </div>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/cart"> 
                <AiOutlineShoppingCart />(<p className="badge">1</p>)
               </Link>
            </li>
            {/* <li>
              <div className="header-dropdown">
                <p onClick={showDropDown}>
                  <IoIosArrowDropdown />
                </p>

                <ul
                  className={
                    dropdown ? "dropdown-content show" : "dropdown-content"
                  }
                >
                  <li>
                    <Link to="/profile">Account</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={signOutHandler}>
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}

            <li>
              <div className="header-dropdown">
                <p onClick={showSecondDropDown}>
                  Admin
                  <IoIosArrowDropdown />
                </p>

                <ul
                  className={
                    secondDropdown
                      ? "dropdown-content show"
                      : "dropdown-content"
                  }
                >
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="category-container">
          <ul>
            <li>
              <Link to="/category/mobile">Mobile</Link>
            </li>
            <li>
              <Link to="/category/laptop">Laptop</Link>
            </li>
            <li>
              <Link to="/category/monitor">Monitor</Link>
            </li>
            <li>
              <Link to="/category/accessories">Computer Accessories</Link>
            </li>
            <li>
              <Link to="/category/earphones">Earphones</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
