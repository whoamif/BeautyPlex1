import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const location = useLocation();
  const [resNav, activateResVane] = useState(false);

  const handleNav = () => {
    activateResVane(!resNav);
  };
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  


  return (
    <div className="nav">
      <div className="navC">
        <div className="titre">
        <Link to="/">
        <img id="Logo" src="/logo.png" alt="logo" />
        </Link>
           
          
        </div>

        <div className="lien">
          <ul className="lienLarge" id={resNav === true ? "resTon" : "resToff"}>
            
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Produits</Link>
            </li>
            <li>
            <a  onClick={scrollToFooter}>Contact</a>
            </li>
          </ul>
          <button className="res-nav" onClick={handleNav}>
            <img
              id="res-nav"
              src="./res-nav.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
