import React, { useState } from "react";

const Page1 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormData({ name: "", email: "" });
        console.log(formData);
    };

    return (
        <>
            <div>
                <div className="container justify-content-center algin-items-center">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control col-12 col-md-12 "
                                id="exampleFormControlInput1"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control col-12 col-md-12 "
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleInputs}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-success"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Page1;
