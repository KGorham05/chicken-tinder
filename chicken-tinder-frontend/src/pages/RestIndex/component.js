import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from 'react-router-dom';
// import "./style.css";

export const RestIndex = ({ restaurants }) => (
  <>
    <Header />
    <h1 className="main">Restaurant Index</h1>
    <div>
      {restaurants.map(restaurant => (
        <div>
          <NavLink to={`/restshow/${restaurant.id}`}>
            <h3>{restaurant.name}</h3>
          </NavLink>
          <img alt="Restaurant" src={restaurant.image}></img>
          <p>{restaurant.price}</p>
          <p>{restaurant.location}</p>
          <p>{restaurant.category}</p>
        </div>
      ))}
    </div>
    <Footer />
  </>
);
