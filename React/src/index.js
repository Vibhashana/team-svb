import React from "react";
import ReactDOM from "react-dom";

import "./css/app.css";

function App() {
  return (
    <div className="App">
        <div className="page">

            {/*Header*/}
            <section className="header layout--center"></section>

            {/*Main layout*/}
            <section className="main layout--center"></section>

        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
