import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export const AddRestaurantForm : React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    contactNumber: "",
    mainImage: null as File | null,
    images: [] as File[],
    cuisine: "",
    priceRange: "",
  });

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, mainImage: e.target.files![0] }));
    }
  };

  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, images: Array.from(e.target.files!) }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Submit formData to API or backend
    console.log(formData);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-100 to-blue-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
        <Navbar/>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Add Restaurant Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="id"
            placeholder="Restaurant ID"
            value={formData.id}
            onChange={handleChange}
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="name"
            placeholder="Restaurant Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="cuisine"
            placeholder="Cuisine Type"
            value={formData.cuisine}
            onChange={handleChange}
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="priceRange"
            placeholder="Price Range (e.g., $$ or $$$)"
            value={formData.priceRange}
            onChange={handleChange}
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-dashed border-blue-300 p-6 rounded-xl shadow-sm">
            <label className="block w-full cursor-pointer">
              <span className="text-gray-700 font-medium block mb-2">Main Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                required
              />
            </label>
          </div>

          <div className="bg-gray-50 border border-dashed border-pink-300 p-6 rounded-xl shadow-sm">
            <label className="block w-full cursor-pointer">
              <span className="text-gray-700 font-medium block mb-2">Additional Images</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImagesChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform">
          Submit
        </button>
        <button
          onClick={ () => navigate("/") }
          className="w-full bg-gradient-to-r from-red-600 to-yellow-400 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform">
          Cancel
        </button>
      </form>
    </motion.div>
  );
};


