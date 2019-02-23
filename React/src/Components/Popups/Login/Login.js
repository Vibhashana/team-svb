import React, {Component} from 'react';

class Login extends Component {

    render() {
        return (
            <div className={"popup " + (this.props.isOpen ? "popup--open" : "")}>
                <div className="popup__header">
                    <div title="Close" className="close layout--center"
                         onClick={this.props.hideLogin}>
                        X
                    </div>
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">

                        <div className="form">
                            <div className="form__title">
                                JOIN <span className="highlight">#</span>DEVRANT
                            </div>
                            <div className="form__description">
                                Vote and comment on others' rants. Post your own.
                            </div>
                            <form name="login">
                                <div className="login">

                                    <input type="text" placeholder="USERNAME" ref={(input) => { this.usernameInput = input }}/>
                                    <input type="password" placeholder="PASSWORD"/>

                                    <div className="loader">
                                        <div className="spinner"></div>
                                    </div>

                                    <div className="form__error">
                                        Some fields are missing !
                                    </div>

                                    <input type="submit" value="LET ME IN"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        this.usernameInput.focus();
    }
}

export default Login;