import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Local2.css";

function Local2() {
  const slides = [
    {
      image: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/2959aefe-7764-4b47-9e52-77f7746ebf86-floating-seashorse-original-edition-underwater-homes-3.jpg",
      title: "Under Water",
      description:"Ocean vows, love submerged celebration.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg",
      title: "Effiel Tower",
      description: "Symbol of amour's timeless embrace.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://content.r9cdn.net/rimg/dimg/3f/7b/d93c7e67-city-26896-187e2bb5b63.jpg?crop=true&width=1020&height=498",
      title: "Niagara Falls",
      description: "Majestic cascading beauty in nature.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://cdn.outsideonline.com/wp-content/uploads/2023/06/tride-jonathan-ross_h.jpg?crop=25:14&width=500&enable=upscale",
      title: "Colorado",
      description: "Rocky mountains, outdoor adventures await.",
      clickEvent: "sliderClick"
    }
  ];
  return (
    <>
      <ReactCardSlider slides={slides} />
    </>
  );
}

export default Local2;