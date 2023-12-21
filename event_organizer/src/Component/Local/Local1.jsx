import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Local1.css";

function Local1() {
  const slides = [
    {
      image: "https://www.tekportal.net/wp-content/uploads/2019/02/catholic-church-3194.jpg",
      title: "Church",
      description: "Holy Grail",
      clickEvent: "sliderClick"
    },
    {
      image: "https://gatheringbooks.files.wordpress.com/2014/11/misty-mountain.jpg",
      title: "Mountain",
      description: "Majestic, towering, rugged, serene, breathtaking.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://www.muchbetteradventures.com/magazine/content/images/2022/09/GettyImages-1162800176.jpeg",
      title: "Island",
      description: "Enchanting paradise in azure waters.",
      clickEvent: "sliderClick"
    },
    {
      image: "https://thumbs.dreamstime.com/b/airplane-sky-sunrise-38766908.jpg",
      title: "On Air",
      description: "Live love broadcasted vows celebration.",
      clickEvent: "sliderClick"
    }
  ];
  return (
    <>
      <ReactCardSlider slides={slides} />
    </>
  );
}

export default Local1;