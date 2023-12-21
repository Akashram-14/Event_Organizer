import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Card1.css";

function Card1() {
  const slides = [
    {
      image: "https://assets.vogue.com/photos/61ddcf131ec2173dd9526021/4:3/w_2170,h_1628,c_limit/bluebird-productions-little-nell-aspen-wedding-eric-kelley-17.jpg",
      title: "Wedding",
      description: "Romantic, whimsical, elegant, fun and intimate.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://www.happiestbaby.com/cdn/shop/articles/first-birthday-party-themes_1024x1024.jpg?v=1679091210",
      title: "Birthday",
      description: "Celebration of life, joyous milestones.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?s=612x612&w=0&k=20&c=SoTKXXMiJYnc4luzJz3gIdfup3MI8ZlROFNXRBruc10=",
      title: "Party",
      description: "Joyful gathering with lively ambiance.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/f2ea64dc-758e-4210-8e49-8f5858ce1040/pexels-paola-vasquez-3593434.jpg",
      title: "Baby Shower",
      description: "Celebration welcoming new life joyfully.",
      clickEvent: "sliderClick"
    }
  ];
  return (
    <>
      <ReactCardSlider slides={slides} />
    </>
  );
}

export default Card1;