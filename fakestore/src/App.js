import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Page2 from "./component/Page2.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./component/Page1";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    //----------------------------------------------GETTING ALL UNIQUE CATEGORIES
    const uniqueCategory = [...new Set(data.map((data) => data.category))];

    //------------------------------------------------FILTERING DATA
    let filterSearch = (value) => {
        // console.log(value);
        const fData = data.filter((arr) => {
            return (
                arr.category.toLowerCase().includes(value.toLowerCase()) ||
                arr.title.toLowerCase().includes(value.toLowerCase())
            );
        });

        setFilteredData(fData);
    };
    useEffect(() => {
        fetchdata();
        // console.log(`fetch data executed.`);
    }, []);

    //---------------------------------------------FETCHING DATA FROM API
    let fetchdata = async () => {
        const d = await axios.get("https://fakestoreapi.com/products");
        setFilteredData(d.data);
        setData(d.data);
    };
    return (
        <>
            <BrowserRouter>
                <Navbar
                    filterSearch={filterSearch}
                    uniqueCategory={uniqueCategory}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Page1
                                formData={formData}
                                setFormData={setFormData}
                            />
                        }
                    />
                    <Route
                        path="/store"
                        element={
                            <Page2
                                filteredData={filteredData}
                                data={data}
                                uniqueCategory={uniqueCategory}
                                formData={formData}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
