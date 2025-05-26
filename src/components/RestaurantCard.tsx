import React from "react";
import { Restaurant } from "../types/restaurent";
import { Star } from "lucide-react";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:transition-transform"
      onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.mainImage}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center text-sm font-medium">
          <Star className="h-4 w-4 text-yellow-400 mr-1" fill="#facc15" />
          <span>{restaurant.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="mr-2">{restaurant.cuisine}</span>
          <span>•</span>
          <span className="ml-2">{restaurant.priceRange}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
