import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";



export const LandingPage : React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <HomePage/>
        </div>
    )
}