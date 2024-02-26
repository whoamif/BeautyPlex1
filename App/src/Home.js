import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="Home">
      <div className="Left">
        <h1>
          <TypeAnimation
            sequence={["BEAUTYPLEX", 1000]}
            speed={20}
            style={{}}
            repeat={Infinity} // Set repeat to true for infinite repetition
          />
        </h1>
        <p className="description">
          Bienvenue dans notre boutique de produits cosmétiques pour vous offrir
          une expérience de beauté incomparable. Découvrez une sélection
          soigneusement choisie pour sublimer votre beauté naturelle.
        </p>

        <br></br>
      </div>
      <div className="Right">
        <img id="product" src="./bioplex.png" alt="bioplex" />
      </div>
    </div>
  );
};

export default Home;
