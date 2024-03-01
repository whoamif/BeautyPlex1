import React, { useState, useEffect } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { produits } from "./data";
const cities = [
  "أدرار",
  "الشلف",
  "الأغواط",
  "أم البواقي",
  "باتنة",
  "بجاية",
  "بسكرة",
  "بشار",
  "البليدة",
  "البويرة",
  "تمنراست",
  "تبسة",
  "تلمسان",
  "تيارت",
  "تيزي وزو",
  "الجزائر",
  "الجلفة",
  "جيجل",
  "سطيف",
  "سعيدة",
  "سكيكدة",
  "سيدي بلعباس",
  "عنابة",
  "قالمة",
  "قسنطينة",
  "المدية",
  "مستغانم",
  "المسيلة",
  "معسكر",
  "ورقلة",
  "وهران",
  "البيض",
  "اليزي",
  "برج بوعريريج",
  "بومرداس",
  "الطارف",
  "تندوف",
  "تيسمسيلت",
  "الوادي",
  "خنشلة",
  "ورقلة",
  "تيارت",
  "تيبازة",
  "ميلة",
  "عين الدفلى",
  "النعامة",
  "عين تموشنت",
  "الغرداية",
  "غليزان",
  "ال مغير",
  "ال منعة",
  "أولاد جلال",
  "بني عباس",
  "تميمون",
  "تمنراست",
  "القلعة",
  "عين صالح",
  "تقرت",
];

const Forme = () => {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNumber] = useState("");
  const [baladiya, setBaladiya] = useState("");
  const [city, setCity] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState() 
const { id } = useParams()

useEffect(() => {
  if (produits) {
    const selectedProduct = produits.find(
      (product) => product.id.toString() === id
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
      setProductTitle(selectedProduct.title);
      setProductPrice(selectedProduct.price);
      setImgUrl(selectedProduct.imgUrl);
    }
  }
}, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = {
        user_info: {
          name,
          email,
          phoneNum,
          baladiya,
          city,
        },
        product_info: {
          title: productTitle,
          price: productPrice,
          imgUrl: imgUrl,
        },
      };
      const response = await axios.post(
        "https://beautyplex.onrender.com/submit-form/",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      localStorage.removeItem("productInfo");
      toast.success("تم إرسال البريد الإلكتروني بنجاح");
      setBaladiya("");
      setCity("");
      setEmail("");
      setPhoneNumber("");
      setName("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("فشل في الإرسال");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <>
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="Form">
        <div className="ProductItem">
          <div className="img">
            <img id="ProductImg" src={imgUrl} alt="bioplex" />
          </div>
          <div className="desc">
            <h1>{productTitle}</h1>
            <p>Prix habituel : {productPrice} DZD</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              className="rtl-input"
              placeholder="الاسم واللقب"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              className="rtl-input"
              placeholder="البريد الإلكتروني"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phoneNum"
              className="rtl-input"
              value={phoneNum}
              placeholder="رقم الهاتف"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="baladiya"
              value={baladiya}
              className="rtl-input"
              placeholder="البلدية"
              onChange={(e) => setBaladiya(e.target.value)}
              required
            />
          </div>
          <div>
            <select
              id="city"
              value={city}
              className="rtl-input"
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">اختر المدينة</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "جار التحميل..." : "إرسال"}
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true} // Set RTL to true for Arabic text
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Forme;
