import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/login";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
      
      
          <Route path="/Home" element={<><Header/> <Home/></>}/>
     
        </Routes>
      </Router>

    </div>
  );
}

export default App;
