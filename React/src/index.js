import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";

import "./css/app.css";

function App() {
  return (
      <Router>
        <div className="App">
            <div className="page">
                {/*Header*/}
                <Header/>

                {/*Main layout*/}
                <section className="main layout--center"></section>

                <Loader isLoading={false}/>
            </div>
        </div>
      </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
