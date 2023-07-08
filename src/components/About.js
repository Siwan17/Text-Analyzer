import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btntext, setBtntext] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setmyStyle({
        color: "Black",
        backgroundColor: "white",
      });
      setBtntext("Enable light Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtntext("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3"> About our Organization</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
            <strong>  Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently.
            Be it word count, character count <code>or</code>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
                <strong>  Free to use </strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. 
            TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
            <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
This word counter software works in any web browsers such as 
Chrome, Firefox, Internet Explorer, Safari, Opera. 
It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="container">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          Enable Dark Mode
        </button>
      </div> */}
    </div>
  );
}
