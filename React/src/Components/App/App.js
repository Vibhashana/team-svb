import React, {Component} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Alert from "../Popups/Alert/Alert";
import Login from "../Popups/Login/Login";

import RantList from "../../Scenes/RantList";
import RantDetails from "../../Scenes/RantDetails";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            showLoader: false,

            showAlert: false,

            alert: {
                title: 'sss',
                description: 'sssssssssssss'
            }
        };
    }

    showLogin = () => {
        this.setState({
            showLogin: true
        });
    };

    hideLogin = () => {
        this.setState({
            showLogin: false
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="page">
                        {/*Header*/}
                        <Header showLogin={this.showLogin}/>

                        {/*Main layout*/}
                        <section className="main layout--center">
                            <div className="main__content layout--wrapped">
                                <Route exact path="/" component={RantList} />
                                <Route exact path="/rant/1" component={RantDetails} />
                            </div>
                        </section>

                        <Loader isLoading={this.state.showLoader}/>

                        <Login isOpen={this.state.showLogin}
                                hideLogin={this.hideLogin}/>

                        <Alert show={this.state.showAlert}
                                title={this.state.alert.title}
                                description={this.state.alert.description}
                                close={this.hideAlert}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;