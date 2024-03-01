import React from "react";
import ProductItem from "./ProductItem";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { produits } from "./data"; 

const Product = () => {
  return (
    <div>
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="Product">
        <h1>Nos Produits</h1>
        <div className="product">
          {produits.map((productItem) => ( // Use produits array directly
            <Link key={productItem.id} to={{ pathname: `/forme/${productItem.id}`, state: { product: productItem } }}>
              <ProductItem productItem={productItem} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
