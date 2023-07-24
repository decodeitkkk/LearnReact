import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("new text");
  const [textCount, setTextCount] = useState(0);

  const handleChangeText = (e) => {
    setText(e.target.value);
    setTextCount(text.length);
  };

  const handleUppercase = () => {
    let ntext = text.toUpperCase();
    setText(ntext);
    // console.log(text.length);
  };
  const handleLowercase = () => {
    let ntext = text.toLowerCase();
    setText(ntext);
  };
  return (
    <>
      <div className="container">
        <div className="h1 my-3 ">Text Editor</div>
        <div className="form-floating">
          <textarea
            className="form-control border border-black p-2"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "150px" }}
            value={text}
            onChange={handleChangeText}
          ></textarea>
          <button className="btn btn-primary my-3 " onClick={handleUppercase}>
            Uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleLowercase}
          >
            Lowercase
          </button>
          <div className="h1">Text Summary</div>
          <p>
            {" "}
            {text.split(" ").length} words and {text.length} characters
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
