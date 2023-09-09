import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode enabled!", "success");
      document.title = "Text Utils - Dark Mode";
      // setInterval(() => {
      //   document.title ="Text Utils - Dark Mode";
      // }, 1000);
      // setInterval(() => {
      //   document.title ="Text Utils - Trending Mode";
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!", "success");
      document.title = "Text Utils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="Text Utils" about="About Us" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}> </Route>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to Analyze below" />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
