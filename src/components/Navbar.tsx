import React from "react";
import { UserCircle2, PlusSquare, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Utensils className="h-8 w-8 text-orange-500" />
            <span
              onClick={() => navigate("/")}
              className="ml-2 text-2xl font-bold text-gray-900 tracking-tight cursor-pointer hover:text-blue-700">
              Spot Eats
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/add-restaurant")}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              <PlusSquare className="h-5 w-5 mr-1" />
              <span>Add Restaurant</span>
            </button>
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              <UserCircle2 className="h-5 w-5 mr-1" />
              <span>My Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
