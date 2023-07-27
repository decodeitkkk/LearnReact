import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ uniqueCategory, filterSearch }) => {
    let handleSearch = (e) => {
        filterSearch(e.target.value);
        // console.log(e.target.value);
    };
    let filterByName = (value) => {
        filterSearch(value);
    };

    return (
        <>
            <nav className="navbar  navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        FakeStore
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/store">
                                    Page 2
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Filter Search
                                </a>
                                <ul className="dropdown-menu">
                                    {uniqueCategory.map((d, i) => {
                                        return (
                                            <li key={i}>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={() =>
                                                        filterByName(d)
                                                    }
                                                >
                                                    {d}
                                                </button>
                                            </li>
                                        );
                                    })}

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Products"
                                aria-label="Search"
                                onChange={handleSearch}
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
