import React from "react";
import { Restaurant } from "../types/restaurent";
import RestaurantCarousel from "./RestaurantCarousel";
import { X, MapPin, Phone, Star } from "lucide-react";

interface RestaurantModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

const RestaurantModal: React.FC<RestaurantModalProps> = ({ restaurant, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl transform transition-all"
        onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <RestaurantCarousel images={restaurant.images} restaurantName={restaurant.name} />
          <button
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={onClose}>
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{restaurant.name}</h2>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" fill="#facc15" />
                  <span className="ml-1 text-gray-700">{restaurant.rating}</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-700">{restaurant.cuisine}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-700">{restaurant.priceRange}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-start mb-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <span className="ml-2 text-gray-700">{restaurant.address}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
              <span className="ml-2 text-gray-700">{restaurant.contactNumber}</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Contact Restaurant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
