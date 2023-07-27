import React, { useState } from "react";

const Cards = ({ title, image, description, price }) => {
    const [IsReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!IsReadMore);
    };
    return (
        <>
            <div className="card m-2 " style={{ width: "18rem" }}>
                <img
                    src={image}
                    className="card-img-top"
                    style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "fit",
                    }}
                    alt="..."
                />
                <div className="card-body ">
                    <h5 className="card-title mb-2"> {title} </h5>
                    <p className="text-justify my-2 card-text align-baseline   ">
                        {IsReadMore ? description.slice(0, 150) : description}
                        <span className="fw-medium  " onClick={toggleReadMore}>
                            {IsReadMore ? "...read more" : " read less"}
                        </span>
                    </p>
                    <div>
                        <p className="card-text">
                            <span className="fw-bold mb-0">
                                Price: {price}{" "}
                            </span>
                        </p>
                        <a href="#" className=" mt-0 btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
