import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Accordian from "./components/Accordian.jsx";
import Navbar from "./components/Navbar.jsx";
import TextArea from "./components/TextArea.jsx";
import { useState } from "react";
import './App.css';
import Alert from "./components/Alert.jsx";
import Home from "./Home.jsx";

function App() {
  let [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  let [btnText, setBtnText] = useState("Enable Dark Mode");

  function toggleMode() {
    if (mode.backgroundColor === "white") {
      setMode({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMode({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Enable Dark Mode");
    }
  }
  let [alert, setalert] = useState(null);

  function showAlert(message, type) {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  return (
    <Router>
      <div style={{ ...mode, minHeight: "100vh" }}>
        <Navbar btnText={btnText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Accordian" element={
            <div style={{ marginTop: "10vh" }}>
              <div>  <Accordian showAlert={showAlert} /></div>
            </div>
          }/>
          <Route path="/Text" element={
            <div style={{ marginTop: "10vh" }}>
              <div> <TextArea showAlert={showAlert} /></div>
            </div>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
