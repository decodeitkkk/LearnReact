import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Navbar from "./Navbar.jsx";
import { BarChart } from "./BarChart.js";
import App from "../App.css";
import Page1 from "./Page1.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const Page2 = ({ filteredData, data, uniqueCategory, formData }) => {
    const [isOpen, setIsopen] = useState(false);

    //----------------------------------------------SIDEBAR
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };

    return (
        <>
            <div className="btn btn-primary wrapper" onClick={ToggleSidebar}>
                <i className="fa fa-bars"> Analyze Products </i>
            </div>
            <div className="container-fluid bg-info text-light ">
                {formData.name !== ""
                    ? `Welcome Mr./Mrs. ${formData.name} on fakeStore.`
                    : ""}
            </div>
            <div className="container d-flex ">
                <div className=" row justify-content-center ">
                    {filteredData.map((d, i) => {
                        return (
                            <Cards
                                key={i}
                                image={d.image}
                                title={d.title}
                                price={d.price}
                                description={d.description}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
                <div className="sd-header">
                    <h4 className="mb-0">Sidebar Header</h4>
                    <div className="btn btn-primary" onClick={ToggleSidebar}>
                        <i className="fa fa-times">x</i>
                    </div>
                </div>
                <div className="sd-body w-100">
                    <BarChart data={data} uniqueCategory={uniqueCategory} />
                </div>
            </div>
            <div
                className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
                onClick={ToggleSidebar}
            >
                click open
            </div>
        </>
    );
};

export default Page2;
