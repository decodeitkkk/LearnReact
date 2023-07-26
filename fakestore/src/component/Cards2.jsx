import axios from "axios";

const Cards = () => {
    return (
        <>
            <div className="d-flex ">
                <div className="row justify-content-center ">
                    {data.map((d, i) => {
                        return (
                            <div
                                className="card col-12 col-md-3 m-2 "
                                key={i}
                                style={{ width: "18rem" }}
                            >
                                <img
                                    src={d.image}
                                    className="card-img-top "
                                    style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                    }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title"> {d.title} </h5>
                                    <p className="card-text">
                                        {d.description
                                            .split(" ")
                                            .splice(0, 15)
                                            .join(" ")}
                                        {d.description.split(" ").length >
                                        15 ? (
                                            <button className="m-1 btn btn-sm btn-primary">
                                                read more
                                            </button>
                                        ) : (
                                            ""
                                        )}
                                    </p>

                                    <div className="card-text my-1">
                                        <span className="fw-bold">Price:</span>{" "}
                                        {d.price}{" "}
                                    </div>
                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Cards;
