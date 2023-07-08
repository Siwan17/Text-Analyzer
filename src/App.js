//import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextFrom from "./components/TextFrom";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const aletMethod = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      aletMethod("Dark mode has been Enable", "success");
      document.title = "Textanalizer-Darkmode Active";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      aletMethod("Light mode has been Enable", "success");
      document.title = "Textanalizer-Lightde Active";
    }
  };

  return (
    <>
      <Navbar title="TextUtiles" aboutText='About' mode={mode} togelMode={togelMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />

          <Route
            path="/"
            element={
              <TextFrom
                aletMethod={aletMethod}
                heading="Enter the Text to Analize"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
//<label for="myBox" className="form-label"> </label>
