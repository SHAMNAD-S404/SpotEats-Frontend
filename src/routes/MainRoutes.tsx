import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { LandingPage } from "../pages/LandingPage";
import { AddRestaurantForm } from "../pages/AddRestaurantsForm";
import { LoginPage } from "@/pages/LoginPage";
import { SignupPage } from "@/pages/SignupPage";


export const MainRoutes : React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/add-restaurant" element={<AddRestaurantForm/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
            </Routes>
        </Router>
    )
}