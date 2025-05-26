import React, { useState } from "react";
import { restaurants } from "../data/restaurants";
import RestaurantCard from "./RestaurantCard";
import RestaurantModal from "./RestaurantModal";
import { Restaurant } from "../types/restaurent";

const HomePage: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const openModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Restaurants</h1>
          <p className="text-gray-600">Find your next favorite place to eat</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => openModal(restaurant)}
            />
          ))}
        </div>
      </div>

      {selectedRestaurant && (
        <RestaurantModal restaurant={selectedRestaurant} onClose={closeModal} />
      )}
    </div>
  );
};

export default HomePage;
