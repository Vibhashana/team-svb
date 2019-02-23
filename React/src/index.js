import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import Login from "./Components/Popups/Login/Login";

import RantList from "./Scenes/RantList";
import RantDetails from "./Scenes/RantDetails";

import "./css/app.css";

function App() {
  return (
      <Router>
        <div className="App">
            <div className="page">
                {/*Header*/}
                <Header/>

                {/*Main layout*/}
                <section className="main layout--center">
                    <div className="main__content layout--wrapped">
                        <Route exact path="/" component={RantList} />
                        <Route exact path="/rant/1" component={RantDetails} />
                    </div>
                </section>

                <Loader isLoading={false}/>

                <Login/>
            </div>
        </div>
      </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
