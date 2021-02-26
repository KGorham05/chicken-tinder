import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import "./style.css";

export const RestShow = ({ restaurant }) => (
  <>
    <Header />
    <h1 className="main">Restaurant Show</h1>
    <div>
        <div>
          <h3>{restaurant.name}</h3>
          <img alt="Restaurant" src={restaurant.image} />
          <p>{restaurant.price}</p>
          <p>{restaurant.location}</p>
          <p>{restaurant.category}</p>
        </div>
    </div>
    <Footer />
  </>
);
