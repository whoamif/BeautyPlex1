import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  
    return ( 
        <div className="Home">
            <div className="Left">
                <h1>BEAUTYPLEX</h1>
                <TypeAnimation
                    sequence={[
                        'Bienvenue dans notre boutique de produits cosmétiques . . . ',
                        1000,
                        'pour vous offrir une expérience de beauté incomparable. . .   ',
                        1000,
                        'Découvrez une sélection soigneusement choisie pour sublimer votre beauté naturelle. . .  ',
                        1000,
                    ]}
                    speed={20}
                    style={{ fontSize: '1.5em' }}
                    repeat={Infinity}
                />
                <br></br>
            </div>
            <div className="Right">
                <img id ="product" src="./bioplex.png" alt="bioplex"/> 
            </div>
        </div>
    );
}
 
export default Home;
