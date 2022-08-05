import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/login";
import Home from "./Components/Home";
import { useEffect } from "react";
import { getUserauth } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(()=>{
    props.getUserauth()
  }, [])


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

const mapStateToProps = (state) =>{
  return {}

}

const mapDispatchtoProps = (dispatch) =>({
  getUserauth : () => dispatch(getUserauth())
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
