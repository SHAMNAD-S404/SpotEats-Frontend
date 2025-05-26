import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RestaurantCarouselProps {
  images: string[];
  restaurantName: string;
}

const RestaurantCarousel: React.FC<RestaurantCarouselProps> = ({ images, restaurantName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-center bg-cover transition-opacity duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full cursor-pointer hover:bg-opacity-100 transition-all"
        onClick={goToPrevious}>
        <ChevronLeft size={24} className="text-gray-800" />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full cursor-pointer hover:bg-opacity-100 transition-all"
        onClick={goToNext}>
        <ChevronRight size={24} className="text-gray-800" />
      </div>

      {/* Dots/Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === slideIndex ? "bg-white scale-110" : "bg-white bg-opacity-50"
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCarousel;
