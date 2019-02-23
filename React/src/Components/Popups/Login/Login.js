import React, {Component} from 'react';

import Loader from "../../Loader/Loader";
import FormErrors from "../../Form/FormErrors";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,

            username: '',
            password: '',

            formErrors: {
                username: '',
                password: ''
            },
            userValid: false,
            passwordValid: false,
            formValid: false
        };
    }

    handleUserInput (e) {
        console.log('a');
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value);
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userValid = this.state.userValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'username':
                userValid = value.length <= 0;
                fieldValidationErrors.username = userValid ? '' : ' is required';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: userValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.userValid && this.state.passwordValid});
    }

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

                                    <input type="text" placeholder="USERNAME"
                                           ref={(input) => { this.usernameInput = input }}
                                           value={this.state.username}
                                           name="username"
                                           onChange={(event) => this.handleUserInput(event)}/>

                                    <input type="password" placeholder="PASSWORD"
                                           value={this.state.password}
                                           name="password"
                                           onChange={(event) => this.handleUserInput(event)}/>

                                    <Loader isLoading={this.state.showLoader}/>

                                    <FormErrors formErrors={this.state.formErrors}/>

                                    <input type="submit" value="LET ME IN"
                                           disabled={!this.state.formValid}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        //this.usernameInput.focus();
    }
}

export default Login;