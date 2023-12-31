import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import DesignerCard from "./DesignerCard";

const DesignCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" mb-[100px]">
        <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {[0, 1, 2, 3, 4].map((product, index) => (
          <div className="bg-gray-400 border-[6px] border-white rounded-full p-2  shadow">
            <DesignerCard key={index} cardNo={index}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DesignCarousel;
