import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Card2.css";

function Card2() {
  const slides = [
    {
      image: "https://i2-prod.mirror.co.uk/incoming/article21788227.ece/ALTERNATES/s615/1_people-at-a-funeral-in-a-cemetery.jpg",
      title: "Funeral",
      description: "Heartfelt farewell to a angel.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Conference",
      description: "Knowledge sharing, networking, and collaboration.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://www.excellencevipservices.com/img/so/so1.jpg",
      title: "Movie Premiere",
      description: "Star-studded glamour unfolds on red.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/24/16745498891765.jpg",
      title: "Oscars",
      description: "Celebrating excellence in the film industry.",
      clickEvent: "sliderClick"
    }
  ];
  return (
    <>
      <ReactCardSlider slides={slides} />
    </>
  );
}

export default Card2;