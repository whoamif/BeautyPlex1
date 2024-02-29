import { useState } from "react";
import ProductItem from "./ProductItem";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Product = () => {
  const [Products, setproducts] = useState([
    {
      id: 1,
      title: 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING"',
      price: 8400.0,
      imgUrl: "./dataIMG/1.webp",
    },
    {
      id: 2,
      title: '"PACK 7J : MASK + SERUM + SHAMPOING"',
      price: 4500.0,
      imgUrl: "./dataIMG/2.webp",
    },
    {
      title: 'PACK CAVIAR "HAIR-MASK + SERUM" de BIOPLEX',
      price: 3000.0,
      imgUrl: "./dataIMG/3.webp",
    },
    {
      id: 3,
      title: "Bioplex 1 Shampoing Clarifiant 1000ml",
      price: 1600.0,
      imgUrl: "./dataIMG/4.webp",
    },
    {
      id: 4,
      title: "Bioplex Traitement Protein 2 - Kératine & Collagène 1000ML",
      price: 4500,
      imgUrl: "./dataIMG/5.webp",
    },
    {
      id: 5,
      title: "Bioplex Conditioner Protien (3) for Keratin & Collagen 1000ML",
      price: 1600.0,
      imgUrl: "./dataIMG/6.webp",
    },
    {
      id: 6,
      title: "Bioplex Shampoo Protein For Keratin & Collagen 1000ML",
      price: 1600.0,
      imgUrl: "./dataIMG/7.webp",
    },
    {
      id: 7,
      title:
        "Bioplex Violet Treatment Protein 1000ML Anti-Yellow Blond & Brightness with Crystal & Collagen",
      price: 6800.0,
      imgUrl: "./dataIMG/8.webp",
    },
    {
      id: 8,
      title: "Bioplex Proteine Kit Bioplex 3 × 1000 Ml",
      price: 7800.0,
      imgUrl: "./dataIMG/9.webp",
    },
    {
      id: 9,
      title: "Bioplex Proteine Kit Bioplex 3 × 500 Ml",
      price: 3900.0,
      imgUrl: "./dataIMG/10.webp",
    },
    {
      id: 10,
      title: "Bioplex Mini Kit Traitement Protéines Pour Cheveux 100 Ml X 3",
      price: 2400.0,
      imgUrl: "./dataIMG/11.webp",
    },
    {
      id: 11,
      title: "Treatment Bioplex 24k Gold therapy 1000ml",
      price: 5500.0,
      imgUrl: "./dataIMG/12.webp",
    },
    {
      id: 12,
      title: "Bioplex BOTOX PROKERATIN PROTEIN TREATMENT",
      price: 6800.0,
      imgUrl: "./dataIMG/13.webp",
    },
    {
      id: 13,
      title:
        "Bioplex 24k Gold therapy kit 1000ml x3 (shampoo+treatment+conditioner)",
      price: 9900.0,
      imgUrl: "./dataIMG/14.webp",
    },
    {
      id: 14,
      title:
        "Bioplex 24k Gold therapy kit 400ml x3 (shampoo+treatment+conditioner)",
      price: 5500.0,
      imgUrl: "./dataIMG/15.webp",
    },
    {
      id: 15,
      title: "Bioplex Gold 24K Gold Therapy hair Mask 500ML",
      price: 2900.0,
      imgUrl: "./dataIMG/16.webp",
    },
    {
      id: 16,
      title: "Bioplex shampoo Sans Sulfate Omega 3 500ML",
      price: 1200.0,
      imgUrl: "./dataIMG/17.webp",
    },
    {
      id: 17,
      title: "Bioplex Special CAVIAR Hair Mask 500ml",
      price: 1700.0,
      imgUrl: "./dataIMG/18.webp",
    },
    {
      id: 18,
      title: "Bioplex Mask Sans sulfate Omega 3 500ML",
      price: 1700.0,
      imgUrl: "./dataIMG/19.webp",
    },
    {
      id: 19,
      title: "Bioplex masque protéine 500ml",
      price: 1400.0,
      imgUrl: "./dataIMG/20.webp",
    },
    {
      id: 20,
      title: "Bioplex Masque pour Cheveux Protein & Keratin & Collagen 500ml",
      price: 1400.0,
      imgUrl: "./dataIMG/21.webp",
    },
    {
      id: 21,
      title: "Bioplex Protein Serum Sans Sulfate 100ML",
      price: 1400.0,
      imgUrl: "./dataIMG/22.webp",
    },
    {
      id: 22,
      title: "Biplex Special Caviar Hair Serum 100ml",
      price: 1800.0,
      imgUrl: "./dataIMG/23.webp",
    },
    {
      id: 23,
      title: "Bioplex Kit traitement Caviar 100ml",
      price: 2900.0,
      imgUrl: "./dataIMG/24.webp",
    },
    {
      id: 24,
      title:
        "Bioplex Traitement aux Protéines Capillaires - Pour Cheveux Abîmés 100G",
      price: 1200.0,
      imgUrl: "./dataIMG/25.webp",
    },
    {
      id: 25,
      title: "BEAUTYPLEX باقة متكاملة للعناية بالشعر من",
      price: 8000.0,
      imgUrl: "./dataIMG/26.webp",
    },
  ]);
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
          {Products.map((productItem, index) => (
            <Link key={index} to={`/forme/${index}`}>
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
