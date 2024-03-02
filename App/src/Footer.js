import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const location = useLocation();

  const [linkState, setLinkState] = useState("home");
  const handleLinkState = (link) => {
    setLinkState(link);
  };
  return (
    <div className="footer" id="footer">
      <div className="firstleft">
        <h1>BEAUTYPLEX</h1>
        <br />
        <h4>
          Découvrez une sélection soigneusement choisie <br />
          pour sublimer votre beauté naturelle.
        </h4>
      </div>

      <ul>
        
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Produit</Link>
        </li>
        <li>
          <a href="mailto:beautyplex00@gmail.com">Contact</a>
        </li>
      </ul>

      <div className="foot">
        <p>© BEAUTYPLEX. All Rights Reserved 2024</p>
        <div className="links">
          <a
            id="social"
            href="https://www.facebook.com/profile.php?id=61550788340750"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a id="social" href="https://www.instagram.com/beautyplexdz/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
